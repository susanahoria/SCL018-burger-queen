import React from "react";
import ReactDOM from "react-dom";
import "nes.css/css/nes.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Kitchen from "./pages/kitchen/Kitchen";
import Order from "./pages/order/Order";
import Admin from "./pages/admin/Admin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "./firebase";

const auth = getAuth(firebase);
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("logueado");
  } else {
    console.log("no logueado xd");
  }
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/chef" element={<Kitchen />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
