import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import homeImage from './images/home-image.jpg';
import './App.css';
import { About } from './pages/About';
import { Music } from './pages/Music';

function App() {
  return (
    <Router>
      <img src={homeImage} alt="Home" className="full-screen-image" />
      {/* COMING SOON */}
      <Routes> 
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Router>
  );
}

export default App;
