import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDoY3t469Q-qbGuh_IIwX_3C9mdyOG-dlY",
    authDomain: "backend-abced.firebaseapp.com",
    databaseURL: "https://backend-abced-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "backend-abced",
    storageBucket: "backend-abced.appspot.com",
    messagingSenderId: "289815909255",
    appId: "1:289815909255:web:5692ada93819b6213fb922",
    measurementId: "G-SKXRC33Y29"
  };
  const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 // const fireDb = firebase.initializeApp(firebaseConfig)
  //export default fireDb.database().ref();
  export { db };