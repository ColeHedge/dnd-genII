import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyD41QljJ0pzrjtlSF6xeDAq8GVxCXRaq-M",
  authDomain: "dnd-gen.firebaseapp.com",
  databaseURL: "https://dnd-gen.firebaseio.com",
  projectId: "dnd-gen",
  storageBucket: "dnd-gen.appspot.com",
  messagingSenderId: "235368441936"
};
var fire = firebase.initializeApp(config);
export default fire;