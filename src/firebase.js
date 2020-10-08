import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcmOyVQEPhVT3WceWZJy9-nEUBRIY0S2s",
  authDomain: "autoform-vue-94b44.firebaseapp.com",
  databaseURL: "https://autoform-vue-94b44.firebaseio.com",
  projectId: "autoform-vue-94b44",
  storageBucket: "autoform-vue-94b44.appspot.com",
  messagingSenderId: "418171284321",
  appId: "1:418171284321:web:c3b9052712b4d6acb7f320",
  measurementId: "G-8HG4CJ0R2H"
});

const db = firebaseApp.firestore();

export default db;
