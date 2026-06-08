import React, { useEffect, useState, useRef } from 'react';
import '../css/contact.css'
import { contact } from '../data/contact'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_wjeiwo7',
      'template_7nd3hhd',
      form.current,
      'EcpyQr1l6t9w-V5BL'
    )

    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
    });
  };

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

  // Safely get contact data
  const contactData = contact && contact[0] ? contact[0] : null;

  // Social media platforms
  const socialPlatforms = ['facebook', 'twitter', 'instagram', 'linkedin', 'github'];

  return (
    <section 
      ref={sectionRef}
      className='p-6 md:p-12 lg:p-16 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'
    >
      <br/>
      <br/>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-100 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* Section Header */}
      <div className='text-center mb-12 max-w-3xl mx-auto relative z-10'>
        <div className={`inline-block slide-animate slide-down ${isVisible ? 'animate' : ''}`}>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
            {contactData?.title || "Get In Touch"}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-4 transform transition-all duration-500 hover:w-32"></div>
        </div>
        <p className={`text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.1s' }}>
  {contactData?.description || "I'd love to hear from you! Whether you have a project in mind, a question about my services, or just want to connect, feel free to reach out."}
        </p>
      </div>

      {/* Contact Content */}
      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
          
          {/* Left Side - Contact Information */}
          <div className='space-y-6'>
            {/* Address Card */}
            <div className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 slide-animate slide-left ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h2 className='text-xl font-bold text-gray-800 dark:text-white mb-2'>{contactData?.Address_title || "Address"}</h2>
                  <p className='text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line'>
                    {contactData?.Address_desc || "123 Design Street, Creative District\nNew York, NY 10001\nUnited States"}
                  </p>
                </div>
              </div>
            </div>

            {/* Call Us Card */}
            <div className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 slide-animate slide-left ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h2 className='text-xl font-bold text-gray-800 dark:text-white mb-2'>{contactData?.Call_Us_title || "Call Us"}</h2>
                  <p className='text-gray-600 dark:text-gray-300'>
                    <span className="font-semibold">Main:</span> {contactData?.Call_Us_phone || "+1 5589 55488 55"}<br />
                    <span className="font-semibold">Support:</span> {contactData?.Call_Us_phone || "+1 5589 55488 56"}<br />
                    <span className="font-semibold">Office:</span> {contactData?.Call_Us_phone || "+1 5589 55488 57"}
                  </p>
                </div>
              </div>
            </div>

            {/* Email Us Card */}
            <div className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 slide-animate slide-left ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h2 className='text-xl font-bold text-gray-800 dark:text-white mb-2'>{contactData?.Email_title || "Email Us"}</h2>
                  <p className='text-gray-600 dark:text-gray-300'>
                    <span className="font-semibold">General:</span> {contactData?.Email_address || "info@example.com"}<br />
                    <span className="font-semibold">Support:</span> {contactData?.Email_address || "support@example.com"}<br />
                    <span className="font-semibold">Sales:</span> {contactData?.Email_address || "sales@example.com"}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`flex gap-4 pt-4 fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.5s' }}>
              {socialPlatforms.map((social, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <span className="text-sm font-bold">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`slide-animate slide-right ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
              <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Send Me a Message
              </h2>
              
              <form className='space-y-6'  ref={form} onSubmit={sendEmail}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className="relative group">
                    <input 
                      type='text' 
                      placeholder='Your Name'
                      name="name"
                      className='w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all duration-300'
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type='email' 
                      placeholder='Your Email'
                      name="email"
                      className='w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all duration-300'
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="relative group">
                  <input 
                    type='text' 
                    placeholder='Subject'
                     name='subject'
                    className='w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all duration-300'
                    required
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <div className="relative group">
                  <textarea 
                    rows="5"
                    placeholder='Your Message'
                    name="message"
                    className='w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all duration-300 resize-none'
                    required
                  ></textarea>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <div className={`text-center fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.6s' }}>
                  <button 
                    type="submit"
                    className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="relative z-10">Send Message</span>
                    <span className="relative z-10 text-xl group-hover:translate-x-1 transition-transform duration-300">✉️</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>

                {/* Form note */}
                <p className='text-center text-sm text-gray-500 dark:text-gray-400 mt-4'>
                  I'll get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps iframe (Optional) */}
        <div className={`mt-12 fade-up ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.7s' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.713129379330165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb6b1b5%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1644262073895!5m2!1sen!2sus"
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact