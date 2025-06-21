import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import BookingWidget from './BookingWidget';

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
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-6 text-center text-white pt-20">
        <motion.div
          className="max-w-6xl space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="space-y-8">
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
          </div>

          {/* Enhanced Booking Widget */}
          <BookingWidget />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;