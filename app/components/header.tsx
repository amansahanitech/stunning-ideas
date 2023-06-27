'use client'
import Link from 'next/link';
import {IoMenu} from 'react-icons/io5';
import {AiOutlineClose} from 'react-icons/ai';
import React, {useState} from 'react';
const Header = () => {

  const [menu, setMenu] = useState(false);

  const Menu = () => {
    return (
      <div>
          <div className="bg-black flex items-center mx-auto px-6 h-20 flex-row sm:hidden justify-between">
          <Link href={'/'} className='hover:text-blue-600 text-base'>THE STUNNING IDEAS</Link>
          {
              !menu ? <IoMenu className='text-xl hover:opacity-60 hover:text-blue-600' onClick={() => setMenu(true) } /> :
              <AiOutlineClose className='text-xl hover:opacity-60 hover:text-blue-600' onClick={() => setMenu(false) } />
          }
          </div>
          {
            !menu ? null : <Nav/>
          }
      </div>
    );
  };

  const Nav = () => {
    return (
      <div className='w-screen bg-black text-white flex flex-col justify-center items-center absolute z-50 sm:hidden'>
      <nav className="flex flex-col items-center text-sm justify-center">
        <Link 
        href="/" 
        onClick={() => setMenu(false)} 
        className=" hover:opacity-70 border-t border-t-white w-screen border-spacing-1 border-opacity-50">
          <p className='ml-6 my-2'>Home</p>
        </Link>
        <Link 
        href="/about"
        onClick={() => setMenu(false)}   
        className=" hover:opacity-70 border-t border-t-white w-screen border-spacing-1 border-opacity-50">
            <p className='ml-6 my-2'>About</p>
        </Link>
        <Link 
        href="/contact"
        onClick={() => setMenu(false)}   
        className=" hover:opacity-70 border-y border-y-white w-screen mb-0.5 border-opacity-50">
          <p className='ml-6 my-2'>Contact</p>
        </Link>
      </nav>
    </div>
    )
  }

  return (
    <header className="bg-black text-white">
      <div className=" mx-auto py-4 px-6 sm:flex hidden justify-between items-center h-20">
        <div className="flex items-center">
          <Link href="/" className='font-medium'>
            THE STUNNING IDEAS
          </Link>
        </div>
        <nav className="space-x-4">
          <Link href="/"  className="text-sm font-medium">
            Home
          </Link>
          <Link href="/about"  className="text-sm font-medium">
            About
          </Link>
          <Link href="/contact"  className="text-sm font-medium">
            Contact
          </Link>
        </nav>
      </div>
      <Menu/>
    </header>
  );
};

export default Header;
