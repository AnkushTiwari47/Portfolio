import React from 'react';
import stackImage from '../assets/about/myImage.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => ( <div className="flex flex-col items-center gap-2"> <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" > {/* Python Logo */} <path fill="#3776AB" d="M64 10c-28 0-26 12-26 12v18h27v5H28S8 43 8 70s18 26 18 26h11V79s-1-17 17-17h28s16 0 16-16V28S98 10 64 10z" /> <path fill="#FFD343" d="M64 118c28 0 26-12 26-12V88H63v-5h37s20 2 20-25-18-26-18-26H91v17s1 17-17 17H46s-16 0-16 16v18s8 18 34 18z" /> {/* Eyes */} <circle cx="51" cy="27" r="4" fill="white" /> <circle cx="77" cy="101" r="4" fill="white" /> </svg> <span className="text-xs font-bold text-white/70 uppercase tracking-wider"> Python </span> </div> ); 
const DsaCppIcon = () => ( <div className="flex flex-col items-center gap-2"> <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" > {/* C++ Circle */} <circle cx="64" cy="64" r="55" fill="#00599C" /> {/* C */} <text x="34" y="82" fill="white" fontSize="48" fontWeight="bold" fontFamily="Arial" > C </text> {/* ++ */} <text x="70" y="58" fill="white" fontSize="20" fontWeight="bold" fontFamily="Arial" > ++ </text> <text x="70" y="82" fill="white" fontSize="20" fontWeight="bold" fontFamily="Arial" > ++ </text> </svg> <span className="text-xs font-bold text-white/70 uppercase tracking-wider"> DSA C++ </span> </div> );

const MernIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      {/* Central React Atom */}
      <g stroke="#00d8ff" strokeWidth="4.5" fill="none" transform="translate(10, 10)">
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(30 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(90 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(150 54 54)" />
        <circle cx="54" cy="54" r="7" fill="#00d8ff" />
      </g>
      {/* MongoDB Leaf overlap overlay in bottom left */}
      <path fill="#439934" d="M36 84c-3-6-4-15 0-22 3 7 9 10 10 15 2 1.5 1 3-2 5l-8 2zm4-25c2 4 4 11 0 16-1-5-6-8-7-12-2-1-1-3 2-4l5 0z" opacity="0.9" />
      {/* Node.js Hexagon in top right */}
      <path fill="#339933" d="M98 32l-12-7-12 7v14l12 7 12-7V32zm-12 1.5l8 4.6v9.3l-8 4.6-8-4.6v-9.3l8-4.6z" opacity="0.9" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">MERN Stack</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Md Yusuf — Full Stack & Java Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <JavaIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <SpringBootIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MernIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
