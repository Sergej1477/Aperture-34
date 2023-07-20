// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: "aperture-34.firebaseapp.com",
  projectId: "aperture-34",
  storageBucket: "aperture-34.appspot.com",
  messagingSenderId: "791956069494",
  appId: "1:791956069494:web:5b16cd5bdf6db1aa22d357"
};

// Initialize Firebase
initializeApp(firebaseConfig);