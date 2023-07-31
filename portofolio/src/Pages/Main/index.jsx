import React, { useState, useRef } from 'react';
import ReactGA from 'react-ga';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Video from '/assets/video.mp4';

const Main = ({ onVideoLoad }) => {
  const [autoplay, setAutoplay] = useState(true);
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    
    setTimeout(() => {
      setAutoplay(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }, 5000);
    onVideoLoad();
  };
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div id='home' className=' w-full '>
      <video
        ref={videoRef}
        className='w-full'
        src={Video}
        autoPlay={autoplay}
        loop
        muted
        onLoadedData={handleVideoLoad}
      />
    </div>
  );
};

export default Main;
