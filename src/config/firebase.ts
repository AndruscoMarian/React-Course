// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE297y1450oEpuT9N1ujYTxO4H8IIMUo0",
  authDomain: "react-course-fire.firebaseapp.com",
  projectId: "react-course-fire",
  storageBucket: "react-course-fire.appspot.com",
  messagingSenderId: "346940630148",
  appId: "1:346940630148:web:8769a6db4fa816d0848ed1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
