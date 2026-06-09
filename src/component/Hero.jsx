import React from "react";
import heroImg from "../assets/hero-bg.jpg";
import '../css/hero.css';
import { hero } from '../data/hero';
import proImg from "../assets/ChatGPT Image Jun 2, 2026, 04_32_51 AM.png";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <header className='min-h-screen flex items-center justify-center relative overflow-hidden'> 
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black animate-gradient-xy"></div>
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-ping animation-delay-200"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-500"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-blue-300 rounded-full animate-pulse animation-delay-300"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      
      {hero.map((item) => (
        <div key={item.id} className='hero-container container mx-auto px-4 sm:px-6 relative z-10'>
          {/* Row on desktop (lg:flex-row), Column on mobile/tablet (flex-col) */}
          <div className='flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 transform transition-all duration-1000 hover:scale-105'>
            
            {/* Image Section */}
            <div className='flex-shrink-0 animate-slide-in-right'>
              <div className="flex justify-center">
                <img 
                  src={proImg} 
                  alt="Profile" 
                  className='w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover border-4 border-purple-500/50 shadow-2xl hover:border-purple-400 transition-all duration-300 hover:scale-105 mx-auto'
                />
              </div>
            </div>
            
            {/* Text Section - Left aligned on desktop, Centered on mobile/tablet */}
            <div className='hero-text text-white text-center lg:text-left animate-slide-in-left'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
                {item.name}
              </h1>
              
              {/* Typing Animation - Starts automatically */}
              <div className="relative inline-block lg:inline-block">
                <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 tracking-wide'>
                  I'm a{' '}
                  <span className="relative inline-block ml-1">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-md opacity-75 animate-pulse"></span>
                    <span className="relative inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                      <ReactTyped
                        strings={[
                          "Software Developer",
                          "Web Developer",
                          "Full Stack Developer",
                          "UI/UX Designer",
                          "Frontend Expert"
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        backDelay={2000}
                        startDelay={500}
                        loop={true}
                        showCursor={true}
                        cursorChar="|"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                      />
                    </span>
                  </span>
                </p>
              </div>
              
              <div className="mt-6 sm:mt-8 animate-fade-in-up">
                <button className="px-6 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </header>
  );
};

export default Hero;