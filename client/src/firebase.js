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
  apiKey: "AIzaSyA7Nc6vDUwlC2YaioWwmnnE2TDuhdRogyI",
  authDomain: "rescribe-b4105.firebaseapp.com",
  projectId: "rescribe-b4105",
  storageBucket: "rescribe-b4105.firebasestorage.app",
  messagingSenderId: "402557231546",
  appId: "1:402557231546:web:39280be1ae4e239a507d83",
  measurementId: "G-ETHJGE154W"
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
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  };
  
  export const logout = async () => {
    await signOut(auth);
  };
  