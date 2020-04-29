import firebase from "firebase/app";
import "firebase/firestore"; //for database
import "firebase/auth"; //for google auth

const config = {
  apiKey: "AIzaSyAFefgomnbt2CQv2j9r4JMNdaoe6IIE_OU",
  authDomain: "crown-db-d8d32.firebaseapp.com",
  databaseURL: "https://crown-db-d8d32.firebaseio.com",
  projectId: "crown-db-d8d32",
  storageBucket: "crown-db-d8d32.appspot.com",
  messagingSenderId: "1074858123736",
  appId: "1:1074858123736:web:d59bf8ff3f5957ae1492ad",
  measurementId: "G-P6TB1W6VFG",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
