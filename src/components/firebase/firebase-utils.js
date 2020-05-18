import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAAFPFhiHlElGNfh7hLMLGHyiEq54JsBwI",
  authDomain: "clothingdb-2352e.firebaseapp.com",
  databaseURL: "https://clothingdb-2352e.firebaseio.com",
  projectId: "clothingdb-2352e",
  storageBucket: "clothingdb-2352e.appspot.com",
  messagingSenderId: "445926177120",
  appId: "1:445926177120:web:1dbb76db2cd5e391a4c605",
  measurementId: "G-W2EC0GLYFK",
};

firebase.initializeApp(config);
const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
