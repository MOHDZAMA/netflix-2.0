import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
        console.log("error");
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route element={<HomeScreen />} path="/" />
          <Route element={<LoginScreen />} path="/loginscreen" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
