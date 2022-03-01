import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const {analytics} = firebase
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCET9GfGhqhdxoezTeyMEyXwcEr1UTq-s",
  authDomain: "chat-app-ced02.firebaseapp.com",
  projectId: "chat-app-ced02",
  storageBucket: "chat-app-ced02.appspot.com",
  messagingSenderId: "499582958562",
  appId: "1:499582958562:web:8a904f76f82d055cb857bb",
  measurementId: "G-F2N6Z3SQ3R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();


const auth = firebase.auth();
const db = firebase.firestore();
// auth.useEmulator('http://localhost:9099');
// if (window.location.hostname === 'localhost') {
//   db.useEmulator('localhost', '8080');
// }
export {auth,db};
export default firebase;
