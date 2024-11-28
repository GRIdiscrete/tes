// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from './Logo';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <nav
      className="bg-opacity-20 h-14 w-[100vw] bg-white font-extrabold pt-4 pb-2 text-black fixed z-10"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-12">
          {/* Logo on the Left */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Links Section */}
          <div
            className={`${
              menuOpen ? 'block' : 'hidden'
            } md:flex md:space-x-8 absolute md:relative top-14 left-0 md:top-0 w-full md:w-auto bg-white md:bg-transparent z-50`}
          >
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-60}
              className="block md:inline-block px-4 py-2 hover:text-purple-700 cursor-pointer"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="block md:inline-block px-4 py-2 hover:text-purple-700 cursor-pointer"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              About Us
            </Link>
            <Link
              to="customization"
              smooth={true}
              duration={500}
              offset={-80}
              className="block md:inline-block px-4 py-2 hover:text-purple-700 cursor-pointer"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              Customize
            </Link>
            <Link
              to="pricing"
              smooth={true}
              duration={500}
              offset={-80}
              className="block md:inline-block px-4 py-2 hover:text-purple-700 cursor-pointer"
              onClick={() => setMenuOpen(false)} // Close menu on link click
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
