import * as firebase from 'firebase'
require('@firebase/firestore')
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBjHk27x6WhGXXb6PiFx0ygeAIzRs9o0p8",
  authDomain: "willy-3580e.firebaseapp.com",
  databaseURL: "https://willy-3580e-default-rtdb.firebaseio.com",
  projectId: "willy-3580e",
  storageBucket: "willy-3580e.appspot.com",
  messagingSenderId: "34802593714",
  appId: "1:34802593714:web:02e051af27134aa12b3eab"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();