// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Corrected here

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL53tTwurB8rCCH6S3i1Ajns04prKYUiI",
  authDomain: "booking-bc522.firebaseapp.com",
  projectId: "booking-bc522",
  storageBucket: "booking-bc522.appspot.com",
  messagingSenderId: "1036358237175",
  appId: "1:1036358237175:web:d815a2bd65ef43e72a4cf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Passed the app instance to getFirestore

export { auth, db };
