import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './navbar/Navbar';

const Header: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ${className} ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar isScrolled={isScrolled} />
    </motion.header>
  );
};

export default Header;