import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Header from './Header';

const Hero: React.FC = () => {
  // Parallax effect
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 500], [0, 150]);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  // Social media links
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://facebook.com/goodmoodresort' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/goodmoodresort' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/goodmoodresort' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Parallax Background with Video/Image Fallback */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/4.jpg')",
          y: yBackground,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 hidden md:block"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-paradise-beach-4049-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/60 to-teal-700/30 z-10"></div>
      </motion.div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-center h-[80vh] md:h-screen px-6 md:px-16">
        <motion.div
          className="max-w-4xl text-white space-y-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h1
            className="text-4xl md:text-7xl font-pacifico leading-tight"
            variants={textVariants}
          >
            Discover Your <span className="text-amber-400">Paradise</span> <br /> at Lake Muhazi
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-roboto text-teal-100 max-w-2xl"
            variants={textVariants}
          >
            Escape to Good Mood Beach Resort, where serenity meets luxury. Unwind by the tranquil waters and create unforgettable memories.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="/gallery"
              className="font-roboto text-teal-900 bg-amber-400 py-3 px-6 rounded-full hover:bg-amber-500 transition duration-300 ease-in-out"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Explore Now
            </motion.a>
            <motion.a
              href="#book-now"
              className="font-roboto text-teal-100 border border-teal-200 py-3 px-6 rounded-full hover:bg-teal-600 hover:border-teal-600 transition duration-300 ease-in-out"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Book Your Stay
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative Images */}
        <div className="absolute top-1/4 right-10 hidden lg:block">
          <motion.div
            className="relative w-48 h-64 rounded-xl overflow-hidden shadow-2xl transform rotate-6"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/1.jpg"
              alt="Resort Room"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute w-48 h-64 rounded-xl overflow-hidden shadow-2xl -right-10 -top-10 transform -rotate-12"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <img
              src="/2.jpg"
              alt="Lake View"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Vertical Line and Text */}
        <motion.div
          className="absolute bottom-10 right-10 md:right-16 text-white max-w-md flex flex-row gap-4 items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="w-1 h-24 bg-amber-400"
            initial={{ height: 0 }}
            animate={{ height: '6rem' }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <div className="text-right">
            <p className="text-lg font-roboto font-semibold text-teal-100">
              Experience world-class accommodations with breathtaking views and unparalleled service.
            </p>
            <small className="text-sm text-teal-200">
              Your perfect getaway awaits at Good Mood Beach Resort.
            </small>
          </div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="absolute bottom-10 left-10 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${link.name}`}
              className="text-teal-200 hover:text-amber-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-2xl">{link.icon}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-teal-800/20">
        <svg className="w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,0 C300,50 600,0 900,50 C1200,100 1440,50 1440,50 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
