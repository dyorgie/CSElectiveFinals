// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-4Fvzi4LqgHYZcpk0NHYg2_LNOPJOllY",
  authDomain: "cselectivefinals.firebaseapp.com",
  projectId: "cselectivefinals",
  storageBucket: "cselectivefinals.firebasestorage.app",
  messagingSenderId: "549508078593",
  appId: "1:549508078593:web:a082f071b11e4072d43400",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =  getFirestore(app);

export { app, auth, db };
