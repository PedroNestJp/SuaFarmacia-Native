// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1aj5xsJ0LamYVLhDZi1GSALFuoheqnBY",
  authDomain: "suafarmacia-dda6d.firebaseapp.com",
  projectId: "suafarmacia-dda6d",
  storageBucket: "suafarmacia-dda6d.appspot.com",
  messagingSenderId: "964543940101",
  appId: "1:964543940101:web:13953e7bac98d3deeebe6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log('FirebaseConfig:', firebaseConfig);
const auth = getAuth(app);
console.log('Firestore DB:', auth);

export {app, auth, db}