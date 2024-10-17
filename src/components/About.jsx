import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import aboutImage from '../assets/about.png';  

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true }); // Initialize AOS
  }, []);

  return (
    <section>
      {/* Container */}
      <div name ="about" id="about" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl font-bold md:text-5xl text-gray-400"
            data-aos="fade-up" // Animation for the title
          >
            About
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4" /> {/* Short cyan underline */}
        </div>
        
        {/* Centered Paragraph */}
        <p
          className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-24 text-center mx-auto" // Center alignment
          data-aos="fade-up" // Animation for the paragraph
          data-aos-delay="100" // Slight delay for staggered effect
        >
          Hi, I am Phok Pisethsambo, nice to meet you. Please take a look around.
        </p>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <img
            src={aboutImage}
            alt="About Me"
            className="inline-block h-full w-full rounded-2xl object-cover shadow-lg shadow-cyan-400/50 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/50" // Added colorful shadow to the image
            data-aos="fade-right" // Animation for the image
          />
          <div
            className="flex flex-col gap-5 rounded-2xl p-10 sm:p-20 bg-white shadow-lg shadow-cyan-400/50 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/50" // Added background and shadow
            data-aos="fade-left" // Animation for the mission section
          >
            <h2 className="text-3xl font-bold md:text-5xl">About</h2>
            <p className="text-sm text-gray-500 sm:text-base">
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