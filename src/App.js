import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio.js";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about-me" exact element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
