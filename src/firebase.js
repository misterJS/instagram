
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDaZUJN8MFGdaNxNCaHr87_tfKFln_O2NE",
    authDomain: "inst4gram-c9709.firebaseapp.com",
    projectId: "inst4gram-c9709",
    storageBucket: "inst4gram-c9709.appspot.com",
    messagingSenderId: "647029850274",
    appId: "1:647029850274:web:a6014e22df9110b15917fb",
    measurementId: "G-NW64SG0L5L"
};

firebase.initializeApp(firebaseConfig);

export default firebase;