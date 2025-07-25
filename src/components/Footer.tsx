import React, { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [, setFormStatus] = useState('');

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

  const quickLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Accommodations', url: '/accommodation' },
    { name: 'Dining', url: '/dining' },
    { name: 'Activities', url: '/activities' },
    { name: 'Wellness', url: '/wellness' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Contact', url: '/contact' },
    { name: 'Booking', url: '/booking' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>
      
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand & Contact Info */}
          <motion.div className="lg:col-span-1 space-y-6" variants={fadeInUp}>
            <div className="flex flex-col">
              <h3 className="text-2xl font-light tracking-wider text-white uppercase mb-2">
                Good Mood
              </h3>
              <span className="text-sm tracking-widest text-amber-300 uppercase mb-4">Beach Resort</span>
              <p className="text-gray-300 text-sm leading-relaxed">
                Experience luxury and tranquility at Rwanda's premier lakeside destination.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Address</p>
                  <p className="text-gray-300 text-sm">Good Mood Beach Resort<br />Lake Muhazi, Rwanda</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Phone</p>
                  <p className="text-gray-300 text-sm">+250 788 123 456</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Email</p>
                  <p className="text-gray-300 text-sm">info@goodmoodresort.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Reception Hours</p>
                  <p className="text-gray-300 text-sm">24/7 Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-lg font-medium tracking-wider text-white uppercase border-b border-amber-400 pb-2">
              Explore
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-amber-300 transition-colors text-sm tracking-wide flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-lg font-medium tracking-wider text-white uppercase border-b border-amber-400 pb-2">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Luxury Accommodations',
                'Fine Dining',
                'Spa & Wellness',
                'Water Sports',
                'Cultural Tours',
                'Event Hosting',
                'Airport Transfer',
                'Concierge Service'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm tracking-wide flex items-center gap-2">
                    <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-lg font-medium tracking-wider text-white uppercase border-b border-amber-400 pb-2">
              Stay Connected
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for exclusive offers and updates.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email address"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                />
                <motion.button
                  type="submit"
                  className="w-full p-3 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 rounded-lg font-medium hover:from-amber-500 hover:to-amber-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>

            <div className="space-y-4">
              <p className="text-white font-medium text-sm">Follow Us</p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${link.name}`}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-amber-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">{link.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-700"
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Good Mood Beach Resort. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-amber-300 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-amber-300 transition-colors">Terms of Service</a>
              <a href="/sitemap" className="hover:text-amber-300 transition-colors">Sitemap</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;