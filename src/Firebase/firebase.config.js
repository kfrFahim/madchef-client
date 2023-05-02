// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGpeTUP4w1gFl_asMFMniIAXwpGsQ4Hts",
  authDomain: "madchef-kekappa.firebaseapp.com",
  projectId: "madchef-kekappa",
  storageBucket: "madchef-kekappa.appspot.com",
  messagingSenderId: "148637124713",
  appId: "1:148637124713:web:4bb002eb5a114b33dc3af8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;