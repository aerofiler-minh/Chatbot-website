import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
