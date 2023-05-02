import React from 'react';
import ExperienceItem from './ExperienceItem';
import Skills from './Skills';
import data from '../../utils/data';

const Experience = () => {
  return (
    <div id='experience' className='grid grid-cols-1 md:grid-cols-2]'>
      <div className='h-auto max-w-full md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-6'>Experience</h1>
        {data.map((items, key) => (
          <ExperienceItem
            key={key}
            title={items.title}
            company={items.company}
            startYear={items.startYear}
            endYear={items.endYear}
          >
            <ul>
              {items.responsibilities.map((responsibility, key) => (
                <li key={key}>{responsibility}</li>
              ))}
            </ul>
          </ExperienceItem>
        ))}
      </div>
      <div className='h-auto max-w-full md:pl-20 p-4 py-16'>
        <Skills />
      </div>
    </div>
  );
};

export default Experience;
