// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cafe from '../assets/projects/cafe.jpg';   // Import your actual images
import Railway from '../assets/projects/railway.jpg';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import FlashIcon from '../assets/flash.svg'; // Update path as necessary

const Work = () => {
  const projects = [
    {
      title: "Cafe Shop",
      description: "Welcome to our cafe shop.",
      image: Cafe,  // Use the imported image variable here
      link: "#cafe-shop", // Adjust this to link to actual section IDs
    },
    {
      title: "Railway Project",
      description: "Welcome to our Railway website.",
      image: Railway,  // Use the imported image variable here
      link: "#railway-project", // Adjust this to link to actual section IDs
    },
    {
      title: "Another Cafe Shop",
      description: "Welcome to our second cafe shop.",
      image: Cafe,  // Use the imported image variable here
      link: "#another-cafe-shop", // Adjust this to link to actual section IDs
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div name ="work" id="work" className="px-5 md:px-10 py-10">
      {/* Header Section */}
      <div className='mb-8 text-center' data-aos="fade-up">
        <p className='text-5xl font-extrabold inline border-b-4 border-cyan-500 mb-4 text-gray-300'>Work</p>
        <p className='text-lg mt-4 text-gray-400'>Check out some of my recent work</p>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col md:flex-row justify-between">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 rounded-lg shadow-lg p-6 mb-6 md:mb-0 mx-3 shadow-cyan-400/50 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/50"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Staggered animation effect
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 transform hover:scale-110" // Image zoom on hover
            />
            <h2 className="text-xl font-bold text-cyan-300 mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link} // This link corresponds to the Work section
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor click behavior
                const sectionId = project.link.slice(1); // Remove '#' to get section ID
                document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' }); // Scroll to section
              }}
              className="inline-block mt-10 rounded-3xl bg-black px-6 py-3 text-center font-semibold text-[#5bcef1] animate-fadeIn transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-cyan-400 hover:text-white"
              data-aos="zoom-in" // Zoom-in animation on scroll
              data-aos-delay="500" // Delay the animation for more impact
              data-aos-duration="800" // Increase duration for smoother effect
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="block mt-10">
        {/* Container */}
        <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
          {/* Component */}
          <div className="flex-col flex items-center">
            <a href="#home" className="flex items-center font-extrabold text-cyan-400">
              <img src={FlashIcon} alt="Flash Icon" className="mr-2 h-6 w-6" /> {/* SVG icon */}
              <span className="text-xl">Atomic</span>
            </a>
            <div className="text-center font-semibold">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block px-6 py-2 font-normal text-gray-500 transition hover:text-cyan-300"
              >
                Home
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block px-6 py-2 font-normal text-gray-500 transition hover:text-cyan-300"
              >
                About
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block px-6 py-2 font-normal text-gray-500 transition hover:text-cyan-300"
              >
                Work
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block px-6 py-2 font-normal text-gray-500 transition hover:text-cyan-300"
              >
                Skills
              </a>
            </div>
            <div className="mb-8 mt-8 border-b border-gray-300 w-48"></div>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 mb-4">
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
            <p className="text-sm sm:text-base">
              © Date 09/10/2024. By PHOK PISETHSAMBO.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Work;