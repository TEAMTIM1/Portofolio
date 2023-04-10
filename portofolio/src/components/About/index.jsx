import React from 'react'
import logo from '../../../public/assets/img1.png'
const About = () => {
  return (
    <section id='about' className='h-auto max-w-full md:pl-20 p-4 py-16 bg-gradient-to-r from-slate-500 to-blue-950'>
      <div className=' container'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-6'>About Me
        </h1>
        <div>
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
          <img src={logo} className=' rounded-lg w-full h-full object-cover' alt="my pic profil" />
          <p className=' flex flex-col justify-center pl-6 leading-10'>
          Hi there, my name is [Your Name], and I was born in Casablanca in 1991. I studied in the field of automobiles and currently work as an automobile salesperson, but I've recently started a 6-month web development program at O'Clock. Outside of work, I enjoy exploring new places and trying new foods, especially Moroccan cuisine, and I'm an avid reader. I'm also passionate about giving back to my community through regular volunteering with local charities and non-profits. Above all, I strive to be a kind, compassionate, and curious person, and I believe in using every day as an opportunity to learn, grow, and make a positive impact on the world around us
          </p>
          </div>
        </div> 
      </div>
    </section>

  )
}

export default About;


{/* <div id='about' className='h-auto max-w-full md:pl-20 p-4 py-16'>
      <div className=' container relative'>
        <h1 className=''>About</h1>
      </div>
      <div className=' flex items-center'>
        <div className=' h-7 relative'>
          < img className='' src={logo} alt="" /></div>
        <div className='max-w-[1040px]'> 
          <p className=' text-center'>Hi there, my name is [Your Name], and I was born in Casablanca in 1991. I studied in the field of automobiles and currently work as an automobile salesperson, but I've recently started a 6-month web development program at O'Clock. Outside of work, I enjoy exploring new places and trying new foods, especially Moroccan cuisine, and I'm an avid reader. I'm also passionate about giving back to my community through regular volunteering with local charities and non-profits. Above all, I strive to be a kind, compassionate, and curious person, and I believe in using every day as an opportunity to learn, grow, and make a positive impact on the world around us.</p>
          </div>
       
      </div>
    </div> */}