import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import homeImg from './images/aly_olson_home.jpeg';

function App() {
  return (
    <>
      <Navbar />

      <div className="home-hero">
        <Routes>
          <Route path="/" element={
            <img src={homeImg} alt="Home" className="home-image" />
          } />
          <Route path="/shows" element={<h1>Shows</h1>} />
          <Route path="/music" element={<h1>Music</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;

// import { useState } from 'react';
// import './App.css';
// import { About } from './pages/About';
// import { Music } from './pages/Music';
// import { Shows } from './pages/Shows';
// import bwPianoPhoto from './images/bw-piano-img.png';
// import pianoPhoto from './images/piano-img.png';
// import bwBabyPhoto from './images/bw-baby-img.png';
// import babyPhoto from './images/baby-img.png';
// import bwHutPerformancePhoto from './images/bw-performing-hut.png';
// import hutPerformancePhoto from './images/performing-hut.png';
// import graduationPhoto from './images/graduation-photo.png';
// import bwCarContactPhoto from './images/bw-contact-img.png';
// import CarContactPhoto from './images/contact-img.png';

// function App() {
//   // const [activePage, setActivePage] = useState(null);
//   // const [isPianoHovered, setIsPianoHovered] = useState(false);
//   // const [isBabyHovered, setIsBabyHovered] = useState(false);
//   // const [isHutHovered, setIsHutHovered] = useState(false);
//   // const [isContactHovered, setIsContactHovered] = useState(false);

//   // const handlePianoClick = () => {
//   //   setActivePage('music');
//   // };

//   // const handleBabyClick = () => {
//   //   setActivePage('about');
//   // };

//   // const handleShowsClick = () => {
//   //   setActivePage('shows');
//   // };
  
//   // const handleContactClick = () => {
//   //   setActivePage('contact');
//   // };

//   return (
//     <div className="polaroid-container">
//        <div className="intro-text">
//       <h1>Hi! I’m Alyssa</h1>
//       <h3>Singer, songwriter and musician</h3>
//       <br></br>
//       <p>yawneazy@gmail.com</p>
//       <br></br>
//       <p>Instagram: @yawneazy</p>
//       <p>Facebook: @yawneazy</p>
//       <></>
//     </div>
//           {!activePage && (
//         <>
//            <img
//            src={pianoPhoto}
//             // src={isPianoHovered ? pianoPhoto : bwPianoPhoto}
//             alt="Polaroid of piano"
//             // className="polaroid-image piano"
//             className={`polaroid-image piano ${
//               activePage === 'music' ? 'focused' : activePage ? 'exiting' : ''
//             }`}
//             // onClick={handlePianoClick}
//             // onMouseEnter={() => setIsPianoHovered(true)}
//             // onMouseLeave={() => setIsPianoHovered(false)}
//           />
//           <img
//             // src={isBabyHovered ? babyPhoto : bwBabyPhoto}
//             src={babyPhoto}
//             alt="Polaroid of baby"
//             className="polaroid-image baby"
//             // onClick={handleBabyClick}
//             // onMouseEnter={() => setIsBabyHovered(true)}
//             // onMouseLeave={() => setIsBabyHovered(false)}
//           />
//           <img
//             src={hutPerformancePhoto}
//             // src={isHutHovered ? hutPerformancePhoto : bwHutPerformancePhoto}
//             alt="Performing at the Hut"
//             className="polaroid-image hut"
//             // onClick={handleShowsClick}
//             // onMouseEnter={() => setIsHutHovered(true)}
//             // onMouseLeave={() => setIsHutHovered(false)}
//           />

//           <img
//             src={graduationPhoto}
//             alt="Highschool graduation photo"
//             className="polaroid-image graduation"
//             // onClick={handleShowsClick}
//             // onMouseEnter={() => setIsHutHovered(true)}
//             // onMouseLeave={() => setIsHutHovered(false)}
//           />

//           <img
//             src={hutPerformancePhoto}
//             // src={isHutHovered ? hutPerformancePhoto : bwHutPerformancePhoto}
//             alt="Performing at the Hut"
//             className="polaroid-image hut"
//             onClick={handleShowsClick}
//             onMouseEnter={() => setIsHutHovered(true)}
//             onMouseLeave={() => setIsHutHovered(false)}
//           />


//           <img
//             src={CarContactPhoto}
//             // src={isContactHovered ? CarContactPhoto : bwCarContactPhoto}
//             alt="young alyssa photo near car contact image"
//             className="polaroid-image contact"
//             onClick={handleContactClick}
//             onMouseEnter={() => setIsContactHovered(true)}
//             onMouseLeave={() => setIsContactHovered(false)}
//           />
//         </>
//           )}

//           {/* {activePage === 'music' && <Music />}
//           {activePage === 'about' && <About />}
//           {activePage === 'shows' && <Shows />}
//           {activePage === 'contact' && <Contact />} */}
//     </div>
//   );
// }

// export default App;
