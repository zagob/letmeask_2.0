import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged, signInWithPopup, signOut
} from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  get,
  getDatabase,
  off,
  onValue,
  push,
  ref,
  remove,
  set,
  update
} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SEND_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase();

export {
  firebase,
  auth,
  signInWithPopup,
  GoogleAuthProvider,
  database,
  ref,
  get,
  set,
  signOut,
  onValue,
  update,
  off,
  push,
  remove,
  onAuthStateChanged,
};
