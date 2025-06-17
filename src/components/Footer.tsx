import React, { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }
    setFormStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  // Social media links
  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: 'https://facebook.com/goodmoodresort',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/goodmoodresort',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com/goodmoodresort',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/company/goodmoodresort',
    },
  ];

  // Quick links
  const quickLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Accommodations', url: '/accommodations' },
    { name: 'Dining', url: '/dining' },
    { name: 'Activities', url: '/activities' },
    { name: 'Booking', url: '/booking' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-teal-900 to-teal-700 text-white py-16 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Details */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-teal-200">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-teal-100">
                <span className="font-semibold">Address:</span> Good Mood Beach
                Resort, Lake Muhazi, Rwanda
              </p>
              <p className="text-teal-100">
                <span className="font-semibold">Phone:</span> +250 788 123 456
              </p>
              <p className="text-teal-100">
                <span className="font-semibold">Email:</span>{' '}
                info@goodmoodresort.com
              </p>
            </div>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${link.name}`}
                  className="text-teal-200 hover:text-teal-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-2xl">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Mini Contact Form */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-teal-200">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-teal-800 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  aria-label="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-teal-800 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  aria-label="Email"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-teal-800 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  aria-label="Message"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
              {formStatus && (
                <motion.p
                  className={`text-sm ${
                    formStatus.includes('success')
                      ? 'text-teal-200'
                      : 'text-red-300'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {formStatus}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-teal-200">Explore</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-teal-100 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-teal-600 text-center text-teal-200"
          variants={fadeInUp}
        >
          <p>
            &copy; {new Date().getFullYear()} Good Mood Beach Resort. All rights
            reserved.
          </p>
          <p className="mt-2 text-sm">
            Designed with{' '}
            <span className="text-red-400 animate-pulse">♥</span> by the Good Mood
            Team
          </p>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-teal-800 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,50 600,0 900,50 C1200,100 1440,50 1440,50 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 w-4 h-4 bg-teal-300 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-20 right-10 w-6 h-6 bg-teal-200 rounded-full animate-bounce-slow delay-200"></div>
    </footer>
  );
};

export default Footer;