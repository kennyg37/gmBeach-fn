import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Search} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Accommodation', href: '/accommodation' },
    { name: 'Experiences', href: '/activities' },
    { name: 'Dining', href: '/dining' },
    { name: 'Our Story', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Events', href: '/events' },
  ];

  // Extended search index with keywords covering various parts of the application
  const searchIndex: { name: string; href: string; keywords: string[] }[] = [
    { name: 'Home', href: '/', keywords: ['home', 'landing', 'resort', 'beach', 'good mood'] },
    { name: 'Accommodation', href: '/accommodation', keywords: ['rooms', 'stay', 'sleep', 'bed', 'accomodation', 'accommodation'] },
    { name: 'Experiences', href: '/activities', keywords: ['activities', 'experience', 'things to do', 'pool', 'swim', 'swimming', 'tennis', 'basketball', 'volleyball', 'hiking', 'walk', 'fishing', 'boat', 'garden', 'birds', 'games'] },
    { name: 'Dining', href: '/dining', keywords: ['food', 'restaurant', 'dining', 'cuisine', 'bar', 'drinks', 'cocktails'] },
    { name: 'Wellness', href: '/wellness', keywords: ['spa', 'wellness', 'relax', 'massage', 'health'] },
    { name: 'Our Story', href: '/about', keywords: ['about', 'story', 'history'] },
    { name: 'Gallery', href: '/gallery', keywords: ['photos', 'images', 'pictures', 'gallery'] },
    { name: 'Events', href: '/events', keywords: ['events', 'wedding', 'workshops', 'party', 'conference', 'celebration'] },
    { name: 'Contact', href: '/contact', keywords: ['contact', 'reach us', 'call', 'email', 'map', 'location'] },
    { name: 'Booking', href: '/booking', keywords: ['book', 'reservation', 'availability', 'dates'] },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const filteredItems = searchIndex.filter((item) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      item.name.toLowerCase().includes(q) ||
      item.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = filteredItems[0] ?? searchIndex[0];
    if (target) {
      navigate(target.href);
      closeSearch();
    }
  };

  // Helper to check if a menu item is active
  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
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
        <img 
          src="/logo.png" 
          alt="Good Mood Beach Resort" 
          className="h-10 md:h-18 w-auto object-contain"
        />
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-1 items-center justify-center">
        <div className="flex justify-center items-center gap-8">
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`relative font-medium tracking-wider text-gray-700 hover:text-gray-900 transition-colors ${
                isActive(item.href) ? 'border-b-2 border-gray-800 pb-1' : ''
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
        <button aria-label="Open search" onClick={openSearch}>
          <Search className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
        </button>
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
            className={`text-sm font-medium tracking-wider text-gray-700 hover:text-gray-900 ${
              isActive(item.href) ? 'border-b-2 border-gray-800 pb-1' : ''
            }`}
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

      {/* Search Overlay */}
      {isSearchOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/40" onClick={closeSearch} />
          <motion.div
            className="relative w-full max-w-xl mx-4 bg-white rounded-lg shadow-lg border border-gray-200"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="p-4 border-b border-gray-200 flex items-center gap-3">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages..."
                className="w-full outline-none text-gray-800 placeholder:text-gray-400"
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    closeSearch();
                  }
                }}
              />
              <button type="button" aria-label="Close search" onClick={closeSearch}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </form>
            <div className="max-h-80 overflow-y-auto">
              {filteredItems.length === 0 ? (
                <div className="p-4 text-sm text-gray-500">No matches</div>
              ) : (
                <ul className="py-2">
                  {filteredItems.map((item) => (
                    <li key={item.name}>
                      <button
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center justify-between ${
                          isActive(item.href) ? 'bg-gray-50' : ''
                        }`}
                        onClick={() => {
                          navigate(item.href);
                          closeSearch();
                        }}
                      >
                        <span className="text-gray-800">{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;