import React from 'react';

export default function Music() {
  return (
    <div className="music-page">
    <div className="music-embed">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/artist/30z0RH6IuunZkBPKTrRBuO?utm_source=generator"
        width="90%"
        height="800"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  </div>
  );
}