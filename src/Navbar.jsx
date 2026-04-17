import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

export default function Navbar() {
  return (
    <header className="header">
      <div className="nav-container">

        {/* Artist Name */}
        <div className="artist-name">
          <h2>Aly Olson</h2>
        </div>
        
        <nav>
          <ul className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/shows">Shows</NavLink></li>
            <li><NavLink to="/music">Music</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>

        {/* RIGHT: Button */}
        {/* <div className="nav-button">
          <button>Request a Consultation</button>
        </div> */}

      </div>
    </header>
  );
}