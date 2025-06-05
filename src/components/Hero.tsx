import React from 'react';
import Header from './Header';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/1.jpg')" }}>
      <Header className="text-white" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider uppercase font-['Playfair_Display'] text-shadow-md">
          Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-200">Good Mood</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl italic text-gray-200 mt-3 sm:mt-4 md:mt-5 tracking-wide font-light font-['Lato'] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          Escape to paradise at our luxurious beach resort, where sun, sea, and serenity await you.
        </p>
        <a
          href="#book-now"
          className="mt-6 sm:mt-8 px-5 sm:px-6 py-2 sm:py-3 bg-amber-500 text-white rounded-full font-semibold tracking-wide hover:bg-amber-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base"
        >
          Book Your Stay
        </a>
        <p className="mt-8 sm:mt-10 md:mt-12 text-xs sm:text-sm italic text-gray-300 font-['Lato']">with nature as our guide</p>
        <motion.div
          className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 animate-bounce"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-300">Scroll to explore more</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;