import { AnyAction } from 'redux';

import { USER_ACTION_TYPES } from './user.types';

import {
  signInFailed,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
  signInSuccess,
  googleSignInStart,
  emailSignInStart,
  signUpStart,
  signOutStart,
} from './user.action';

import { UserData } from '../../utils/firebase/firebase.utils';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

// Helper function to get cached user from localStorage
const getCachedUser = (): UserData | null => {
  try {
    const cachedUser = localStorage.getItem('currentUser');
    return cachedUser ? JSON.parse(cachedUser) : null;
  } catch (error) {
    console.error('Error parsing cached user:', error);
    localStorage.removeItem('currentUser');
    return null;
  }
};

const INITIAL_STATE: UserState = {
  currentUser: getCachedUser(), // Initialize from localStorage
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (
    googleSignInStart.match(action) ||
    emailSignInStart.match(action) ||
    signUpStart.match(action) ||
    signOutStart.match(action)
  ) {
    return { ...state, isLoading: true, error: null };
  }

  if (signInSuccess.match(action)) {
    // Cache user data to localStorage
    try {
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
    } catch (error) {
      console.error('Error caching user to localStorage:', error);
    }
    return { ...state, currentUser: action.payload, isLoading: false, error: null };
  }

  if (signOutSuccess.match(action)) {
    // Clear cached user data from localStorage
    try {
      localStorage.removeItem('currentUser');
    } catch (error) {
      console.error('Error removing cached user from localStorage:', error);
    }
    return { ...state, currentUser: null, isLoading: false, error: null };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
