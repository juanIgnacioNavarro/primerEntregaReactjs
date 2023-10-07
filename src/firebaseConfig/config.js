import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBwiNpp_F8_Tnc-uSVaX4rrhyCLmDr4aRQ",
  authDomain: "project-e-commerce-9ef45.firebaseapp.com",
  projectId: "project-e-commerce-9ef45",
  storageBucket: "project-e-commerce-9ef45.appspot.com",
  messagingSenderId: "343106858697",
  appId: "1:343106858697:web:96530a28988d99ae7a6718"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)