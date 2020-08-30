import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCmM7YjO7mqb2P9wGEeEcbKlH3P27QaSAM",
    authDomain: "react-prac-4dc33.firebaseapp.com",
    databaseURL: "https://react-prac-4dc33.firebaseio.com",
    projectId: "react-prac-4dc33",
    storageBucket: "react-prac-4dc33.appspot.com",
    messagingSenderId: "67677965859",
    appId: "1:67677965859:web:18a561305bb085db0eeb96",
    measurementId: "G-XW0JE7RY57"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;