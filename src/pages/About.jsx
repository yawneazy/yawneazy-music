import React from 'react';
import '../styles/About.css';
import aboutImg from '../images/about_page_img.jpg';

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <p className="tagline">Singer • Songwriter • Performer</p>
      </section>

      {/* DESKTOP LAYOUT WRAPPER */}
      <div className="about-content">

        {/* LEFT SIDE */}
        <section className="about-bio">
          <p>
            Alyssa K is a Tucson-based musician blending indie, pop, and acoustic influences.
            With a background in multiple instruments and formal music training, her sound is
            both polished and deeply personal.
          </p>

          <p>
            After taking time away from performing, Aly has returned to the stage with a renewed
            passion — writing, recording, and connecting with audiences through honest storytelling
            and live performance.
          </p>
        </section>

        {/* RIGHT SIDE */}
        <div className="about-side">

          <section className="about-image">
            <img src={aboutImg} alt="Artist about image" />
          </section>

        </div>
      </div>

      <section className="about-contact">
        <h2>Contact</h2>

        <p>For bookings, collaborations, or inquiries:</p>

        <a href="mailto:yawneazy@gmail.com" className="contact-email">
          yawneazy@gmail.com
        </a>

        <div className="contact-links">
          <a href="https://www.instagram.com/yawneazy" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://open.spotify.com/artist/30z0RH6IuunZkBPKTrRBuO" target="_blank" rel="noreferrer">
            Spotify
          </a>
          <a href="https://youtube.com/@yawneazy" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
      </section>

    </div>
  );
}