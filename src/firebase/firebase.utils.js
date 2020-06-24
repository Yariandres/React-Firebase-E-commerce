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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
