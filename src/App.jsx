// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { About } from './pages/About';
import { Music } from './pages/Music';
import { Shows } from './pages/Shows';
import bwPianoPhoto from './images/bw-piano-img.png';
import pianoPhoto from './images/piano-img.png';
import bwBabyPhoto from './images/bw-baby-img.png';
import babyPhoto from './images/baby-img.png';
import bwHutPerformancePhoto from './images/bw-performing-hut.png';
import hutPerformancePhoto from './images/performing-hut.png';
import graduationPhoto from './images/graduation-photo.png';
import bwCarContactPhoto from './images/bw-contact-img.png';
import CarContactPhoto from './images/contact-img.png';

function App() {
  const [activePage, setActivePage] = useState(null);
  const [isPianoHovered, setIsPianoHovered] = useState(false);
  const [isBabyHovered, setIsBabyHovered] = useState(false);
  const [isHutHovered, setIsHutHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  const handlePianoClick = () => {
    setActivePage('music');
  };

  const handleBabyClick = () => {
    setActivePage('about');
  };

  const handleShowsClick = () => {
    setActivePage('shows');
  };
  
  const handleContactClick = () => {
    setActivePage('contact');
  };

  return (
    <div className="polaroid-container">
       {/* <div className="intro-text">
      <p>Hello! I’m Alyssa — developer, designer, musician, and artist. Welcome to my site!</p>
    </div> */}
          {!activePage && (
        <>
           <img
            src={isPianoHovered ? pianoPhoto : bwPianoPhoto}
            alt="Polaroid of piano"
            // className="polaroid-image piano"
            className={`polaroid-image piano ${
              activePage === 'music' ? 'focused' : activePage ? 'exiting' : ''
            }`}
            onClick={handlePianoClick}
            onMouseEnter={() => setIsPianoHovered(true)}
            onMouseLeave={() => setIsPianoHovered(false)}
          />
          <img
            src={isBabyHovered ? babyPhoto : bwBabyPhoto}
            alt="Polaroid of baby"
            className="polaroid-image baby"
            onClick={handleBabyClick}
            onMouseEnter={() => setIsBabyHovered(true)}
            onMouseLeave={() => setIsBabyHovered(false)}
          />
          <img
            src={isHutHovered ? hutPerformancePhoto : bwHutPerformancePhoto}
            alt="Performing at the Hut"
            className="polaroid-image hut"
            onClick={handleShowsClick}
            onMouseEnter={() => setIsHutHovered(true)}
            onMouseLeave={() => setIsHutHovered(false)}
          />

          <img
            src={graduationPhoto}
            alt="Highschool graduation photo"
            className="polaroid-image graduation"
            // onClick={handleShowsClick}
            // onMouseEnter={() => setIsHutHovered(true)}
            // onMouseLeave={() => setIsHutHovered(false)}
          />

          <img
            src={isHutHovered ? hutPerformancePhoto : bwHutPerformancePhoto}
            alt="Performing at the Hut"
            className="polaroid-image hut"
            onClick={handleShowsClick}
            onMouseEnter={() => setIsHutHovered(true)}
            onMouseLeave={() => setIsHutHovered(false)}
          />


          <img
            src={isContactHovered ? CarContactPhoto : bwCarContactPhoto}
            alt="young alyssa photo near car contact image"
            className="polaroid-image contact"
            onClick={handleContactClick}
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
          />
        </>
          )}

          {activePage === 'music' && <Music />}
          {activePage === 'about' && <About />}
          {activePage === 'shows' && <Shows />}
          {activePage === 'contact' && <Contact />}
    </div>
  );
}

export default App;
