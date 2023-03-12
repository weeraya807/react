// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; //ใช้กับ signin signup
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYieLt1VifW5gCXJjmJiHBq5cBYXMIWSQ",
  authDomain: "reactdear-73bc2.firebaseapp.com",
  projectId: "reactdear-73bc2",
  storageBucket: "reactdear-73bc2.appspot.com",
  messagingSenderId: "825726710641",
  appId: "1:825726710641:web:bbba1b41f4ef733547fcd0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); //ใส่ export เพราะต้องเรียกใช้หน้าอื่น