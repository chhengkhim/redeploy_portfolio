import { useEffect } from 'react';
import AOS from 'aos';
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
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div name="skills" id="skills" className='w-full h-auto py-16 text-gray-400'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='mb-8 text-center' data-aos="fade-up">
          <p className='text-5xl font-extrabold inline border-b-4 border-cyan-500 mb-4 text-gray'>Skills</p>
          <p className='text-lg mt-4 text-gray-400'>Technologies I have worked with</p>
        </div>

        <div className='grid grid-cols-2 gap-8 text-center py-8 sm:grid-cols-3 md:grid-cols-4'>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className='bg-gray-100 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-400'
              data-aos="fade-up" // Animation for each skill card
              data-aos-delay={index * 100} // Stagger effect for each skill
            >
              <img className='w-20 mx-auto mb-4' src={skill.img} alt={`${skill.name} icon`} />
              <p className='text-xl font-semibold text-cyan-400'>{skill.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;