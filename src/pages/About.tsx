import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Heart, Leaf } from 'lucide-react';

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
      description: "We believe in creating memorable experiences through genuine care and attention to detail."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "Our commitment to preserving Lake Muhazi's natural beauty for future generations."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Supporting local communities and celebrating Rwandan culture and traditions."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Delivering world-class service and maintaining the highest standards in everything we do."
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
                <p className="text-sm tracking-widest text-amber-500 uppercase font-light mb-4">
                  Since 2020
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight mb-6">
                  A Vision Born from Love for Rwanda
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Good Mood Beach Resort was born from a deep appreciation for Rwanda's natural beauty 
                  and a vision to create an extraordinary lakeside sanctuary. Nestled on the pristine 
                  shores of Lake Muhazi, our resort represents the perfect harmony between luxury and nature.
                </p>
                
                <p>
                  Our founders, inspired by the breathtaking landscapes and warm hospitality of Rwanda, 
                  envisioned a place where guests could disconnect from the world and reconnect with 
                  themselves, their loved ones, and the stunning environment that surrounds us.
                </p>
                
                <p>
                  Today, we stand as Rwanda's premier lakeside destination, offering world-class 
                  accommodations, exceptional dining experiences, and unforgettable adventures, 
                  all while maintaining our commitment to sustainability and community support.
                </p>
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
              Our Values
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
              What Drives Us Forward
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-widest text-amber-500 uppercase font-light mb-4">
              Meet Our Team
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
              The People Behind the Magic
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Jean Baptiste Uwimana",
                role: "General Manager",
                image: "/5.jpg",
                description: "With over 15 years in hospitality, Jean Baptiste ensures every guest experience exceeds expectations."
              },
              {
                name: "Marie Claire Mukamana",
                role: "Head Chef",
                image: "/6.jpg",
                description: "Marie Claire brings authentic Rwandan flavors to life with her innovative farm-to-table approach."
              },
              {
                name: "David Nkurunziza",
                role: "Activities Director",
                image: "/7.jpg",
                description: "David curates unforgettable adventures and cultural experiences around Lake Muhazi."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-amber-500 font-light mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
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