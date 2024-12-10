
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK5xi26bDr2DPccok059DL_qyRMaMfgvE",
  authDomain: "comision-63390-5bbf8.firebaseapp.com",
  projectId: "comision-63390-5bbf8",
  storageBucket: "comision-63390-5bbf8.firebasestorage.app",
  messagingSenderId: "400323518780",
  appId: "1:400323518780:web:ae6a4bfa5237d93fb0fe39",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
