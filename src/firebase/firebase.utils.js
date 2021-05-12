import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAwjWKHQ4pkzEIb3NNqWUQE-JDvM6gcbrg",
  authDomain: "upbeat-cffa4.firebaseapp.com",
  projectId: "upbeat-cffa4",
  storageBucket: "gs://upbeat-cffa4.appspot.com",
  messagingSenderId: "879988826476",
  appId: "1:879988826476:web:6820807efa5b442fe19349",
  measurementId: "G-LFZMSQ3SPS"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export const firebas = firebase;
export const storage = firebase.storage();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storageRef = storage.ref();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async(userAuth, additionalData)=>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      alert("error creating user")
      console.log("error creating user",error.message);
    }
  }
  return userRef;
}
