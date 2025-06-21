import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/4.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Header */}
      <Header className="bg-white" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-screen px-6 text-center text-white">
        <motion.div
          className="max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="text-sm tracking-widest text-amber-300 uppercase font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Welcome to Good Mood, a luxury beach resort experience at Lake Muhazi
          </motion.p>
          
          <motion.h1
            className="text-4xl md:text-7xl font-light tracking-wide leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            GOOD MOOD BEACH RESORT
          </motion.h1>

          {/* Booking Form */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex flex-col">
                <label className="text-xs tracking-wider text-gray-300 mb-2">Check In</label>
                <input
                  type="date"
                  className="bg-transparent border border-white/30 px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-amber-300 min-w-[150px]"
                  defaultValue="2025-06-17"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs tracking-wider text-gray-300 mb-2">Check Out</label>
                <input
                  type="date"
                  className="bg-transparent border border-white/30 px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-amber-300 min-w-[150px]"
                  defaultValue="2025-06-18"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs tracking-wider text-gray-300 mb-2">Guests</label>
                <select className="bg-transparent border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-amber-300 min-w-[150px]">
                  <option value="1" className="text-gray-800">1 Adult, 0 Child</option>
                  <option value="2" className="text-gray-800">2 Adults, 0 Child</option>
                  <option value="3" className="text-gray-800">2 Adults, 1 Child</option>
                </select>
              </div>
              <button className="bg-transparent border border-white/30 px-8 py-3 text-white hover:bg-white hover:text-gray-800 transition-all duration-300 tracking-wider text-sm">
                Check Availability
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;