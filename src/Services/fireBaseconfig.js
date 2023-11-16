// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVDRSeYYxEVJnO7WSEpQBl-KwesltanCY",
  authDomain: "react-auth-2847c.firebaseapp.com",
  projectId: "react-auth-2847c",
  storageBucket: "react-auth-2847c.appspot.com",
  messagingSenderId: "930754908870",
  appId: "1:930754908870:web:d13587239d0c0e7cd0bdc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);