import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBBiwZBUKYk5jpd3sk8zhv2chRbPtafiYE",
  authDomain: "line-clone-f456f.firebaseapp.com",
  projectId: "line-clone-f456f",
  storageBucket: "line-clone-f456f.appspot.com",
  messagingSenderId: "343340523911",
  appId: "1:343340523911:web:b42a4388bf7c33e4a77322",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
