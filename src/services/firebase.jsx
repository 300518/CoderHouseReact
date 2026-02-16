// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUlmyS4W1zcqbccfSa9DBTHKSj1nv464k",
  authDomain: "ecommerce-react-1ef95.firebaseapp.com",
  projectId: "ecommerce-react-1ef95",
  storageBucket: "ecommerce-react-1ef95.firebasestorage.app",
  messagingSenderId: "946995318550",
  appId: "1:946995318550:web:d2f104ac9aa22229438a37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
