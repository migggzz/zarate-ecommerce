import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom';
import {router} from './router';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIS1_sSuVzASIWVlx3_OVBhUYVoCnDW4w",
  authDomain: "zarate-ecommerce-32f87.firebaseapp.com",
  projectId: "zarate-ecommerce-32f87",
  storageBucket: "zarate-ecommerce-32f87.appspot.com",
  messagingSenderId: "174464631634",
  appId: "1:174464631634:web:b112c7a5c21764cd23308b"
};

 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
