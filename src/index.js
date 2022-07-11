// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
console.log('index says hello World!');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = initializeApp({

  apiKey: "AIzaSyDeDwNkiShi0gGTVp8MBFjrJYKNr2rQHhw",

  authDomain: "manametrics-b78e7.firebaseapp.com",

  projectId: "manametrics-b78e7",

  storageBucket: "manametrics-b78e7.appspot.com",

  messagingSenderId: "709223182729",

  appId: "1:709223182729:web:c95a7d9938579c02d33158",

  measurementId: "G-SWLGF9LKCR"

});

// Initialize Firebase

const analytics = getAnalytics(firebaseConfig);
const auth = getAuth(firebaseConfig);
const db = getFirestore(firebaseConfig);

// APP

console.log(firebaseConfig);