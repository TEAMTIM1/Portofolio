import React from 'react';
import Tableau from '../../utils/presentation';

const About = () => {

  return (
    <section id='about' className={` bg-[#b8ecd2] w-full min-h-screen md:pl-20 p-4 py-16`} >
      <div className='container'>
        <h1 className='text-4xl font-bold text-center text-[#fe4d03] pb-6'>A Propos</h1>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6'>
          <div>
            <img src='/assets/pic.jpg' className='rounded-lg w-full h-full object-contain' alt="my profile pic" />
          </div>
          <div>
            <Tableau />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
