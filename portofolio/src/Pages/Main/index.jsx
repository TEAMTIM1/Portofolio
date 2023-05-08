// Animation and icons import
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// local import
import image from '/assets/bg.png';
import picture from '/assets/profilpicture.png'
import cv from '../../../public/assets/ERRAGRAGUI HATIM.pdf'

// code de la main page
const Main = () => {
  return (
    <div id='home'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={image} alt="/" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/30'>
        
          <div className='max-w-[700px] flex flex-col m-auto h-full justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'> Hello World !</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800' >Je suis
              <TypeAnimation
                  sequence={[
                    'Hatim',
                    2000,
                    'Developpeur',
                    1000,
                    'Codeur', 
                    2000, 
                    'Codeur et Tech Lover !',
                    2000,
                  ]} 
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '1em', paddingLeft:'5px', color: "orangered" }}
                  />
            </h2>
            <div className='flex flex-row pt-6 gap-8 items-center'>
              <a href="https://github.com/TEAMTIM1" target="_blank">
              <FaGithub className="cursor-pointer" size={20} /></a>
              <a href="https://www.linkedin.com/in/er-ragragui-hatim" target="_blank">
              <FaLinkedinIn className="cursor-pointer" size={20} /></a>
              <a className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' href={cv} download>Télécharger mon CV</a>

            </div>

          </div>
          
        </div>
    
    </div>
  )
}

export default Main