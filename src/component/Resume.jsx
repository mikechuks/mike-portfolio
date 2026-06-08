import React, { useEffect, useState, useRef } from 'react'
import '../css/resume.css'
import { resume } from '../data/resume'

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [error, setError] = useState(null);

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

  // Safely get resume data with fallbacks
  const resumeData = resume && resume[0] ? resume[0] : null;
  
  // If no data, show loading or return null
  if (!resumeData) {
    return <div className="text-center py-20">Loading resume data...</div>;
  }

  // Safe array for contact info
  const contactInfo = [
    "📍 Portland par 127, Orlando, FL",
    "📞 (123) 456-7891",
    "✉️ alice.barkley@example.com"
  ];

  return (
    <section 
      ref={sectionRef}
      className='px-6 md:px-12 py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-100 to-blue-100 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>
      
      {/* Section Header */}
      <div className='text-center mb-16 max-w-3xl mx-auto relative z-10'>
        <div className={`inline-block slide-animate slide-down ${isVisible ? 'animate' : ''}`}>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'>
            Resume
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mt-4 transform transition-all duration-500 hover:w-32"></div>
        </div>
        <p className={`text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.1s' }}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
          Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
        </p>
      </div>

      <div className='resume-items max-w-6xl mx-auto relative z-10'>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
          
          {/* Left Column - Summary & Education */}
          <div className='space-y-8'>
            {/* Summary Section */}
            <div className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 slide-animate slide-left ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>{resumeData.summary || "Summary"}</h2>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 ml-4">
                <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>{resumeData.summary_name || "Professional Summary"}</h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-4'>
                  {resumeData.summary_desc || "Professional with experience in software development."}
                </p>
                <ul className='space-y-3'>
                  {contactInfo.map((item, index) => (
                    <li key={index} className='flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:translate-x-2 transition-transform duration-300'>
                      <span className="text-purple-500">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-6">
              <div className={`flex items-center gap-3 mb-2 slide-animate slide-left ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.3s' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>{resumeData.education || "Education"}</h2>
              </div>

              {/* University Education */}
              <div className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.35s' }}>
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  <div className="ml-6">
                    <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-3">
                      2020 - 2024
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>{resumeData.education_name3 || "University"}</h3>
                    <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                      {resumeData.education_desc3 || "Bachelor of Science in Computer Science"}
                    </p>
                    <ul className='space-y-2 mt-3'>
                      <li className='flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm'>
                        🏛️ {resumeData.education_name3 || "University"}
                      </li>
                      <li className='flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm'>
                        ⭐ GPA: 4.0/4.0
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certification 1 */}
              <div className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.4s' }}>
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  <div className="ml-6">
                    <div className="inline-block px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-semibold mb-3">
                      2022 - 2023
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>{resumeData.education_name1 || "Certification"}</h3>
                    <p className='text-gray-600 dark:text-gray-300'>
                      {resumeData.education_desc1 || "Professional Certification in Web Development"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Certification 2 */}
              <div className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.45s' }}>
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-teal-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  <div className="ml-6">
                    <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-semibold mb-3">
                      2023
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>{resumeData.education_name2 || "Online Certification"}</h3>
                    <p className='text-gray-600 dark:text-gray-300'>
                      {resumeData.education_desc2 || "Advanced Full Stack Development"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Experience */}
          <div className='space-y-8'>
            <div className={`flex items-center gap-3 mb-2 slide-animate slide-right ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>{resumeData.prof_title || "Professional Experience"}</h2>
            </div>

            {/* Experience 1 */}
            <div className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 slide-animate slide-right ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute -left-8 top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                <div className="ml-6">
                  <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                    <div>
                      <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>{resumeData.prof_sub_title1 || "Company"}</h3>
                      <p className='text-purple-600 dark:text-purple-400 font-medium'>{resumeData.prof_sub_role1 || "Position"}</p>
                    </div>
                    <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">
                      {resumeData.prof_sub_date1 || "2022 - Present"}
                    </div>
                  </div>
                  <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                    {resumeData.prof_sub_desc1 || "Professional experience description."}
                  </p>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 slide-animate slide-right ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.35s' }}>
              <div className="relative">
                <div className="absolute -left-8 top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                <div className="ml-6">
                  <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                    <div>
                      <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>{resumeData.prof_sub_title2 || "Company"}</h3>
                      <p className='text-purple-600 dark:text-purple-400 font-medium'>{resumeData.prof_sub_role2 || "Position"}</p>
                    </div>
                    <div className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold">
                      {resumeData.prof_sub_date2 || "2020 - 2022"}
                    </div>
                  </div>
                  <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                    {resumeData.prof_sub_desc2 || "Professional experience description."}
                  </p>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 slide-animate slide-right ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="relative">
                <div className="absolute -left-8 top-0 w-4 h-4 bg-teal-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                <div className="ml-6">
                  <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                    <div>
                      <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>{resumeData.prof_sub_title3 || "Company"}</h3>
                      <p className='text-purple-600 dark:text-purple-400 font-medium'>{resumeData.prof_sub_role3 || "Position"}</p>
                    </div>
                    <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-semibold">
                      {resumeData.prof_sub_date3 || "2019 - 2020"}
                    </div>
                  </div>
                  <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                    {resumeData.prof_sub_desc3 || "Professional experience description."}
                  </p>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className={`text-center pt-6 fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.5s' }}>
              <button className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Download Resume</span>
                <span className="relative z-10 text-xl group-hover:translate-x-1 transition-transform duration-300">📄</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume