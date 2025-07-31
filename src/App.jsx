import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { About } from './pages/About';
import { Music } from './pages/Music';
import bwPianoPhoto from './images/bw-piano-img.png';
import pianoPhoto from './images/piano-img.png';

function App() {
  const [showMusic, setShowMusic] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePolaroidClick = () => {
    setShowMusic(true);
  };
  
  return (
    <div className="hero-container">
      {!showMusic ? (
        <>
          <img
              src={isHovered ? pianoPhoto : bwPianoPhoto}
            alt="Polaroid of me"
            className="polaroid-image"
            onClick={handlePolaroidClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </>
      ) : (
        <Music />
      )}
    </div>
  );
}

export default App;
