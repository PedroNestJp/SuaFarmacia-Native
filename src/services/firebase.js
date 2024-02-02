// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_API_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_API_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_API_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_API_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_API_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db };