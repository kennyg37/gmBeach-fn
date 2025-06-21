import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'ACCOMMODATION', href: '/accommodation' },
    { name: 'FARM ACTIVITIES', href: '/activities' },
    { name: 'FARM TO FORK', href: '/dining' },
    { name: 'WELLNESS', href: '/wellness' },
    { name: 'OUR STORY', href: '/about' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'BOOKING', href: '/booking' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.div
      className="relative w-full flex justify-between items-center text-gray-800 py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div
        className="flex flex-col items-start cursor-pointer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-xl md:text-2xl font-light tracking-wider text-gray-800 uppercase">
          Good Mood
        </h1>
        <span className="text-xs tracking-widest text-gray-600 uppercase">Beach Resort</span>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-1 items-center justify-center">
        <div className="flex justify-center items-center gap-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`relative text-xs font-medium tracking-wider text-gray-700 hover:text-gray-900 transition-colors ${
                index === 0 ? 'border-b-2 border-gray-800 pb-1' : ''
              }`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="hidden lg:flex items-center gap-4">
        <Search className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
        <ShoppingBag className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white text-gray-800 flex flex-col items-center justify-center gap-6 py-6 z-50`}
        variants={{
          hidden: { opacity: 0, y: '-100%' },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeInOut', staggerChildren: 0.1 },
          },
        }}
        initial="hidden"
        animate={isMobileMenuOpen ? 'visible' : 'hidden'}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-6 right-6"
          aria-label="Close mobile menu"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
        {menuItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="text-sm font-medium tracking-wider text-gray-700 hover:text-gray-900"
            onClick={toggleMobileMenu}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {item.name}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;