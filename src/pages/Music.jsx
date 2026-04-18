import React from 'react';
import '../styles/Music.css';

export default function Music() {
  return (
    <div className="music-page">
            {/* <h1>Music</h1> */}
            

      <iframe
        src="https://open.spotify.com/embed/artist/30z0RH6IuunZkBPKTrRBuO?utm_source=generator"
        width="100%"
        height="500"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}