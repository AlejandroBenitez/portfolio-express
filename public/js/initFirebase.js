// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGVhEGRE4xALt-Xu96OtvGMy2po8Kw3No",
  authDomain: "alejandrobenitezportfolio.firebaseapp.com",
  projectId: "alejandrobenitezportfolio",
  storageBucket: "alejandrobenitezportfolio.appspot.com",
  messagingSenderId: "954857149152",
  appId: "1:954857149152:web:3122303d7c28031d12b685",
  measurementId: "G-K1EKNRCWNR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
