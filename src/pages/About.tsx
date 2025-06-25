import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Heart, Leaf } from 'lucide-react';

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hospitality",
      description: "Every detail is designed to put you in a Good Mood, from the fresh breeze over Muhazi to our personalized service."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "We care deeply about local culture and sustainable living, ensuring our resort is a top getaway for years to come."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Unforgettable Experiences",
      description: "We are passionate about creating unique, memorable moments for every guest."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-sm tracking-widest text-amber-300 uppercase font-light mb-4">
            Our Story
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide leading-tight mb-8">
            GOOD MOOD BEACH RESORT
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Where luxury meets nature, and every moment becomes a cherished memory
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-8" variants={fadeInUp}>
              <div>
                <p className="text-2xl font-bold mb-4">The Spirit of GoodMood</p>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Born from a dream of peaceful lakeside living, GoodMood Resort was created as a space where comfort meets nature. We wanted to build more than a resort – a place where families, lovers, and friends can connect deeply, celebrate life, and reset their inner peace. From the fresh breeze over Muhazi to our personalized hospitality, every detail is designed to put you in a Good Mood.
                  </p>
                  <p>
                    Started as a family vision, today GoodMood is a community favorite and a top getaway destination. We're passionate about local culture, sustainable living, and unforgettable guest experiences.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/1.jpg"
                alt="Resort History"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-800">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs uppercase tracking-wider">Years</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-widest text-amber-500 uppercase font-light mb-4">
              Our Principles
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
              What Drives Us Forward
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-amber-500 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;