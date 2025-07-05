import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import homeImage from './images/home-image.jpg';
import './App.css';
import { About } from './pages/About';
import { Music } from './pages/Music';

function App() {
  return (
    <Router>
      <div className="hero-container">
        <img src={homeImage} alt="Home" className="full-screen-image" />

        {/* Overlaid content */}
        <div className="overlay-content">
          <div className="yawneazy-text">YAWNEAZY</div>
          <div className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/music">MUSIC</Link>
          </div>
        </div>
      </div>

      <Routes>
        {/* <Route path="/" element={<div>Home</div>} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Router>
  );
}

export default App;
