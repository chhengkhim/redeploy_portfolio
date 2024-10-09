// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import FlashIcon from '../assets/flash.svg'; // Update path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section); // Set the active section
    setIsOpen(false); // Close the menu after selecting a section
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full h-16 bg-cyan-200 shadow-lg border-b-5 border-gray-200 px-5 rounded-full">      
    {/* Logo */}
    <a href="#home" className="flex items-center font-extrabold text-black">
      <img src={FlashIcon} alt="Flash Icon" className="mr-2 h-6 w-6" /> {/* SVG icon */}
      <span className="text-xl">Atomic</span>
    </a>

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
        <a
          href="#home"
          onClick={() => scrollToSection('home')}
          className={`px-4 py-2 text-black transition-colors duration-300 ${
            activeSection === 'home' ? 'border-b-2 border-black' : ''
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => scrollToSection('about')}
          className={`px-4 py-2 text-black transition-colors duration-300 ${
            activeSection === 'about' ? 'border-b-2 border-black' : ''
          }`}
        >
          About
        </a>
        <a
          href="#work"
          onClick={() => scrollToSection('work')}
          className={`px-4 py-2 text-black transition-colors duration-300 ${
            activeSection === 'work' ? 'border-b-2 border-black' : ''
          }`}
        >
          Work
        </a>
        <a
          href="#skills"
          onClick={() => scrollToSection('skills')}
          className={`px-4 py-2 text-black transition-colors duration-300 ${
            activeSection === 'skills' ? 'border-b-2 border-black' : ''
          }`}
        >
          Skills
        </a>
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
          <a
            href="#home"
            onClick={() => {
              scrollToSection('home');
              toggleMenu();
            }}
            className={`text-2xl hover:text-cyan-400 transition-colors duration-300 ${
              activeSection === 'home' ? 'border-b-2 border-cyan-400' : ''
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => {
              scrollToSection('about');
              toggleMenu();
            }}
            className={`text-2xl hover:text-cyan-400 transition-colors duration-300 ${
              activeSection === 'about' ? 'border-b-2 border-cyan-400' : ''
            }`}
          >
            About
          </a>
          <a
            href="#work"
            onClick={() => {
              scrollToSection('work');
              toggleMenu();
            }}
            className={`text-2xl hover:text-cyan-400 transition-colors duration-300 ${
              activeSection === 'work' ? 'border-b-2 border-cyan-400' : ''
            }`}
          >
            Work
          </a>
          <a
            href="#skills"
            onClick={() => {
              scrollToSection('skills');
              toggleMenu();
            }}
            className={`text-2xl hover:text-cyan-400 transition-colors duration-300 ${
              activeSection === 'skills' ? 'border-b-2 border-cyan-400' : ''
            }`}
          >
            Skills
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;