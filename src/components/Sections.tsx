import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Users, Award } from 'lucide-react';

const Sections: React.FC = () => {
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

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Luxury",
      description: "95% of our ingredients come from our own organic gardens and farms"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cultural Immersion",
      description: "Authentic Rwandan experiences with local communities"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "World-Class Service",
      description: "Personalized attention and exceptional hospitality"
    }
  ];

  return (
    <div className="font-sans">
      {/* Section 1: Unique Accommodations */}
      <section className="relative bg-gray-900 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-widest text-amber-300 uppercase font-light mb-4">
              Unique Accommodations
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              nestled among the shores of Lake Muhazi
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Suites */}
            <motion.div
              className="relative group cursor-pointer"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img
                  src="/5.jpg"
                  alt="Luxury Suites"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-light text-white">Suites</h3>
                  <p className="text-amber-300 text-sm mt-2">From $250/night</p>
                </div>
              </div>
            </motion.div>

            {/* Private Lakehouse */}
            <motion.div
              className="relative group cursor-pointer"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img
                  src="/6.jpg"
                  alt="Private Lakehouse"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-light text-white">Private Lakehouse</h3>
                  <p className="text-amber-300 text-sm mt-2">From $450/night</p>
                </div>
              </div>
            </motion.div>

            {/* Cottage */}
            <motion.div
              className="relative group cursor-pointer"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img
                  src="/7.jpg"
                  alt="Cottage"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-light text-white">Cottage</h3>
                  <p className="text-amber-300 text-sm mt-2">From $180/night</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Bon Appetit */}
      <section className="relative bg-gray-700 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="relative w-full lg:w-1/2">
              <motion.div
                className="relative h-96 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/8.jpg"
                  alt="Fresh Local Cuisine"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Text Content */}
            <motion.div className="w-full lg:w-1/2 space-y-8" variants={fadeInUp}>
              <p className="text-sm tracking-widest text-amber-300 uppercase font-light">
                Bon Appétit during vacations and trips
              </p>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Experience organic food with exclusively hand-picked crops from our own gardens
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Good Mood Beach Resort, the table is at the lake, which means that 95% of what our Chef uses in his cuisine is grown, nurtured, and produced on the resort. There are vegetable and herb gardens galore, and chickens, cows, horses, pigs, and turkeys wander wonderfully organically free. Even the honey served in your tea is harvested by our bees.
              </p>
              <motion.button
                className="inline-flex items-center gap-2 border border-white/30 px-8 py-3 text-white hover:bg-white hover:text-gray-700 transition-all duration-300 tracking-wider text-sm rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Cuisine
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Tours & Activities */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-widest text-amber-300 uppercase font-light mb-4">
              Tours & Activities
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Discover Rwanda
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              You are in a country where people are never bored. Immerse yourself in local art 
              exhibitions, visit local schools or trek mountain gorillas in their natural habitat.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Gorilla Trekking */}
            <motion.div
              className="relative group cursor-pointer"
              variants={fadeInUp}
            >
              <div className="relative h-80 overflow-hidden rounded-lg">
                <img
                  src="/9.jpg"
                  alt="Wildlife Experience"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-amber-500 text-white px-3 py-1 text-xs tracking-wider font-medium rounded-full">
                    RECOMMENDED
                  </span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-medium text-white">Gorilla Trekking</h3>
                  <p className="text-amber-300 text-sm mt-1">From $1,500</p>
                </div>
              </div>
            </motion.div>

            {/* Cultural Activities */}
            <motion.div
              className="relative group cursor-pointer"
              variants={fadeInUp}
            >
              <div className="relative h-80 overflow-hidden rounded-lg">
                <img
                  src="/10.jpg"
                  alt="Cultural Experience"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-medium text-white">Cultural Tours</h3>
                  <p className="text-amber-300 text-sm mt-1">From $85</p>
                </div>
              </div>
            </motion.div>

            {/* Lake Activities */}
            <motion.div
              className="relative group cursor-pointer"
              variants={fadeInUp}
            >
              <div className="relative h-80 overflow-hidden rounded-lg">
                <img
                  src="/3.jpg"
                  alt="Lake Activities"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-medium text-white">Lake Activities</h3>
                  <p className="text-amber-300 text-sm mt-1">From $35</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Activities
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Experience Excellence */}
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
              Why Choose Good Mood
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
              Experience Excellence
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-amber-500 mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 5: Connection & Well-Being */}
      <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Images */}
            <div className="relative w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="relative h-80 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/1.jpg"
                    alt="Lake Activities"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="relative h-80 overflow-hidden mt-8 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/2.jpg"
                    alt="Scenic Views"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Text Content */}
            <motion.div className="w-full lg:w-1/2 space-y-8" variants={fadeInUp}>
              <p className="text-sm tracking-widest text-amber-300 uppercase font-light">
                Stay right next to Lake Muhazi in Rwanda
              </p>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Connection, Well-Being, Education
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Good Mood Beach Resort, relaxation becomes an exciting adventure for everyone, 
                regardless of age. We hope you are ready to dive into the captivating world of 
                lakeside serenity and discover the unique beauty of our beloved Lake Muhazi.
              </p>
              <motion.button
                className="inline-flex items-center gap-2 border border-white/30 px-8 py-3 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wider text-sm rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                More about our Lake Activities
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sections;