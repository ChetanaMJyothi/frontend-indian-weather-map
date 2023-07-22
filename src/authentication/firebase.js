// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWPL1mKtW23a7wwMtPBSqppvB_gX2H_PU",
  authDomain: "weather-map-8ecf8.firebaseapp.com",
  projectId: "weather-map-8ecf8",
  storageBucket: "weather-map-8ecf8.appspot.com",
  messagingSenderId: "740722677420",
  appId: "1:740722677420:web:bb37c5286a83a58190f109",
  measurementId: "G-J4M0847JKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export {auth};