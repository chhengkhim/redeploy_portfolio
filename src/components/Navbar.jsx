import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Import Link and scroller from react-scroll
import FlashIcon from '../assets/flash.svg'; // Update path as necessary
import { ModeToggle } from './mode-toggle'; // Assuming this controls dark mode

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // This function handles scrolling and updating the active section
  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="max-w-6xl mx-auto p-8 text-center sticky top-0 z-50 flex items-center gap-3 justify-between w-full h-16 bg-cyan-200 dark:bg-slate-500 shadow-none border-none rounded-full">
      {/* Logo and Dark Mode Toggle for Desktop */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="flex items-center font-extrabold text-black dark:text-white cursor-pointer">
          <img src={FlashIcon} alt="Flash Icon" className="mr-2 h-6 w-6" /> {/* SVG icon */}
          <span className="text-xl">Atomic</span>
        </Link>

        {/* Dark Mode Toggle for Desktop (Visible on Desktop) */}
        <div className="hidden md:block">
          <ModeToggle className="p-2 rounded-full bg-gray-100 dark:bg-black focus:outline-none hover:bg-gray-200 dark:hover:bg-black" />
        </div>
      </div>

      {/* Hamburger Menu and Dark Mode Toggle for Mobile */}
      <div className="flex items-center space-x-3 md:hidden">
        {/* Dark Mode Toggle (Visible on Mobile) */}
        <ModeToggle className="p-2 rounded-full bg-gray-100 dark:bg-black focus:outline-none hover:bg-gray-200 dark:hover:bg-black" />

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-2xl p-2 bg-gray-100 dark:bg-black text-black dark:text-white rounded-full focus:outline-none hover:bg-gray-200 dark:hover:bg-black"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Links for Desktop */}
      <div className={`hidden md:flex flex-grow justify-center space-x-6`}>
        {['home', 'about', 'work', 'skills'].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            offset={-70}
            spy={true} // Track the scroll position
            activeClass="active" // Class when active
            onSetActive={handleSetActive} // Updates activeSection when scrolled
            className={`px-4 py-2 text-black dark:text-white transition-colors duration-300 cursor-pointer ${
              activeSection === section ? 'border-b-2 border-black dark:border-cyan-400' : ''
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex items-center space-x-4 ml-auto">
        {[{ link: 'https://github.com', icon: FaGithub }, { link: 'https://linkedin.com', icon: FaLinkedin }, { link: 'https://facebook.com', icon: FaFacebook }].map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-cyan-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors duration-300"
          >
            {React.createElement(social.icon, { size: 24 })}
          </a>
        ))}
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center space-y-4">
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <FaTimes size={24} className="text-black dark:text-white" />
          </button>
          {['home', 'about', 'work', 'skills'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
              onSetActive={handleSetActive}
              className={`text-2xl text-black dark:text-gray-200 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors duration-300 cursor-pointer ${
                activeSection === section ? 'border-b-2 border-cyan-400' : ''
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;