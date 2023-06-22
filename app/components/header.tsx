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
        {
           menu ? <Nav /> : 
          <div className="bg-black flex items-center mx-auto px-6 h-20 flex-row sm:hidden justify-between">
          <Link href={'/'} className='hover:text-blue-600'>THE STUNNING IDEAS</Link>
          <IoMenu className='text-xl hover:opacity-60 hover:text-blue-600' onClick={() => setMenu(true) } />
          </div>
        }
      </div>
    );
  };

  const Nav = () => {
    return (
      <div className='w-screen bg-black text-white sticky h-2/3 flex flex-col justify-center items-center'>
      <div className="flex flex-col justify-center items-center text-2xl mb-2 mt-2">
        <p>Menu</p>
      </div>
      <hr className='w-11/12 bg-white' />
      <nav className="flex flex-col items-center text-xl justify-center mt-2"      >
        <Link href="/"  className=" font-medium hover:underline">
          Home
        </Link>
        <Link href="/about"  className="font-medium hover:underline">
            About
        </Link>
        <Link href="/contact"  className="font-medium hover:underline">
          Contact
        </Link>
      </nav>
      <AiOutlineClose className='text-white hover:text-blue-600 mb-2 mt-2 text-3xl'   onClick={() => setMenu(false)} />
    </div>
    )
  }

  return (
    <header className="bg-black text-white">
      <div className=" mx-auto py-4 px-6 sm:flex hidden justify-between items-center h-20">
        <div className="flex items-center">
          <Link href="/" className='text-md font-medium'>
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



