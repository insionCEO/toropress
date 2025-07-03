// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANEAi-OMKRo8cp-zLvicOxJu1nT5UP8oc",
  authDomain: "ai-travel-planner-b4909.firebaseapp.com",
  projectId: "ai-travel-planner-b4909",
  storageBucket: "ai-travel-planner-b4909.appspot.com",
  messagingSenderId: "497718008519",
  appId: "1:497718008519:web:450fcac1bf55ae47dbfce2",
  measurementId: "G-PYP7XSV1LH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
