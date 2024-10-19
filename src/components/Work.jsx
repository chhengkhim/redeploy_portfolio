/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import Cafe from '../assets/projects/cafe.jpg';
import Railway from '../assets/projects/railway.jpg';
import Portfolio from '../assets/projects/portfolio.jpg';

const sampleProjects = [
  {
    title: 'Another Cafe Shop',
    description: 'Welcome to our Portfolio Website.',
    livePreview: 'https://atomic-portfolio.vercel.app',
    imageUrl: Portfolio,
  },
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
];

const ProjectCard = ({ title, description, livePreview, imageUrl }) => {
  return (
    <div
      className="relative bg-white dark:bg-slate-900 shadow-lg shadow-cyan-400 dark:shadow-cyan-600 hover:shadow-cyan-500 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    >
      {/* Card Image with Hover Effect */}
      <div className="overflow-hidden rounded-t-xl relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
        />
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
      </div>

      {/* Card Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 transition-transform duration-300 group-hover:translate-y-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <a
          href={livePreview}
          target="_blank"
          rel="noopener noreferrer"
         className="inline-block mt-10 rounded-3xl bg-gray-600 dark:bg-white px-6 py-3 text-center font-semibold text-[#5bcef1] dark:text-cyan-300 animate-fadeIn transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-cyan-400 hover:text-white dark:hover:bg-black"
        >
          Preview
        </a>
      </div>

      {/* Decorative Circle Animation */}
      <div className="absolute -top-6 -left-6 w-14 h-14 bg-cyan-500 dark:bg-cyan-400 rounded-full opacity-75 blur-lg animate-pulse"></div>
    </div>
  );
};

const ProjectsGrid = ({ projects }) => {
  return (
    <section className="py-12 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Adjusted grid layout for better responsiveness */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
    <div name="work" id="work" className="px-5 md:px-10 py-20 bg-white dark:bg-slate-800">
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-bold text-gray-800 dark:text-white tracking-wide"
          data-aos="fade-up"
        >
          My Projects
        </h2>
        <div className="w-16 h-1 bg-indigo-500 dark:bg-indigo-400 mx-auto my-6"></div>
        <p
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Explore some of the projects I have worked on, showcasing my skills and creativity.
        </p>
      </div>

      <ProjectsGrid projects={sampleProjects} />
    </div>
  );
};

export default App;