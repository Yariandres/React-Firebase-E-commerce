import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {  
  apiKey: "AIzaSyDQrqFJ-mvSlKm1XW11x5d-G0Xug3dAuhQ",
  authDomain: "ecomm-db-26618.firebaseapp.com",
  databaseURL: "https://ecomm-db-26618.firebaseio.com",
  projectId: "ecomm-db-26618",
  storageBucket: "ecomm-db-26618.appspot.com",
  messagingSenderId: "831384842998",
  appId: "1:831384842998:web:188b0ed9ce518afe4a72d7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;