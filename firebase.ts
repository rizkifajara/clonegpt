import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APP_API_KEY!,
  authDomain: process.env.FIREBASE_APP_AUTH_DOMAIN!,
  projectId: "chatgpt-clone-5ca82",
  storageBucket: process.env.FIREBASE_APP_STORAGE_BUCKET!,
  messagingSenderId: process.env.FIREBASE_APP_MESSAGING_SENDER_ID!,
  appId: process.env.FIREBASE_APP_ID!,
};

// get exisiting apps, otherwise initialize
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
