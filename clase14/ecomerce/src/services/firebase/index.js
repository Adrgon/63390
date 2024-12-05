// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfrCLxIrz7ikbA2LNx1nvTYrmH4ECa27o",
  authDomain: "comision-63390.firebaseapp.com",
  projectId: "comision-63390",
  storageBucket: "comision-63390.firebasestorage.app",
  messagingSenderId: "421392262576",
  appId: "1:421392262576:web:4baddb960b66fd72bfa275",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
