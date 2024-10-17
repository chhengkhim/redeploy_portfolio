import { useEffect } from 'react';
import AOS from 'aos';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import 'aos/dist/aos.css'; // Import AOS styles

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
import Cpp from "../assets/c++.png"

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
    { img: Sql, name: "Sql"},
    { img: Js, name: "Java Script"},
    { img: Cpp, name: "C++"},
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div name="skills" id="skills" className='w-full h-auto py-16 text-gray-400'>
      <div className="text-center mb-8">
        <h2
          className="text-3xl font-bold md:text-5xl text-gray-400"
          data-aos="fade-up" // Animation for the title
        >
          Skills
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4" /> {/* Short cyan underline */}
        <p
          className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-24 text-center mx-auto" // Center alignment
          data-aos="fade-up" // Animation for the paragraph
          data-aos-delay="100" // Slight delay for staggered effect
        >
          Technologies I have worked with.
        </p>
      </div>

        <div className='grid grid-cols-2 gap-8 text-center py-8 sm:grid-cols-3 md:grid-cols-4'>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className='bg-gray-100 p-6 rounded-xl transform hover:scale-105 hover:bg-gray-100 shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/50'
              data-aos="fade-up" // Animation for each skill card
              data-aos-delay={index * 100} // Stagger effect for each skill
            >
              <img className='w-20 mx-auto mb-4' src={skill.img} alt={`${skill.name} icon`} />
              <p className='text-xl font-semibold text-cyan-400'>{skill.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
        <footer className="block mt-10">
        <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-9 md:px-10">
          <div className="flex-col flex items-center" data-aos="fade-up" data-aos-delay="300">
            <div className="mb-8 mt-8 border-b border-gray-300 w-48">
            <div className="flex items-center ml-11 space-x-4 mb-4">
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

export default Skills;
