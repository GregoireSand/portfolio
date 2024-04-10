import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAS325VinOxzDCoiUZ7ayf8u2at797neRA",
    authDomain: "portfolio-52b48.firebaseapp.com",
    databaseURL: "https://portfolio-52b48-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfolio-52b48",
    storageBucket: "portfolio-52b48.appspot.com",
    messagingSenderId: "530039453691",
    appId: "1:530039453691:web:2f7a09e970ddfc71d1fd5e"
});

const db = firebaseApp.firestore();

export { db };