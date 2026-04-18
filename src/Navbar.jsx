import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';
import { FaApple, FaInstagram, FaSpotify, FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";
import { SiVenmo } from "react-icons/si";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    // <header className="header">
    <header className={`header ${isHome ? "home" : "not-home"}`}>

      <div className="top-bar">
        <div className="social-icons">
          <a href="https://music.apple.com/us/artist/yawneazy/1335067186"><FaApple /></a>
          <a href="https://www.instagram.com/yawneazy"><FaInstagram /></a>
          <a href="https://open.spotify.com/artist/30z0RH6IuunZkBPKTrRBuO"><FaSpotify /></a>
          <a href="https://youtube.com/@yawneazy"><FaYoutube /></a>
          <a href="https://venmo.com/u/yawneazy"><SiVenmo /></a>
          <a href="https://www.facebook.com/yawneazy/"><FaFacebook /></a>
          <a href="https://www.tiktok.com/@yawneazy"><FaTiktok /></a>
        </div>
      </div>

      <div className="nav-container">

        <div className="artist-name">
          <h2>Aly Olson</h2>
        </div>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/music">Music</NavLink>
          <NavLink to="/shows">Shows</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {/* always rendered, animated via class */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <div className="mobile-social-icons">
        <a href="https://music.apple.com/us/artist/yawneazy/1335067186"><FaApple /></a>
          <a href="https://www.instagram.com/yawneazy"><FaInstagram /></a>
          <a href="https://open.spotify.com/artist/30z0RH6IuunZkBPKTrRBuO"><FaSpotify /></a>
          <a href="https://youtube.com/@yawneazy"><FaYoutube /></a>
          <a href="https://venmo.com/u/yawneazy"><SiVenmo /></a>
          <a href="https://www.facebook.com/yawneazy/"><FaFacebook /></a>
          <a href="https://www.tiktok.com/@yawneazy"><FaTiktok /></a>
        </div>

        <div className="nav-group">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/music" onClick={() => setMenuOpen(false)}>Music</NavLink>
          <NavLink to="/shows" onClick={() => setMenuOpen(false)}>Shows</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        </div>

      </div>
    </header>
  );
}