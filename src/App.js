// src/App.js
import './styles.css';

import React from "react";
import EventsList from './EventsList';  // path depends on where you saved it

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coming-soon" element={<ComingSoon />} />  {/* <-- Here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

