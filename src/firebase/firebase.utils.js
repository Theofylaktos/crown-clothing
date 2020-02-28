import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCdIIqSYPpZh-RK5iN-Wal6vYktbV1gwPs",
    authDomain: "crown-db-c58c9.firebaseapp.com",
    databaseURL: "https://crown-db-c58c9.firebaseio.com",
    projectId: "crown-db-c58c9",
    storageBucket: "crown-db-c58c9.appspot.com",
    messagingSenderId: "480235862195",
    appId: "1:480235862195:web:ad3caf1fdf9a3a053a98c6",
    measurementId: "G-LK1FN24D98"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;