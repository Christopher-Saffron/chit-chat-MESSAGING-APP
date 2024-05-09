// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "chitchat-2dac0.firebaseapp.com",
  projectId: "chitchat-2dac0",
  storageBucket: "chitchat-2dac0.appspot.com",
  messagingSenderId: "153790347174",
  appId: "1:153790347174:web:993064b214548a048f4167",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// if (!getApps().length) {
//     initializeApp(firebaseConfig);
// }

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
export default app;
