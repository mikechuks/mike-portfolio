import '../css/sidebar.css'
import React from "react";
import portImg from "../assets/my-profile-img.jpg"; 
import { useState, useEffect } from 'react';
import proImg from "../assets/ChatGPT Image Jun 2, 2026, 04_32_51 AM.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(true); // Keep sidebar open on desktop
      } else {
        setIsSidebarOpen(false); // Close sidebar on mobile by default
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Trigger content animations when sidebar opens
  useEffect(() => {
    if (isSidebarOpen) {
      // Small delay to ensure sidebar is fully open before animating content
      const timer = setTimeout(() => {
        setIsContentVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsContentVisible(false);
    }
  }, [isSidebarOpen]);

  // Close sidebar when clicking on a link (mobile only)
  const handleNavClick = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
      setIsContentVisible(false);
    }
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      // Reset content visibility when closing
      setIsContentVisible(false);
    }
  };
  
  return (
    <>
      {/* Mobile Header with Hamburger Menu */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 to-gray-900 shadow-lg animate-slide-in-down">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo/Brand */}
          <div className="text-white font-bold text-xl animate-fade-in">
            Nwoye Michael
          </div>
          
          {/* Hamburger Menu Button - Animated */}
          <button 
            onClick={toggleSidebar}
            className="relative w-10 h-10 focus:outline-none group"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`block absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                isSidebarOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}></span>
              <span className={`block absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isSidebarOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                isSidebarOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Overlay for mobile - closes sidebar when clicked */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 animate-fade-in"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar Navigation - Modified to slide */}
      <nav className={`
        side-con fixed top-0 left-0 h-screen w-64 md:w-72 lg:w-80 
        bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 
        text-white overflow-y-auto shadow-2xl z-50
        transition-all duration-500 ease-in-out transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        
        {/* Close button for mobile only */}
        {isMobile && (
          <button 
            onClick={toggleSidebar}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 z-20 md:hidden animate-fade-in"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-20 w-60 h-60 bg-pink-500 rounded-full blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        </div>

        {/* Profile Section - FIXED: Removed spinning border ring that was causing blur */}
        <div className='img-text grid justify-items-center items-center py-8 px-4 relative z-10 mt-4 md:mt-0'>
          {/* Simple clean profile image without blur or spinning animation */}
          <div className={`relative group slide-animate slide-down ${isContentVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.1s' }}>
            {/* Removed the spinning gradient ring that was causing issues */}
            <div className="relative rounded-full overflow-hidden transform transition-all duration-500 group-hover:scale-105">
              <img 
                src={proImg} 
                alt="Profile" 
                className='w-32 md:w-36 lg:w-40 rounded-full border-4 border-purple-500/50 shadow-xl object-cover'
              />
            </div>
            
            {/* Optional: Simple static ring instead of spinning one */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
          </div>
          
          {/* Name with gradient */}
          <h1 className={`text-2xl md:text-3xl font-bold mt-6 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient slide-animate slide-right ${isContentVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
            Nwoye Michael
          </h1>
          
          {/* Role Badge */}
          <div className={`mt-2 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold animate-pulse fade-up ${isContentVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.25s' }}>
            Web Developer
          </div>
        </div>

        {/* Navigation Menu */}
        <ul className='mt-8 space-y-1 px-4 relative z-10'>
          {[
            { name: 'Home', icon: '', href: '/' },
            { name: 'About', icon: '', href: '/' },
            { name: 'Resume', icon: '', href: '/' },
            { name: 'Portfolio', icon: '', href: '/' },
            { name: 'Skill', icon: '', href: '/' },
            { name: 'Contact', icon: '', href: '/' }
          ].map((item, index) => (
            <li key={index} className='relative group'>
              <a 
                href={item.href}
                onClick={handleNavClick}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 slide-animate slide-left ${isContentVisible ? 'animate' : ''}`}
                style={{ transitionDelay: `${0.3 + index * 0.05}s` }}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <span className="font-medium flex-1">{item.name}</span>
                
                {/* Active Indicator */}
                {item.name === 'Home' && (
                  <span className="w-1.5 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></span>
                )}
              </a>
              
              {/* Hover Line Effect */}
              <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </li>
          ))}
        </ul>

        {/* Social Media Links */}
        <div className=" bottom-8 left-0 right-0 px-4 z-10">
          <div className="flex justify-center gap-4">
              <a 
                href="https://web.facebook.com/profile.php?id=100064047870058"
                className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6 fade-up ${isContentVisible ? 'animate' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon fontSize="small"/>
              </a>
              <a 
                href="#"
                className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6 fade-up ${isContentVisible ? 'animate' : ''}`}
              >
                <InstagramIcon fontSize="small"/>
              </a>
              <a 
                href="#"
                className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6 fade-up ${isContentVisible ? 'animate' : ''}`}
              >
                <YouTubeIcon fontSize="small"/>
              </a>
              <a 
                href="https://linkedin.com/in/michael-nwoye-5703b023a"
                className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6 fade-up ${isContentVisible ? 'animate' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="small"/>
              </a>
          </div>
          
          {/* Copyright Text */}
          <p className={`text-center text-xs text-gray-400 mt-6 fade-up ${isContentVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.8s' }}>
            © 2024 Nwoye Michael<br/>
            All Rights Reserved
          </p>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;