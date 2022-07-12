import $ from 'jquery';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
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

// AUTH

const whenSignedIn = $("#whenSignedIn");
const whenSignedOut = $("#whenSignedOut");
const userDetails = $("#userDeteils");

// Google Provider
const provider = new GoogleAuthProvider();

// Sign in on click
signInBtn.onclick = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

signOutBtn.onclick = () => signOut(auth)
  .then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  
  // User Management
  
  onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('logged in !');

    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    whenSignedIn.show();
    whenSignedOut.hide();
    userDetails.html("<h3>hello " + user.displayName + " !<h3/> <p>User ID: " + user.uid + "</p>");
    // ...
  } else {
    console.log('not logged in !');
    // User is signed out
    whenSignedIn.hide();
    whenSignedOut.show();
    userDetails.innerHTML = '';
  }
});

// DB

