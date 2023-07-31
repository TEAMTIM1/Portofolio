import React, { useState } from 'react';
import ReactGA from 'react-ga';
import NavBar from "./Pages/NavBar";
import Experience from "./Pages/Experience";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Main from "./Pages/Main";
import './index.css';

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  ReactGA.initialize('G-QKGXLHPFGK');
  
  return (
    <div className="App">
      <NavBar />

      <Main onVideoLoad={handleVideoLoad} />

      {/* Render the spinner while the video is loading */}
      {!isVideoLoaded && (
        <div className="spinner text-center text-3xl animate-bounce">
          Loading...
        </div>
      )}

      {/* Render the other components only if the video is loaded */}
      {isVideoLoaded && (
        <>
          <Experience />
          <Projects />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
