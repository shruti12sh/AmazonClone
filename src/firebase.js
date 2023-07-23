
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAjCm9KfClWIcojhkiMWCbDelh1gG2Ftu4",
    authDomain: "clone-6b0d9.firebaseapp.com",
    projectId: "clone-6b0d9",
    storageBucket: "clone-6b0d9.appspot.com",
    messagingSenderId: "889897542518",
    appId: "1:889897542518:web:e673e818f159575c275057",
    measurementId: "G-GX7PVVVWRB"
  };

// Initialize Firebase
const fireapp = firebase.initializeApp(firebaseConfig);
const db = fireapp.firestore();
const auth = firebase.auth();

export { db, auth };