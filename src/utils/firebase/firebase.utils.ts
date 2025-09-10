import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

import { Category } from '../../store/categories/category.types';
import { Order } from '../../store/orders/order.types';
import { shouldUseRedirectFlow } from '../device/device.utils';

const firebaseConfig = {
  apiKey: 'AIzaSyCwAr-dtyAlzieac1bWPbdkTTpGIeLba3w',
  authDomain: 'crwn-db-dd0c9.firebaseapp.com',
  projectId: 'crwn-db-dd0c9',
  storageBucket: 'crwn-db-dd0c9.appspot.com',
  messagingSenderId: '1091953651821',
  appId: '1:1091953651821:web:998353ce58f9b1f7684f64',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Smart sign-in function that tries popup first, falls back to redirect on error
export const signInWithGoogle = async () => {
  try {
    // Try popup first (works on desktop)
    return await signInWithPopup(auth, googleProvider);
  } catch (error: any) {
    // If popup fails (CORS, iOS, etc.), fall back to redirect
    if (error.code === 'auth/popup-blocked' || 
        error.code === 'auth/popup-closed-by-user' ||
        error.message?.includes('Cross-Origin-Opener-Policy')) {
      return signInWithRedirect(auth, googleProvider);
    }
    // Re-throw other errors
    throw error;
  }
};

export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  id: string;
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

// Order management functions
export const createOrderDocument = async (orderData: any) => {
  const orderNumber = `ORD-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`;
  const orderId = `${orderData.userId}_${Date.now()}`;
  
  const orderDocRef = doc(db, 'orders', orderId);
  
  // Calculate totals from items if not provided or if they are 0
  let calculatedSubtotal = orderData.subtotal || 0;
  let calculatedTotal = orderData.total || 0;
  
  if (calculatedSubtotal === 0 && orderData.items && orderData.items.length > 0) {
    calculatedSubtotal = orderData.items.reduce((total: number, item: any) => {
      return total + (item.price * item.quantity);
    }, 0);
  }
  
  const calculatedTax = orderData.tax || Math.round(calculatedSubtotal * 0.08 * 100) / 100;
  const calculatedShipping = orderData.shipping || 0;
  
  if (calculatedTotal === 0) {
    calculatedTotal = calculatedSubtotal + calculatedTax + calculatedShipping;
  }
  
  const order = {
    id: orderId,
    orderNumber,
    ...orderData,
    subtotal: calculatedSubtotal,
    total: calculatedTotal,
    shipping: calculatedShipping,
    tax: calculatedTax,
  };

  await setDoc(orderDocRef, order);
  return order;
};

export const getUserOrders = async (userId: string): Promise<Order[]> => {
  const ordersRef = collection(db, 'orders');
  const q = query(ordersRef);
  const querySnapshot = await getDocs(q);
  
  const orders = querySnapshot.docs
    .map(doc => ({ 
      ...doc.data(), 
      createdAt: doc.data().createdAt.toDate() 
    } as Order))
    .filter((order: Order) => order.userId === userId)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    
  return orders;
};
