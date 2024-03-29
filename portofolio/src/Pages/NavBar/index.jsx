import { React, useState, useEffect } from 'react';
import {
  AiOutlineMenu,
  AiOutlineHome,

  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';

import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { Link } from 'react-scroll';


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [hidden, sethidden] = useState(true);

  const handelNav = () => {
    setNav(!nav)
    sethidden(!hidden)
  }

  const handelClick = () => {
    sethidden(true)
    setNav(false)
  };


  const elementClassName = hidden ? "hidden" : "";
  const classNameButton = 'hover:bg-gradient-to-r from-slate-50 to-gray-400 rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer duration-300'
  return (

    <div >
      <AiOutlineMenu
        onClick={handelNav}
        size={20}
        className='absolute top-4 right-4  z-[99] md:hidden' />
      {
        nav ? (
          <div className={`fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 ${elementClassName}`}>

            <Link
              onClick={handelClick}
              to='home'
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </Link>

            <Link
              onClick={handelClick}
              to='experience'
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <GrProjects size={20} />
              <span className="pl-4">Work</span>
            </Link>

            <Link
              onClick={handelClick}
              to='project'
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <AiOutlineProject size={20} />
              <span className="pl-4">Projects</span>
            </Link>

            <Link
              onClick={handelClick}
              to='about'
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <BsPerson size={20} />
              <span className="pl-4">Resume</span>
            </Link>

            <Link
              onClick={handelClick}
              to='contact'
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <AiOutlineMail size={20} />
              <span className="pl-4">Contact</span>
            </Link>
          </div>
        ) : (
          ''
        )}
      <div className='md:block hidden fixed top-[5%] lg:top-[25%] z-10'>
        <div className='flex flex-col'>

          <Link
            to='home'
            className={`${classNameButton}`}
          >
            <AiOutlineHome size={20} />
          </Link>

          <Link
            to='experience'
            className={`${classNameButton}`}
          >
            <GrProjects size={20} />
          </Link>

          <Link
            to='project'
            className={`${classNameButton}`}
          >
            <AiOutlineProject size={20} />
          </Link>

          <Link
            to='about'
            className={`${classNameButton}`}
          >
            <BsPerson size={20} />
          </Link>

          <Link
            to='contact'
            className={`${classNameButton}`}
          >
            <AiOutlineMail size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;