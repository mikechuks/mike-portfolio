import React, { useEffect, useState, useRef } from 'react'
import '../css/about.css';
import { about } from '../data/about.js';
import proImg from "../assets/ChatGPT Image Jun 2, 2026, 04_37_29 AM.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section 
      ref={sectionRef} 
      className='about-sec p-6 md:p-12 lg:p-16 relative overflow-hidden'
      id='about'
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
      
      {about.map((aboutItem) => (
        <div key={aboutItem.id}>
          {/* Section Title */}
          <div className={`text-center mb-12 transform transition-all duration-700 hover:scale-105 slide-animate slide-down ${isVisible ? 'animate' : ''}`}>
            <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent inline-block relative group'>
              {aboutItem.title}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></div>
            </h1>
            <p className={`text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.1s' }}>
              Get to know more about my journey and expertise 
            </p>
          </div>

          <div className='about-content grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {/* Image Section - Using proImg */}
            <div className={`about-img group relative slide-animate slide-left ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                <img 
                  src={proImg} 
                  alt="Profile" 
                  className='w-full h-auto object-cover rounded-2xl shadow-2xl'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              {/* Floating badge */}
              <div className={`absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 slide-animate slide-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.4s' }}>
                <span className="text-sm font-semibold">{aboutItem.year}</span>
              </div>
            </div>

            {/* Text Content */}
            <div className='about-text col-span-2 space-y-6'>
              <h2 className={`text-2xl md:text-3xl font-bold text-gray-800 dark:text-white slide-animate slide-right ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.3s' }}>
                {aboutItem.subtitle}
              </h2>
              
              <p className={`text-gray-600 dark:text-gray-300 leading-relaxed slide-animate slide-right ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.4s' }}>
                {aboutItem.detail}
              </p>

              {/* Info Lists */}
              <div className={`about-list grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg slide-animate slide-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.5s' }}>
                <ul className="space-y-4">
                  <li className='py-2 flex items-center group/item transform transition-all duration-300 hover:translate-x-2'>
                    <span className="text-2xl mr-3">{aboutItem.icon_birthday}</span>
                    <div>
                      <span className='font-semibold text-gray-700 dark:text-gray-200'>Birthday: </span>
                      <span className='text-gray-600 dark:text-gray-400'>{aboutItem.icon_birthday_text}</span>
                    </div>
                  </li>
                  <li className='py-2 flex items-center group/item transform transition-all duration-300 hover:translate-x-2'>
                    <span className="text-2xl mr-3">{aboutItem.icon_website}</span>
                    <div>
                      <span className='font-semibold text-gray-700 dark:text-gray-200'>Website: </span>
                      <span className='text-gray-600 dark:text-gray-400'>{aboutItem.icon_website_text}</span>
                    </div>
                  </li>
                  <li className='py-2 flex items-center group/item transform transition-all duration-300 hover:translate-x-2'>
                    <span className="text-2xl mr-3">{aboutItem.icon_phone}</span>
                    <div>
                      <span className='font-semibold text-gray-700 dark:text-gray-200'>Phone: </span>
                      <span className='text-gray-600 dark:text-gray-400'>{aboutItem.icon_phone_text}</span>
                    </div>
                  </li>
                  <li className='py-2 flex items-center group/item transform transition-all duration-300 hover:translate-x-2'>
                    <span className="text-2xl mr-3">{aboutItem.icon_city}</span>
                    <div>
                      <span className='font-semibold text-gray-700 dark:text-gray-200'>City: </span>
                      <span className='text-gray-600 dark:text-gray-400'>{aboutItem.icon_city_text}</span>
                    </div>
                  </li>
                </ul>
                
                <ul className="space-y-4">
                  <li className='py-2 flex items-center group/item transform transition-all duration-300 hover:translate-x-2'>
                    <span className="text-2xl mr-3">🎯</span>
                    <div>
                      <span className='font-semibold text-gray-700 dark:text-gray-200'>Age: </span>
                      <span className='text-gray-600 dark:text-gray-400'>{aboutItem.age}</span>
                    </div>
                  </li>
                  <li className='py-2 flex items-center group/item transform transition-all duration-300 hover:translate-x-2'>
                    <span className="text-2xl mr-3">{aboutItem.icon_degree}</span>
                    <div>
                      <span className='font-semibold text-gray-700 dark:text-gray-200'>Degree: </span>
                      <span className='text-gray-600 dark:text-gray-400'>{aboutItem.icon_degree_text}</span>
                    </div>
                  </li>
                  <li className='py-2 flex items-center group/item transform transition-all duration-300 hover:translate-x-2'>
                    <span className="text-2xl mr-3">{aboutItem.icon_email}</span>
                    <div>
                      <span className='font-semibold text-gray-700 dark:text-gray-200'>Email: </span>
                      <span className='text-gray-600 dark:text-gray-400'>{aboutItem.icon_email_text}</span>
                    </div>
                  </li>
                  <li className='py-2 flex items-center group/item transform transition-all duration-300 hover:translate-x-2'>
                    <span className="text-2xl mr-3">{aboutItem.icon_freelance}</span>
                    <div>
                      <span className='font-semibold text-gray-700 dark:text-gray-200'>Freelance: </span>
                      <span className='text-gray-600 dark:text-gray-400'>{aboutItem.icon_freelance_text}</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Additional paragraph */}
              <div className={`py-4 fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.6s' }}>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-purple-500 pl-4 italic'>
                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                </p>
              </div>

              {/* Skills/Tech Stack */}
              <div className="flex flex-wrap gap-3 pt-4">
                {aboutItem.stack && aboutItem.stack.map((skill, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold transform transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer fade-up ${isVisible ? 'animate' : ''}`}
                    style={{ transitionDelay: `${0.7 + index * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default About