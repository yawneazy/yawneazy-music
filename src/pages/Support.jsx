import React from 'react';
import '../styles/Support.css';
import { FaHeart } from "react-icons/fa6";

function Support() {
    return (
        <section className="support-page">
        <div className="support-card">
          <h1>Support My Work</h1>
          <p>
            If you enjoyed the music, you can support me below! It means a lot and helps me keep creating. <FaHeart />
          </p>
      
      <div className="button-group">
          <a
            href="https://account.venmo.com/u/yawneazy"
            target="_blank"
            rel="noreferrer"
            className="venmo-button"
          >
            Tip on Venmo
          </a>
      
          <a href="/" className="secondary-link">
            Visit my website
          </a>
          </div>
        </div>
      </section>
      );
} 

export default Support;