import { takeLatest, put, all, call, select } from 'typed-redux-saga/macro';
import { User } from 'firebase/auth';

import { USER_ACTION_TYPES } from './user.types';
import { setCartItems } from '../cart/cart.action';
import { selectCurrentUser } from './user.selector';
import { selectCartItems } from '../cart/cart.selector';

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
} from './user.action';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGoogle as signInWithGoogleAuth,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalInformation,
} from '../../utils/firebase/firebase.utils';

// Navigation helper function using React Router
const navigateToPage = (path: string) => {
  // Use setTimeout to ensure navigation happens after Redux state updates
  setTimeout(() => {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }, 100);
};

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalDetails?: AdditionalInformation,
  isSignUp: boolean = false
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );

    if (userSnapshot) {
      const userData = { ...userSnapshot.data(), id: userSnapshot.id };
      yield* put(signInSuccess(userData));
      
      // Restore user's saved cart (only for returning users, not new sign-ups)
      if (!isSignUp) {
        try {
          const savedCart = localStorage.getItem(`cart_${userData.id}`);
          if (savedCart) {
            const cartItems = JSON.parse(savedCart);
            yield* put(setCartItems(cartItems));
            // Remove the saved cart since it's now restored
            localStorage.removeItem(`cart_${userData.id}`);
          }
        } catch (error) {
          console.error('Error restoring cart from localStorage:', error);
        }
      }
      
      // Handle navigation after successful authentication
      if (isSignUp) {
        // After sign-up, always redirect to home page
        navigateToPage('/');
      } else {
        // For sign-in, check if user came from checkout
        const redirectAfterAuth = sessionStorage.getItem('redirectAfterAuth');
        if (redirectAfterAuth) {
          sessionStorage.removeItem('redirectAfterAuth');
          navigateToPage(redirectAfterAuth);
        } else {
          // Default redirect to home page for normal sign-in
          navigateToPage('/');
        }
      }
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const result = yield* call(signInWithGoogleAuth);
    // Handle both popup and redirect results
    if (result && result.user) {
      // Popup authentication - we get the user immediately
      yield* call(getSnapshotFromUserAuth, result.user);
    }
    // If redirect authentication was used, the user will be redirected
    // and the authentication state will be handled by getCurrentUser on return
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) {
      // If no Firebase user but we have cached data, clear the cache
      const cachedUser = localStorage.getItem('currentUser');
      if (cachedUser) {
        localStorage.removeItem('currentUser');
        yield* put(signOutSuccess());
      }
      return;
    }
    // Only update authentication state, don't navigate
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth
    );

    if (userSnapshot) {
      const userData = { ...userSnapshot.data(), id: userSnapshot.id };
      yield* put(signInSuccess(userData));
      
      // Check if user has a saved cart and current cart is empty
      const currentCartItems = yield* select(selectCartItems);
      if (currentCartItems.length === 0) {
        try {
          const savedCart = localStorage.getItem(`cart_${userData.id}`);
          if (savedCart) {
            const cartItems = JSON.parse(savedCart);
            yield* put(setCartItems(cartItems));
            // Remove the saved cart since it's now restored
            localStorage.removeItem(`cart_${userData.id}`);
          }
        } catch (error) {
          console.error('Error restoring cart from localStorage:', error);
        }
      }
    }
  } catch (error) {
    // If Firebase auth fails, clear cached data
    const cachedUser = localStorage.getItem('currentUser');
    if (cachedUser) {
      localStorage.removeItem('currentUser');
      yield* put(signOutSuccess());
    }
    yield* put(signInFailed(error as Error));
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signOut() {
  try {
    // Save current user's cart before signing out
    const currentUser = yield* select(selectCurrentUser);
    const cartItems = yield* select(selectCartItems);
    
    if (currentUser && cartItems.length > 0) {
      try {
        localStorage.setItem(`cart_${currentUser.id}`, JSON.stringify(cartItems));
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
      }
    }
    
    yield* call(signOutUser);
    yield* put(signOutSuccess());
    // Clear cart when user signs out
    yield* put(setCartItems([]));
    
    // Navigate to sign-in page after successful sign out
    navigateToPage('/sign-in');
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalDetails },
}: SignUpSuccess) {
  // Clear cart for new users to ensure clean slate
  yield* put(setCartItems([]));
  yield* call(getSnapshotFromUserAuth, user, additionalDetails, true);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
