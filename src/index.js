import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

// Components
import Landing from './views/landing/Landing.js';
// import Home from './views/home/Home.js';

// Assets
import './css/index.css';

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCtY5IB3CtT6_tbkPYcPh1sGub0p87-2ac",
    authDomain: "social-crush.firebaseapp.com",
    databaseURL: "https://social-crush.firebaseio.com",
    projectId: "social-crush",
    storageBucket: "social-crush.appspot.com",
    messagingSenderId: "1031667947260"	
});

ReactDOM.render(<Landing />, document.getElementById('root'));




// Initialize Firebase
// var config = {
// 	apiKey: "AIzaSyCtY5IB3CtT6_tbkPYcPh1sGub0p87-2ac",
// 	authDomain: "social-crush.firebaseapp.com",
// 	databaseURL: "https://social-crush.firebaseio.com",
// 	projectId: "social-crush",
// 	storageBucket: "",
// 	messagingSenderId: "1031667947260"
// };
// firebase.initializeApp(config);