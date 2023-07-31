import React from 'react';
import { motion } from "framer-motion";
import ReactGA from 'react-ga';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedinIn, FaUpload } from 'react-icons/fa';


import picture from '/assets/pic.jpg'
import cv from '../../../public/assets/CV.pdf';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  ReactGA.pageview(window.location.pathname + window.location.search);

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id='about' className={`bg-[#b8ecd2] w-full min-h-screen md:pl-20 p-4 py-16`} >
      <div className='container'>
        <motion.h1 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay : 0.5}}
        className='text-4xl font-bold text-center text-[#fe4d03] pb-6'>A Propos</motion.h1>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Partie gauche avec l'image */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            whileHover={{ scale: 1.1, x:100, y: 20 }}
            transition={{ type: "spring" }}
          >
            <img src={picture} className='rounded-lg w-full h-full object-contain' alt="my profile pic" />
          </motion.div>

          {/* Partie droite avec les informations */}
          <motion.div className="bg-white shadow-md rounded-lg p-6 w-80 mx-auto"
           initial={{ opacity: 0 }}
            whileHover={{ scale: 1.2 }}
            whileInView={ {opacity : 1}}
            transition={ { delay : 0.4, duration: 0.6}}
          >
            <motion.h2 className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hey, c'est moi !
            </motion.h2>
            <motion.p className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Je suis Hatim, né en 1991. Je suis Conseiller commercial dans une concession automobile, mais récemment, j'ai découvert ma véritable passion pour le développement web !
            </motion.p>
            <motion.p className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Après une formation intensive de 6 mois à l'École O'Clock, je suis prêt à coder le futur. En dehors du travail, vous me trouverez soit en voyage, en train de tester de nouveaux plats, ou en train de dompter les vagues avec mon paddle ou surf !
            </motion.p>
            <motion.p className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              N'hésitez pas à télécharger mon CV pour en savoir plus sur moi ou à me suivre sur GitHub et LinkedIn.
            </motion.p>

            <div className="flex items-center space-x-4 mt-4 pt-4">
              <motion.a href="https://github.com/TEAMTIM1" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                whileHover={{ scale : 1.5, rotate: 15}}
              >
                <FaGithub className="inline-block" size={24} />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/er-ragragui-hatim" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.2, delay: 0.2 }}
                whileHover={{ scale: 1.5, rotate: 15}}
              >
                <FaLinkedinIn className="inline-block" size={24} />
              </motion.a>
              <motion.a href={cv} download className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded flex flex-col items-center "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                whileHover={{ scale : 1.5, x:50,}}
              >
                Télécharger mon CV
                <FaUpload className="inline-block ml-2" size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
