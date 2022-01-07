import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSRdA_ip3NfDXMqonyhLVc8lF897HDTvM",
  authDomain: "planning-data-b0cbc.firebaseapp.com",
  projectId: "planning-data-b0cbc",
  storageBucket: "planning-data-b0cbc.appspot.com",
  messagingSenderId: "973585711660",
  appId: "1:973585711660:web:23b045edcd890607174789",
  measurementId: "G-1FGH0L8H3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;