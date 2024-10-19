/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import Cafe from '../assets/projects/cafe.jpg';
import Railway from '../assets/projects/railway.jpg';
import Portfolio from '../assets/projects/portfolio.jpg'

const sampleProjects = [
  {
    title: 'Cafe Shop',
    description: 'Welcome to our cafe shop.',
    livePreview: '#',
    imageUrl: Cafe,
  },
  {
    title: 'Railway Project',
    description: 'Welcome to our Railway website.',
    livePreview: '#',
    imageUrl: Railway,
  },
  {
    title: 'Another Cafe Shop',
    description: 'Welcome to our Portfolio Website.',
    livePreview: 'https://atomic-portfolio.vercel.app',
    imageUrl: Portfolio,
  },
];

const ProjectCard = ({ title, description, livePreview, imageUrl }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 p-6 text-center"
      data-aos="zoom-in" // Apply AOS animation on each card for zoom effect
      data-aos-duration="800" // Duration for the animation
      data-aos-easing="ease-in-out" // Easing style for smooth animation
    >
      <img
        src={imageUrl}
        alt={title}
        className="object-cover rounded-2xl mb-6"
      />
      <h3 className="text-xl font-semibold text-cyan-600 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={livePreview}
        target="_blank"
        rel="noopener noreferrer"
          className="inline-block mt-10 rounded-3xl bg-gray-600 dark:bg-cyan-300 px-6 py-3 text-center font-semibold text-[#5bcef1] dark:text-white animate-fadeIn transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-cyan-400 hover:text-white dark:hover:bg-black"
      >
        Preview
      </a>
    </div>
  );
};

const ProjectsGrid = ({ projects }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration for all elements
      once: true, // Animation occurs only once when scrolled into view
      mirror: false, // Elements will not animate out when scrolling past them
      offset: 100, // Offset from the top of the viewport to start animation earlier
    });
  }, []);

  return (
    <div name="work" id="work" className="px-5 md:px-10 py-10 bg-white dark:bg-slate-800">
      <div className="text-center mb-8">
        <h2
          className="text-3xl font-bold md:text-5xl text-gray-400 dark:text-white"
          data-aos="fade-up" // Animation for the title
        >
          Works
        </h2>
        <div className="w-[9rem] h-1 bg-cyan-400 mx-auto mb-4" /> {/* Short cyan underline */}
        <p
          className="mb-8 max-w-lg text-sm text-gray-500 dark:text-gray-300 sm:text-base lg:mb-24 text-center mx-auto"
          data-aos="fade-up" // Animation for the paragraph
          data-aos-delay="100" // Slight delay for staggered effect
        >
          Hi, I am Phok Pisethsambo, nice to meet you. Please take a look around.
        </p>
      </div>
  
      <ProjectsGrid projects={sampleProjects} />
    </div>
  );
  };
  
  export default App;
