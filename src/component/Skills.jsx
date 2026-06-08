import React, { useEffect, useState, useRef } from 'react'
import '../css/skills.css'
import { skills_products, technologies, skills } from '../data/skills'

const Skills = () => {
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

  // Split skills into two columns
  const midpoint = Math.ceil(skills_products.length / 2);
  const leftColumnSkills = skills_products.slice(0, midpoint);
  const rightColumnSkills = skills_products.slice(midpoint);

  // Color mapping for gradients
  const getGradientColor = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      indigo: 'from-indigo-500 to-indigo-600',
      yellow: 'from-yellow-500 to-yellow-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-emerald-600'
    };
    return colors[color] || colors.blue;
  };

  const getTextColor = (color) => {
    const colors = {
      blue: 'text-blue-600 dark:text-blue-400',
      indigo: 'text-indigo-600 dark:text-indigo-400',
      yellow: 'text-yellow-600 dark:text-yellow-400',
      purple: 'text-purple-600 dark:text-purple-400',
      green: 'text-green-600 dark:text-green-400'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section 
      ref={sectionRef}
      className="skills-section px-6 md:px-12 py-20 md:py-32 relative overflow-hidden"
      id='skill'
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      
      {/* Section Header */}
      <div className='text-center mb-16 max-w-3xl mx-auto relative z-10'>
        <div className={`inline-block slide-animate slide-down ${isVisible ? 'animate' : ''}`}>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4'>
            {skills[0]?.title || "My Skills"}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto transform transition-all duration-500 hover:w-32"></div>
        </div>
        <p className={`text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.1s' }}>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      {/* Skills Grid */}
      <div className='skills-list max-w-5xl mx-auto relative z-10'>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
          
          {/* Left Column Skills */}
          <div className="space-y-6">
            {leftColumnSkills.map((skill, index) => (
              <div 
                key={skill.id}
                className={`group transform transition-all duration-300 hover:scale-105 slide-animate slide-left ${isVisible ? 'animate' : ''}`} 
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl group-hover:animate-bounce">{skill.icon}</span>
                    <p className='text-lg font-semibold text-gray-800 dark:text-white'>{skill.title}</p>
                  </div>
                  <p className={`text-sm font-medium ${getTextColor(skill.color)}`}>{skill.percentage}%</p>
                </div>
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getGradientColor(skill.color)} rounded-full transform transition-all duration-1000 ease-out group-hover:shadow-lg`}
                    style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column Skills */}
          <div className="space-y-6">
            {rightColumnSkills.map((skill, index) => (
              <div 
                key={skill.id}
                className={`group transform transition-all duration-300 hover:scale-105 slide-animate slide-right ${isVisible ? 'animate' : ''}`} 
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl group-hover:animate-bounce">{skill.icon}</span>
                    <p className='text-lg font-semibold text-gray-800 dark:text-white'>{skill.title}</p>
                  </div>
                  <p className={`text-sm font-medium ${getTextColor(skill.color)}`}>{skill.percentage}%</p>
                </div>
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getGradientColor(skill.color)} rounded-full transform transition-all duration-1000 ease-out group-hover:shadow-lg`}
                    style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Badges */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className={`text-center text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6 fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.5s' }}>
            {skills[0]?.title2 || "Other Technologies I Work With"}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span 
                key={tech.id}
                className={`px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold shadow-md transform transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer fade-up ${isVisible ? 'animate' : ''}`}
                style={{ transitionDelay: `${0.6 + index * 0.05}s` }}
              >
                {tech.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills