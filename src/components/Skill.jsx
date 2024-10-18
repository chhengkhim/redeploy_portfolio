import { useEffect } from 'react';
import AOS from 'aos';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import 'aos/dist/aos.css'; // Import AOS styles

// Import your skill images
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Php from '../assets/php.png';
import ReactLogo from '../assets/react.png';
import Laravel from '../assets/laravel.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/boostrap.png';
import Sql from '../assets/sql.png';
import Js from '../assets/js.png';
import Cpp from "../assets/c++.png";

const Skills = () => {
  const skills = [
    { img: HTML, name: "HTML" },
    { img: CSS, name: "CSS" },
    { img: Bootstrap, name: "Bootstrap" },
    { img: Php, name: "PHP" },
    { img: Laravel, name: "Laravel" },
    { img: GitHub, name: "GitHub" },
    { img: ReactLogo, name: "React.js" },
    { img: Tailwind, name: "Tailwind" },
    { img: Sql, name: "Sql" },
    { img: Js, name: "Java Script" },
    { img: Cpp, name: "C++" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Smooth animation effect
      once: false, // Animation will trigger every time element is scrolled into view
      mirror: true, // Enables animation on scroll up
    });
  }, []);

  return (
    <div name="skills" id="skills" className="w-full py-20 bg-white dark:bg-slate-800 text-gray-900 dark:text-white">
      <div className="text-center mb-8">
        <h2
          className="text-3xl font-bold md:text-5xl text-gray-900 dark:text-gray-100"
          data-aos="fade-up" // Animation for the title
        >
        Skills
        </h2>
        <div className="w-[8rem] h-1 bg-cyan-400 mx-auto mb-4" /> {/* Short cyan underline */}
        <p
          className="mb-8 max-w-lg text-sm text-gray-500 dark:text-gray-300 sm:text-base lg:mb-24 text-center mx-auto"
          data-aos="fade-up" // Animation for the paragraph
          data-aos-delay="100" // Slight delay for staggered effect
        >
          Hi, I am Phok Pisethsambo, nice to meet you. Please take a look around.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-700 dark:bg-slate-800 border border-gray-600 dark:border-slate-700 p-4 rounded-xl shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-center items-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Circular Image */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-gray-700 dark:bg-slate-600 flex items-center justify-center">
                <img className="w-10 h-10 object-contain" src={skill.img} alt={`${skill.name} icon`} />
              </div>
            </div>

            {/* Skill Name and Description */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-white dark:text-gray-200 mb-2">{skill.name}</h3>
              <p className="text-gray-400 dark:text-white text-sm">A brief description about {skill.name} technology.</p>
            </div>

            {/* Live Demo Button with Dark Mode Support */}
            <div className="text-center mt-auto">
              <a
                href="#work" // This link corresponds to the Work section
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block mt-10 rounded-3xl bg-gray-200 dark:bg-white px-6 py-3 text-center font-semibold text-[#5bcef1] dark:text-cyan-300 animate-fadeIn transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-cyan-400 hover:text-white dark:hover:bg-black"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="800"
              >
                Preview
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 py-10 bg-white dark:bg-slate-800 text-gray-900 dark:text-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors duration-300">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors duration-300">
              <FaLinkedin size={28} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors duration-300">
              <FaFacebook size={28} />
            </a>
          </div>
          <p className="text-sm sm:text-base">
            © 2024. By PHOK PISETHSAMBO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Skills;