// local import
import ExperienceItem from './ExperienceItem';
import Skills from './Skills';

// data import
import data from '../../utils/data';

const Experience = () => {
  return (
    <div id='experience' className=' grid grid-cols-1 md:grid-cols-2'>
      
      <div  className=' h-auto max-w-full md:pl-20 p-4 py-16 '>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-6'>Experience</h1>
      
      {data.map(( items, key) => (
        
        <ExperienceItem key={key} 
          title={items.title} 
          company={items.company}
          startYear={items.startYear}
          endYear={items.endYear}
          responsibilities={items.responsibilities}
          />
      ))}
    </div>
    <div className='h-auto max-w-full md:pl-20 p-4 py-16 '>
     
      <Skills />
      </div>
    </div>
    
  )
}

export default Experience