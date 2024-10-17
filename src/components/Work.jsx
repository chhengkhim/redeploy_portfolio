/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import Cafe from '../assets/projects/cafe.jpg';
import Railway from '../assets/projects/railway.jpg';

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
    description: 'Welcome to our second cafe shop.',
    livePreview: '#',
    imageUrl: Cafe,
  },
];

const ProjectCard = ({ title, description, livePreview, imageUrl }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 p-6 text-center"
      data-aos="fade-up" // Apply AOS animation on each card
    >
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover rounded-lg mb-6" />
      <h3 className="text-xl font-semibold text-cyan-600 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={livePreview}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-10 rounded-3xl bg-black px-6 py-3 text-center font-semibold text-[#5bcef1] animate-fadeIn transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-cyan-400 hover:text-white"
      >
        Live Demo
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
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once or every time you scroll
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div name="work" id="work" className="px-5 md:px-10 py-10">
      <div className="text-center mb-8">
        <h2
          className="text-3xl font-bold md:text-5xl text-gray-400"
          data-aos="fade-up"
        >
          Work
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4" data-aos="fade-up" data-aos-delay="100" />
        <p
          className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-24 text-center mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hi, I am Phok Pisethsambo, nice to meet you. Please take a look around.
        </p>
      </div>

      <ProjectsGrid projects={sampleProjects} />
    </div>
  );
};

export default App;