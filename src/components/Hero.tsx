import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import BookingWidget from './BookingWidget';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

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

            <motion.p
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Experience the perfect harmony of luxury and nature on the pristine shores of Lake Muhazi, Rwanda
            </motion.p>
          </div>

          {/* Enhanced Booking Widget */}
          <BookingWidget />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors group"
            whileHover={{ y: -2 }}
          >
            <span className="text-sm tracking-wider mb-2">Discover More</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;