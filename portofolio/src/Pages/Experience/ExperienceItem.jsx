import image from '/assets/bg.png';

const ExperienceItem = ({ title, company, startYear, endYear, children }) => {
  return (
    <div className='mb-8 p-4 '>
    
      <h2 className='text-lg font-bold text-gray-800'>{title}</h2>
      <p className='text-md font-semibold text-[#fe4d03]'>{company}</p>
      <p className='text-sm text-gray-700'>{`${startYear} - ${endYear}`}</p>
      {children && (
        <div className='mt-2'>
          <h3 className='text-sm font-bold text-gray-900'>Responsibilité:</h3>
          {children}
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
