// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBux95ZWbKsXYgciZwaiQKBdhAT8Pscaew",
  authDomain: "fbdp-a7d1c.firebaseapp.com",
  projectId: "fbdp-a7d1c",
  storageBucket: "fbdp-a7d1c.appspot.com",
  messagingSenderId: "226723306809",
  appId: "1:226723306809:web:b35e67f1ef9c366e439ce8",
  measurementId: "G-PP54JDY9J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);