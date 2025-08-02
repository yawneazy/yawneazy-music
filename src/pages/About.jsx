import React from 'react';
import { useNavigate } from 'react-router-dom';
export function About() {
  // const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem', color: 'white', maxWidth: '600px', margin: '0 auto'}}>
       {/* <button className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button> */}
      <h1>About Yawneazy</h1>
      <p>
        Hi, I'm Alyssa, a musician based in Tucson, AZ.
      </p>
      <p>
        Music has always been my passion. I grew up playing multiple instruments, and even got a music degree. 
        Life took me on some detours, but I've finally started making music and performing again. 
      </p>
      <p>
       So, welcome — let's connect (:
      </p>
    </div>
  );
}