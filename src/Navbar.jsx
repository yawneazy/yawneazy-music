import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';
import { FaApple, FaInstagram, FaSpotify, FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="header">

<div className="top-bar">
        <div className="social-icons">
        <a href="https://music.apple.com/us/artist/yawneazy/1335067186"><FaApple /></a>
        <a href="https://www.instagram.com/yawneazy"><FaInstagram /></a>
        <a href="https://open.spotify.com/artist/30z0RH6IuunZkBPKTrRBuO?si=OvNre1EFR6GjP4GFkVamKg"><FaSpotify /></a>
        <a href="https://youtube.com/@yawneazy?si=EViRk8HwUm4HfsFA"><FaYoutube /></a>
        <a href="https://www.facebook.com/yawneazy/"><FaFacebook/></a>
        <a href="https://www.tiktok.com/@yawneazy?is_from_webapp=1&sender_device=pc"><FaTiktok /></a>
        </div>
      </div>

      <div className="nav-container">

        {/* Artist Name */}
        <div className="artist-name">
          <h2>Aly Olson</h2>
        </div>

        <nav>
          <ul className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/music">Music</NavLink></li>
            <li><NavLink to="/shows">Shows</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}