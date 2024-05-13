import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "chitchat-2dac0.firebaseapp.com",
  projectId: "chitchat-2dac0",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderIdd,
  appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
};

const app = initializeApp(firebaseConfig);

// if (!getApps().length) {
//     initializeApp(firebaseConfig);
// }

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
export default app;
