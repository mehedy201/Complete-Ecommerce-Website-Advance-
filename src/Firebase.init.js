// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Complete Ecommerce Shop web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1YA2uq1k9olGn93V21DgnjCl_N9hJheQ",
    authDomain: "complete-ecommerce-shop.firebaseapp.com",
    projectId: "complete-ecommerce-shop",
    storageBucket: "complete-ecommerce-shop.appspot.com",
    messagingSenderId: "498560711190",
    appId: "1:498560711190:web:a5bbfa59d38394fadb5337",
    measurementId: "G-H8XPXJ30QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;

