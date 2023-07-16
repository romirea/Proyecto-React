// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHHADsLY552WpwG2baoq4yiGjhgLuPS08",
  authDomain: "rs-home-cd88b.firebaseapp.com",
  projectId: "rs-home-cd88b",
  storageBucket: "rs-home-cd88b.appspot.com",
  messagingSenderId: "360301317125",
  appId: "1:360301317125:web:9f31c39791efd03517206c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

