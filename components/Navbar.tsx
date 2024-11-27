// Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import Logo from './Logo';

const Navbar = () => {
  return (
<nav className="bg-opacity-20 h-14 w-[100vw] bg-white font-bold pt-4 pb-2 text-gray-700 fixed  z-10" style={{ backdropFilter: 'blur(10px)' }}>

      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="flex justify-end h-12">
         
          <div className="hidden md:flex md:space-x-8 float-right">
          <Logo />
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-60}
              className="hover:text-purple-700 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-purple-700 cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="customization"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-purple-700 cursor-pointer"
            >
              Customize
            </Link>
            <Link
              to="pricing"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-purple-700 cursor-pointer"
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;