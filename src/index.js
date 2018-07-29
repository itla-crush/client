import React from 'react';
import ReactDOM from 'react-dom';

// import { initFirebase, checkSetupFirebase, signOut } from './functions/firebase-functions';
import firebase from 'firebase';

import App from './App';

// Assets
import './css/index.css';

firebase.initializeApp({
    apiKey: "AIzaSyCtY5IB3CtT6_tbkPYcPh1sGub0p87-2ac",
    authDomain: "social-crush.firebaseapp.com",
    databaseURL: "https://social-crush.firebaseio.com",
    projectId: "social-crush",
    storageBucket: "social-crush.appspot.com",
    messagingSenderId: "1031667947260"	
});

if (!window.firebase || !(firebase.app instanceof Function) || !firebase.app().options) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions and make ' +
        'sure you are running the codelab using `firebase serve`');
}

var backgroundID = Math.floor(Math.random() * (5-1) + 1);

firebase.auth().onAuthStateChanged(user => {
    if(user) {
        window.localStorage.setItem('sesion', 'true'); 
    } else {
        window.localStorage.setItem('sesion', 'false'); 
    }
});

ReactDOM.render(<App backgroundID={backgroundID} />, document.getElementById('root'));
