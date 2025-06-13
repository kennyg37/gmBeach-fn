import React from 'react';
import { motion } from 'framer-motion';

const Sections: React.FC = () => {
  // Animation variants for reusability
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

  return (
    <div className="font-sans">
      {/* Section 1: The Breeze */}
      <section className="relative bg-gradient-to-b from-teal-100 to-white py-16 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Image Composition: Overlapping Images with Parallax */}
            <div className="relative w-full lg:w-1/2">
              <motion.div
                className="absolute -top-10 -left-10 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-6"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/4.jpg"
                  alt="Lake Muhazi Breeze"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/1.jpg"
                  alt="Lush Greenery"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            {/* Text Content */}
            <motion.div className="w-full lg:w-1/2 space-y-6" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-teal-800">
                Feel the Breeze of Lake Muhazi
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Immerse yourself in the tranquil breeze of Lake Muhazi, surrounded by lush greenery. At Good Mood Beach Resort, nature’s serenity washes over you, offering a peaceful escape from the everyday hustle.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unwind with the soothing sounds of water and birdsong, and let the calm rejuvenate your soul.
              </p>
              <motion.a
                href="/booking"
                className="inline-block px-8 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Taste the Serenity
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        {/* Background Wave Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-teal-200 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              d="M0,0 C300,50 600,0 900,50 C1200,100 1440,50 1440,50 L1440,100 L0,100 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Section 2: Accommodation */}
      <section className="relative bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Image Composition: Intersecting Circular Images */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
              <motion.div
                className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl z-10"
                whileHover={{ scale: 1.1, zIndex: 20 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/5.jpg"
                  alt="Cozy Room"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute w-64 h-64 rounded-full overflow-hidden shadow-xl -ml-20 mt-20"
                whileHover={{ scale: 1.1, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/6.jpg"
                  alt="Luxury Suite"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            {/* Text Content */}
            <motion.div className="w-full lg:w-1/2 space-y-6" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-indigo-800">
                Luxurious Accommodations
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our accommodations at Good Mood Beach Resort are designed for comfort and elegance. From cozy lakeside cabins to spacious suites with panoramic views, every detail is crafted to enhance your stay.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Enjoy modern amenities, plush bedding, and private balconies overlooking Lake Muhazi, ensuring a restful and indulgent experience.
              </p>
              <motion.a
                href="/accommodations"
                className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Your Room
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        {/* Floating Decorative Dots */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-indigo-300 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-indigo-200 rounded-full animate-bounce-slow delay-200"></div>
      </section>

      {/* Section 3: Cuisine */}
      <section className="relative bg-gradient-to-r from-amber-100 to-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Image Composition: Polaroid-Style Gallery */}
            <div className="relative w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <motion.div
                className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg transform -rotate-12"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/9.jpg"
                  alt="Gourmet Dish"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg transform rotate-6"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/10.jpg"
                  alt="Fresh Salad"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg transform rotate-3 col-span-2"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/8.jpg"
                  alt="Local Cuisine"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            {/* Text Content */}
            <motion.div className="w-full lg:w-1/2 space-y-6" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-amber-800">
                Savor Exquisite Cuisine
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Delight your palate with the culinary creations at Good Mood Beach Resort. Our chefs craft dishes that blend local flavors with international flair, using fresh, seasonal ingredients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From lakeside dining to intimate candlelit dinners, every meal is an experience to savor.
              </p>
              <motion.a
                href="/dining"
                className="inline-block px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Menu
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sections;