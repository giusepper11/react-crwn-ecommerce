import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBANsYEfhH_v9olHmpCAuN7Y0KSl-W2Rfo",
    authDomain: "crown-db-eb147.firebaseapp.com",
    databaseURL: "https://crown-db-eb147.firebaseio.com",
    projectId: "crown-db-eb147",
    storageBucket: "",
    messagingSenderId: "1043596861361",
    appId: "1:1043596861361:web:20754a92365829b6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
