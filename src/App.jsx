import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import homeImg from './images/aly_olson_home.jpeg';
import mobileHomeImg from './images/aly_olson_mobile_home.jpeg';
import Music from './pages/Music';
import Shows from './pages/Shows';
import About from './pages/About';
import Support from './pages/Support';

function App() {
  return (
    <>
      <Navbar />

      <div className="home-hero">
        <Routes>
          <Route
            path="/"
            element={
              <div className="home-wrapper">
                <img src={homeImg} alt="Home" className="home-image desktop" />
                <img src={mobileHomeImg} alt="Mobile Home" className="home-image mobile" />
              </div>
            }
          />
          <Route path="/shows" element={<Shows/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/support" element={<Support/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
