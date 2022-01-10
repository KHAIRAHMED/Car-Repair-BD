import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC4H0xP-b1msLuNCsCQxHgJyer598Po0ZM",
    authDomain: "car-repair-bd.firebaseapp.com",
    projectId: "car-repair-bd",
    storageBucket: "car-repair-bd.appspot.com",
    messagingSenderId: "898046476417",
    appId: "1:898046476417:web:a96041a578e254d216cd80"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)