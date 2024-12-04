// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnSDT32SxHE5S7Q37FastWSkZEUdaHFWk",
  authDomain: "chill-gamer-project.firebaseapp.com",
  projectId: "chill-gamer-project",
  storageBucket: "chill-gamer-project.firebasestorage.app",
  messagingSenderId: "310068570539",
  appId: "1:310068570539:web:cf5300915f7d3ec6408aee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
