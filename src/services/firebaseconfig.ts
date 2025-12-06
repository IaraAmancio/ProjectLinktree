// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDtJBC-n6sAeDbFAdMxNwqdhX50KQFTwe4",
  authDomain: "projetolinktree.firebaseapp.com",
  projectId: "projetolinktree",
  storageBucket: "projetolinktree.firebasestorage.app",
  messagingSenderId: "1048290354139",
  appId: "1:1048290354139:web:59b72e5ec6ab9a3148bdfe",
  measurementId: "G-0P6KE0LVV6"
};

// Initializando o Cloud Firestore
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}
