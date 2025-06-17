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
    { name: 'Accommodations', url: '/accommodations' },
    { name: 'Dining', url: '/dining' },
    { name: 'Activities', url: '/activities' },
    { name: 'Booking', url: '/booking' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <footer className="relative bg-gray-900 text-white py-16">
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
            <div className="flex flex-col">
              <h3 className="text-xl font-light tracking-wider text-white uppercase mb-2">
                Good Mood
              </h3>
              <span className="text-xs tracking-widest text-gray-400 uppercase">Beach Resort</span>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="font-medium">Address:</span> Good Mood Beach Resort, Lake Muhazi, Rwanda
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-medium">Phone:</span> +250 788 123 456
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-medium">Email:</span> info@goodmoodresort.com
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${link.name}`}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-xl">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Mini Contact Form */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-lg font-light tracking-wider text-white uppercase">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
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
                  className="w-full p-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
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
                  className="w-full p-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  aria-label="Message"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full p-3 border border-gray-600 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wider text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
              {formStatus && (
                <motion.p
                  className={`text-sm ${
                    formStatus.includes('success') ? 'text-green-400' : 'text-red-400'
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
            <h3 className="text-lg font-light tracking-wider text-white uppercase">Explore</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm tracking-wide"
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
          className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400"
          variants={fadeInUp}
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Good Mood Beach Resort. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            Designed with care by the Good Mood Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;