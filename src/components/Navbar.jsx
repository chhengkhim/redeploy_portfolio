// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import FlashIcon from '../assets/flash.svg'; // Update path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full h-16 bg-cyan-200 shadow-lg border-b-5 border-gray-200 px-5 rounded-full">
      {/* Logo */}
      <Link to="home" smooth={true} duration={500} className="flex items-center font-extrabold text-black cursor-pointer">
        <img src={FlashIcon} alt="Flash Icon" className="mr-2 h-6 w-6" /> {/* SVG icon */}
        <span className="text-xl">Atomic</span>
      </Link>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          className="text-2xl p-2 bg-gray-100 rounded-md focus:outline-none hover:bg-gray-200"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Links */}
      <div className={`hidden md:flex flex-grow justify-center space-x-6`}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70} // Adjust the scroll offset to ensure the section aligns correctly
          className={`px-4 py-2 text-black transition-colors duration-300 cursor-pointer ${
            activeSection === 'home' ? 'border-b-2 border-black' : ''
          }`}
          onClick={() => setActiveSection('home')}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className={`px-4 py-2 text-black transition-colors duration-300 cursor-pointer ${
            activeSection === 'about' ? 'border-b-2 border-black' : ''
          }`}
          onClick={() => setActiveSection('about')}
        >
          About
        </Link>
        <Link
          to="work"
          smooth={true}
          duration={500}
          offset={-70}
          className={`px-4 py-2 text-black transition-colors duration-300 cursor-pointer ${
            activeSection === 'work' ? 'border-b-2 border-black' : ''
          }`}
          onClick={() => setActiveSection('work')}
        >
          Work
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          className={`px-4 py-2 text-black transition-colors duration-300 cursor-pointer ${
            activeSection === 'skills' ? 'border-b-2 border-black' : ''
          }`}
          onClick={() => setActiveSection('skills')}
        >
          Skills
        </Link>
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex items-center space-x-4 ml-auto">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300">
          <FaFacebook size={24} />
        </a>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center space-y-4">
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <FaTimes size={24} />
          </button>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className={`text-2xl hover:text-cyan-400 transition-colors duration-300 cursor-pointer ${
              activeSection === 'home' ? 'border-b-2 border-cyan-400' : ''
            }`}
            onClick={() => {
              setActiveSection('home');
              toggleMenu();
            }}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className={`text-2xl hover:text-cyan-400 transition-colors duration-300 cursor-pointer ${
              activeSection === 'about' ? 'border-b-2 border-cyan-400' : ''
            }`}
            onClick={() => {
              setActiveSection('about');
              toggleMenu();
            }}
          >
            About
          </Link>
          <Link
            to="work"
            smooth={true}
            duration={500}
            offset={-70}
            className={`text-2xl hover:text-cyan-400 transition-colors duration-300 cursor-pointer ${
              activeSection === 'work' ? 'border-b-2 border-cyan-400' : ''
            }`}
            onClick={() => {
              setActiveSection('work');
              toggleMenu();
            }}
          >
            Work
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            className={`text-2xl hover:text-cyan-400 transition-colors duration-300 cursor-pointer ${
              activeSection === 'skills' ? 'border-b-2 border-cyan-400' : ''
            }`}
            onClick={() => {
              setActiveSection('skills');
              toggleMenu();
            }}
          >
            Skills
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;