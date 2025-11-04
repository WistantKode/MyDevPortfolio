// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEWMSqTudGpfgKSSAu1MVf3iJJJuyLhi4",
  authDomain: "portfolio-modjo-2.firebaseapp.com",
  projectId: "portfolio-modjo-2",
  storageBucket: "portfolio-modjo-2.appspot.com",
  messagingSenderId: "901772672605",
  appId: "1:901772672605:web:53566810e66ca3762ad7b4",
  measurementId: "G-DWXH07774R"
};
// config 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);