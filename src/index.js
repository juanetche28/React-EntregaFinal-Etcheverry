import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi6Xt4ZjVFWXMlUfh6Gdz__xFbKJHHRj4",
  authDomain: "aromas-en-el-alma.firebaseapp.com",
  projectId: "aromas-en-el-alma",
  storageBucket: "aromas-en-el-alma.appspot.com",
  messagingSenderId: "150625959265",
  appId: "1:150625959265:web:4557762304b2a608389920"
};

// Initialize Firebase
initializeApp(firebaseConfig);  // Se borro "CONST App"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

