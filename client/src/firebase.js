// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
  } from "firebase/auth";

  

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

export const register = async (email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  };
  
  export const login = async (email, password) => {
    console.log("hit login route")
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log("result", "auth", result, auth)
    return result.user;
  };
  
  export const logout = async () => {
    await signOut(auth);
  };
  