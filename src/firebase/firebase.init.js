// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEaK6UYxHqmYoZAsB-CTWJrpacDke98AY",
    authDomain: "espresso-emporium-3e4c2.firebaseapp.com",
    projectId: "espresso-emporium-3e4c2",
    storageBucket: "espresso-emporium-3e4c2.firebasestorage.app",
    messagingSenderId: "239553094403",
    appId: "1:239553094403:web:d3ca23ae2b9a9a916fff36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);