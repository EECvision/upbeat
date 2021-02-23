import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCpRpiLphFFt9VX4ZDIHzMiTk3hBmDElEY",
  authDomain: "nuf9ja.firebaseapp.com",
  projectId: "nuf9ja",
  messagingSenderId: "894354773295",
  appId: "1:894354773295:web:093b37661883786bf57dda",
  measurementId: "G-F3E3ZGDC8H",
  storageBucket: "gs://nuf9ja.appspot.com/"
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


