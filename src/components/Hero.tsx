import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, RESORT_NAME, RESORT_LOCATION, RESORT_DESCRIPTION } from '../constants/constants';

const Hero: React.FC = () => {
  // Create WhatsApp URL with pre-filled message
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  
  // Create email URL with subject and body
  const emailUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Inquiry about ${RESORT_NAME}`)}&body=${encodeURIComponent(`Hello,\n\nI'm interested in learning more about ${RESORT_NAME} at ${RESORT_LOCATION}.\n\nPlease provide information about:\n- Availability and rates\n- Amenities and activities\n- Booking process\n\nThank you!`)}`;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/1.jpg')",
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
              {RESORT_DESCRIPTION}
            </motion.p>
          </div>

          {/* Contact Us Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <motion.h3 
              className="text-2xl font-light text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Contact Us
            </motion.h3>
            
            <motion.div 
              className="flex justify-center items-center gap-8 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {/* Email Icon */}
              <motion.a
                href={emailUrl}
                className="group relative p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                title="Send us an email"
              >
                <svg 
                  className="w-8 h-8 text-white group-hover:text-amber-300 transition-colors duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Email Us
                </span>
              </motion.a>

              {/* WhatsApp Icon */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                title="Chat with us on WhatsApp"
              >
                <svg 
                  className="w-8 h-8 text-white group-hover:text-green-400 transition-colors duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  WhatsApp
                </span>
              </motion.a>
            </motion.div>

            <motion.p 
              className="text-gray-300 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              Get in touch for reservations and inquiries
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;