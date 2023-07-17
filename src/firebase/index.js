import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY ?? process.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN ?? process.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID ?? process.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET ?? process.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID ?? process.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID ?? process.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID ?? process.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
