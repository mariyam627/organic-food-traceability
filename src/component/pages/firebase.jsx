// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8yba37g1Xc8MkALz346tHsQcRl1Nsi4A",
  authDomain: "authentication-cfa61.firebaseapp.com",
  projectId: "authentication-cfa61",
  storageBucket: "authentication-cfa61.appspot.com",
  messagingSenderId: "910768183605",
  appId: "1:910768183605:web:9c90e7d9c9d3604e02147c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}