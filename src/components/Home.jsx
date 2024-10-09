import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import profileImage from '../assets/profile.jpg';  // Import your image

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true }); // Initialize AOS and set the animation duration to 1 second
  }, []);

  return (
    <section name="home" className="bg-white py-16 md:py-20" id="home">
      <div className="container mx-auto max-w-7xl px-5 md:px-10">
        
        {/* Main Section - Welcome Title */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl font-extrabold leading-none tracking-tight text-cyan-400 sm:text-5xl md:text-6xl xl:text-7xl animate-slideUp"
            data-aos="fade-up" // Animation trigger on scroll
          >
            <span className="block">WELCOME TO MY</span>
            <span className="relative inline-block mt-3 text-cyan-400">PORTFOLIO WEBSITE</span>
          </h1>
          <a
              href="#work" // This link corresponds to the Work section
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block mt-10 rounded-3xl bg-black px-6 py-3 text-center font-semibold text-[#5bcef1] animate-fadeIn transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-cyan-400 hover:text-white"
              data-aos="zoom-in" // Zoom-in animation on scroll
              data-aos-delay="500" // Delay the animation for more impact
              data-aos-duration="800" // Increase duration for smoother effect
            >
              Get started
          </a>
        </div>

        {/* Text and Image Section */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          
          {/* Text Section */}
          <div data-aos="fade-right"> {/* Slide-in from the right */}
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#5bcef1] leading-snug">
              Hi, my name is
            </h2>
            <h1 className="mb-5 text-3xl sm:text-5xl md:text-6xl font-bold text-[#5bcef1]">
              PHOK PISETHSAMBO
            </h1>
            <p className="mb-5 max-w-lg text-base sm:text-lg md:text-xl text-gray-500 lg:mb-10 leading-relaxed">
              I am a Frontend Developer specializing in crafting exceptional digital experiences. 
              My passion lies in building responsive and engaging web applications that not only look great but also provide seamless user interactions.
            </p>
          </div>
          
          {/* Image Section */}
          <div data-aos="fade-left"> {/* Slide-in from the left */}
            <img
              src={profileImage}
              alt="Profile"
              className="mx-auto w-48 sm:w-64 md:w-80 lg:w-96 rounded-full shadow-lg"
              data-aos="zoom-in" // Zoom-in animation for the image
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;