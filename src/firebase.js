// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoDt5GB1o7Xg389unm-gQNf_sH-Wc-C3I",
  authDomain: "e-commerce-68355.firebaseapp.com",
  projectId: "e-commerce-68355",
  storageBucket: "e-commerce-68355.firebasestorage.app",
  messagingSenderId: "536665615805",
  appId: "1:536665615805:web:2c1e955e11805e9e4236d4",
  measurementId: "G-KTKZ7K2QLX"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
