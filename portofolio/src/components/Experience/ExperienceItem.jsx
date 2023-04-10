import { MdTrendingFlat } from 'react-icons/md'

const ExperienceItem = ({title, company, startYear, endYear, responsibilities}) => {
  
  return (

    

    <ol className='flex flex-col md:flex-row relative border-l border-stone-300 ' >

      <li className='mb-10 ml-4'>

        <div className='absolute w-2 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
          <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm '>
            <span className='text-lg font-semibold text-blue-800'>{title}</span>
            <span className='font-semibold text-blue-800'>at</span>
            <span className=' text-lg font-semibold text-blue-800'>{company}</span>
            <span className='my-1 text-sm font-normal leading-none text-stone-400 '>{startYear}</span>
            < MdTrendingFlat />
            <span className='my-1 text-sm font-normal leading-none text-stone-400'>{endYear}</span>
          </p>
          <p className='my-2 text-base font-normal'>{responsibilities}</p>
        
      </li>
    
    </ol>
  
  )
}

export default ExperienceItem;