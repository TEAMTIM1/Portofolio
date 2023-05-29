// Animation and icons import
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// local import
import image from '/assets/video.mp4';
import picture from '/assets/profilpicture.png'
import cv from '../../../public/assets/ERRAGRAGUI HATIM.pdf'

// code de la main page
const Main = () => {
  return (
    <div id='home' className=' h-full w-full relative'>
      <video className=' w-full'
        src={image}
        autoPlay
        loop
        muted
      />
    </div>


  )
}

export default Main