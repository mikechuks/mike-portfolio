import React, { useEffect, useState, useRef } from 'react';
import portImg from '../assets/app-1.jpg';
import '../css/portfolio.css';
import { portfolio_hero, portfolio_product } from '../data/portfolio';
import vert from '../assets/Screenshot 2026-06-06 032831.png';
import maplevill from '../assets/Screenshot 2026-06-06 032931.png';
import celac from '../assets/Screenshot 2026-06-06 033010.png';
import consulting from '../assets/Screenshot 2026-06-06 033039.png';
import emnek from '../assets/Screenshot 2026-06-06 033118.png';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Safely get data
  const heroData = portfolio_hero && portfolio_hero[0] ? portfolio_hero[0] : null;
  const productData = portfolio_product || [];

  // Categories based on hero data or default
  const categories = heroData 
    ? [heroData.btn || 'ALL', heroData.btn1 || 'MOBILE APP', heroData.btn2 || 'WEB APP', 'BRANDING', 'BOOKS']
    : ['ALL', 'MOBILE APP', 'WEB APP', 'BRANDING', 'BOOKS'];

  // Sample portfolio items with categories
  const portfolioItems = [
    { id: 1, title: "E-Commerce App", category: "WEB APP", description: "Modern mobile shopping experience", image: vert, badgeColor: "from-purple-600 to-pink-600", href:"https://vetman.ng"},
    { id: 2, title: "Brand Identity", category: "WEB APP", description: "Complete branding package", image: maplevill, badgeColor: "from-pink-600 to-orange-600", href:"https://maplevilleacademyresult.com.ng/" },
    { id: 3, title: "Analytics Dashboard", category: "WEB APP", description: "Real-time data visualization", image: celac, badgeColor: "from-blue-600 to-cyan-600", href:"https://celacglobalogistics.com/" },
    { id: 4, title: "Digital Publication", category: "WEB APP", description: "Interactive ebook platform", image: consulting, badgeColor: "from-green-600 to-emerald-600", href:"https://bytheconsultinglimited.com/" },
    { id: 5, title: "Fitness Tracker", category: "WEB APP", description: "Health and wellness app", image: emnek, badgeColor: "from-purple-600 to-indigo-600", href:"https://emnekdigital.com/" },

  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'ALL' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section 
      ref={sectionRef}
      className='p-6 md:p-12 lg:p-16 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'
      id='portfolio'
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* Section Header */}
      <div className='text-center mb-12 max-w-3xl mx-auto relative z-10'>
        <div className={`inline-block slide-animate slide-down ${isVisible ? 'animate' : ''}`}>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'>
            {heroData?.title || "My Portfolio"}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mt-4 transform transition-all duration-500 hover:w-32"></div>
        </div>
        <p className={`text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.1s' }}>
          {heroData?.content || "Explore my latest work and creative projects. Each project represents my commitment to quality and innovation."}
        </p>
      </div>

      {/* Portfolio Filter Menu */}
      <div className='port-list max-w-7xl mx-auto relative z-10'>
        <div className='menu flex flex-wrap justify-center gap-2 md:gap-4 mb-12'>
          {categories.map((category, index) => (
            <span 
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold cursor-pointer transition-all duration-300 transform hover:scale-110 fade-up ${isVisible ? 'animate' : ''} ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.05}s` }}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 portfolio-item slide-animate slide-up ${isVisible ? 'animate' : ''}`} 
              style={{ transitionDelay: `${0.3 + index * 0.05}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className='w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm mb-3">{item.description}</p>
                  <div className="flex gap-2">
                    <a className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/30 transition-colors" href={item.href} target="_blank" rel="noopener noreferrer">
                      {productData[0]?.btn1 || "View Project"}
                    </a>
                    <a className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/30 transition-colors">
                      {productData[0]?.btn2 || "Details"}
                    </a>
                  </div>
                </div>

                {/* Category Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${item.badgeColor} rounded-full text-white text-xs font-semibold transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500`}>
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <button className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">{heroData?.btn3 || "Load More Projects"}</span>
            <span className="relative z-10 text-xl group-hover:translate-x-1 transition-transform duration-300">🚀</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  )
}
export default Portfolio