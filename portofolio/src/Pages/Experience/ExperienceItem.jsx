import React from 'react';

const ExperienceItem = ({ title, company, startYear, endYear, children }) => {
  return (
    <div className='mb-8 p-4 '>
      <h2 className='text-lg font-bold text-[#001b5e] '>{title}</h2>
      <p className='text-md font-semibold text-blue-700'>{company}</p>
      <p className='text-sm text-gray-700'>{`${startYear} - ${endYear}`}</p>
      {children && (
        <div className='mt-2'>
          <h3 className='text-sm font-bold text-[#001b5e]'>Responsibilité:</h3>
          {children}
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
