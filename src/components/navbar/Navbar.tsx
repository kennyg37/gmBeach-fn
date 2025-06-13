import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation variants
  const linkVariants = {
    hover: { scale: 1.1, color: '#f59e0b', transition: { duration: 0.3 } }, // Amber for hover
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut', staggerChildren: 0.1 },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative w-full flex justify-between items-center text-white py-2 md:py-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center justify-center cursor-pointer w-[40%] sm:w-[30%] md:w-[20%]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-lg sm:text-xl md:text-2xl font-pacifico text-teal-200">
          Good Mood <span className="text-amber-400">Beach Resort</span>
        </h1>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <div className="flex justify-center items-center gap-4 md:gap-6">
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative text-teal-100 text-sm md:text-base font-roboto"
              variants={linkVariants}
              whileHover="hover"
            >
              {item.name}
              <motion.span
                className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-amber-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Desktop Book Now Button */}
      <motion.div
        className="hidden md:block mr-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="#book-now"
          className="font-roboto text-teal-100 border border-teal-200 py-1 px-3 md:px-4 text-sm md:text-base rounded-full hover:bg-amber-400 hover:text-teal-900 hover:border-amber-400 transition duration-300 ease-in-out"
        >
          Book Your Stay
        </a>
      </motion.div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center mr-4">
        <button
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-teal-100" />
          ) : (
            <Menu className="w-5 h-5 text-teal-100" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-teal-900/95 backdrop-blur-sm text-white flex flex-col items-center justify-center gap-6 py-6 z-50`}
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isMobileMenuOpen ? 'visible' : 'hidden'}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4"
          aria-label="Close mobile menu"
        >
          <X className="w-6 h-6 text-teal-100" />
        </button>
        {menuItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="text-xl font-roboto text-teal-100 hover:text-amber-400"
            onClick={toggleMobileMenu}
            variants={mobileLinkVariants}
          >
            {item.name}
          </motion.a>
        ))}
        <motion.a
          href="#book-now"
          className="font-roboto text-teal-100 border border-teal-200 py-2 px-5 rounded-full hover:bg-amber-400 hover:text-teal-900 hover:border-amber-400 text-lg"
          onClick={toggleMobileMenu}
          variants={mobileLinkVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Your Stay
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;