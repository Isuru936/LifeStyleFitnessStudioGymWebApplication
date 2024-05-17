import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ToastContainer from "./shared/toast/ToastContainer.jsx";
import "./index.css";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lsfs-1a314.firebaseapp.com",
  projectId: "lsfs-1a314",
  storageBucket: "lsfs-1a314.appspot.com",
  messagingSenderId: "513428141349",
  appId: "1:513428141349:web:e34962f0fcf32aa68e96cc",
  measurementId: "G-NN99VZ7JF5",
};

console.log(firebaseConfig);

firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
