import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaUpload } from 'react-icons/fa';
import cv from '../../public/assets/CV.pdf';
import { useInView } from 'react-intersection-observer';

const Tableau = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.8 } }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div className="bg-white shadow-md rounded-lg p-6 w-80 mx-auto"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      <motion.h2 className="text-2xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
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
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <FaGithub className="inline-block" size={24} />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/er-ragragui-hatim" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <FaLinkedinIn className="inline-block" size={24} />
        </motion.a>
        <motion.a href={cv} download className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Télécharger mon CV
          <FaUpload className="inline-block ml-2" size={18} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Tableau;
