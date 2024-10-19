import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import aboutImage from '../assets/profile2.jpg';  

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true }); // Initialize AOS
  }, []);

  return (
    <section name="about" id="about" className="bg-white dark:bg-slate-800 py-16 md:py-20">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl font-bold md:text-5xl text-gray-800 dark:text-gray-100"
            data-aos="fade-up" // Animation for the title
          >
            About 
          </h2>
          <div className="w-[9rem] h-1 bg-cyan-400 mx-auto mb-4" /> {/* Short cyan underline */}
        </div>
        
        {/* Centered Paragraph */}
        <p
          className="mb-8 max-w-lg text-sm text-gray-600 dark:text-gray-300 sm:text-base lg:mb-24 text-center mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hi, I am Phok Pisethsambo, nice to meet you. Please take a look around.
        </p>

        {/* Image and Description Card */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Image Section */}
          <img
            src={aboutImage}
            alt="Profile"
            className="mx-auto w-48 sm:w-64 md:w-80 lg:w-96 rounded-full shadow-lg shadow-cyan-400 dark:shadow-cyan-600 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/50"
            data-aos="zoom-in" // Zoom-in animation for the image
          />

          {/* Text Section */}
          <div
            className="flex-col gap-5 rounded-3xl p-10 sm:p-20 bg-slate-100 dark:bg-slate-700 shadow-lg shadow-cyan-400 dark:shadow-cyan-600 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500 text-base text-gray-600 dark:text-gray-300 text-center"
            data-aos="fade-left"
          >
            <h2 className="text-3xl font-bold md:text-5xl text-gray-800 dark:text-gray-100">About me</h2>
            <div className="w-[14rem] h-1 bg-cyan-400 mx-auto mb-6" /> {/* Short cyan underline */}
            <p className="text-sm sm:text-base flex">
              I’m passionate about building excellent software that enhances the lives of those around me.
              I specialize in creating solutions for clients ranging from individuals and small businesses to large enterprise corporations.
              Imagine having a software expert available at your fingertips—what could we achieve together?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;