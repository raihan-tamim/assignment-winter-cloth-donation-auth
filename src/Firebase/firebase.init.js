// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeRAphOwp9Os83Iu_KKweEFezocWr33JE",
  authDomain: "winter-cloth-donation-au-96fd4.firebaseapp.com",
  projectId: "winter-cloth-donation-au-96fd4",
  storageBucket: "winter-cloth-donation-au-96fd4.firebasestorage.app",
  messagingSenderId: "551921835623",
  appId: "1:551921835623:web:f25920e4935f62ba91fec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);