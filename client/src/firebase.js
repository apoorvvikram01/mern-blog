// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e38e8.firebaseapp.com",
  projectId: "mern-blog-e38e8",
  storageBucket: "mern-blog-e38e8.appspot.com",
  messagingSenderId: "256678718507",
  appId: "1:256678718507:web:c4c8c21d9df128af3cce6e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);