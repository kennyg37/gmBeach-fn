import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, Droplets, Heart } from 'lucide-react';

const Wellness: React.FC = () => {
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

  const treatments = [
    {
      id: 1,
      name: "Lakeside Massage",
      image: "/2.jpg",
      duration: "90 minutes",
      price: "$120",
      description: "Relax with a therapeutic massage while listening to the gentle sounds of Lake Muhazi, using locally sourced essential oils.",
      benefits: ["Stress Relief", "Muscle Relaxation", "Improved Circulation", "Mental Clarity"]
    },
    {
      id: 2,
      name: "Rwandan Clay Facial",
      image: "/1.jpg",
      duration: "60 minutes",
      price: "$85",
      description: "Rejuvenate your skin with mineral-rich clay sourced from Rwanda's volcanic soil, combined with organic botanicals.",
      benefits: ["Deep Cleansing", "Skin Purification", "Natural Glow", "Anti-Aging"]
    },
    {
      id: 3,
      name: "Couples Retreat",
      image: "/6.jpg",
      duration: "120 minutes",
      price: "$220",
      description: "Share a romantic wellness experience with your partner in our private lakeside pavilion with synchronized treatments.",
      benefits: ["Bonding Experience", "Relaxation", "Romance", "Shared Memories"]
    },
    {
      id: 4,
      name: "Meditation by the Lake",
      image: "/3.jpg",
      duration: "45 minutes",
      price: "$45",
      description: "Find inner peace through guided meditation sessions at sunrise or sunset by the tranquil waters of Lake Muhazi.",
      benefits: ["Mental Peace", "Stress Reduction", "Mindfulness", "Spiritual Connection"]
    }
  ];

  const facilities = [
    {
      name: "Lakeside Spa Pavilion",
      description: "Open-air treatment rooms with panoramic lake views",
      features: ["Natural Ventilation", "Lake Views", "Private Spaces", "Organic Products"]
    },
    {
      name: "Meditation Garden",
      description: "Peaceful garden space designed for reflection and mindfulness",
      features: ["Zen Design", "Water Features", "Quiet Zones", "Natural Setting"]
    },
    {
      name: "Yoga Deck",
      description: "Floating deck over the lake for sunrise and sunset yoga sessions",
      features: ["Lake Views", "Professional Instruction", "All Levels", "Equipment Provided"]
    },
    {
      name: "Wellness Library",
      description: "Quiet reading space with books on wellness, mindfulness, and local culture",
      features: ["Curated Collection", "Comfortable Seating", "Lake Views", "Peaceful Atmosphere"]
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
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-sm tracking-widest text-amber-300 uppercase font-light mb-4">
            Rejuvenate Your Spirit
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide leading-tight mb-8">
            WELLNESS SANCTUARY
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Restore balance and harmony through our holistic wellness experiences
          </p>
        </motion.div>
      </section>

      {/* Philosophy Section */}
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
                  Our Approach
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight mb-6">
                  Holistic Wellness by the Lake
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our wellness philosophy embraces the healing power of nature, combining traditional 
                  Rwandan wellness practices with modern therapeutic techniques. Set against the 
                  serene backdrop of Lake Muhazi, our treatments are designed to restore balance 
                  to mind, body, and spirit.
                </p>
                
                <p>
                  We believe that true wellness comes from connecting with nature and ourselves. 
                  Our treatments use locally sourced, organic ingredients and are performed in 
                  spaces that celebrate the natural beauty of our lakeside location.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Heart className="w-8 h-8 text-amber-500" />
                  <div>
                    <div className="font-medium text-gray-800">Holistic Care</div>
                    <div className="text-sm text-gray-600">Mind, body & spirit</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Droplets className="w-8 h-8 text-amber-500" />
                  <div>
                    <div className="font-medium text-gray-800">Natural Products</div>
                    <div className="text-sm text-gray-600">Locally sourced</div>
                  </div>
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
                alt="Wellness Experience"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
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
              Signature Treatments
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
              Restore & Rejuvenate
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {treatments.map((treatment) => (
              <motion.div
                key={treatment.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-lg">
                    <span className="text-lg font-medium">{treatment.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-medium text-gray-800">
                      {treatment.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {treatment.duration}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {treatment.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {treatment.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-amber-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-600 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Treatment
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
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
              Wellness Facilities
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
              Spaces for Serenity
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-50 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  {facility.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {facility.description}
                </p>
                <div className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wellness Packages */}
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
              Wellness Packages
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
              Complete Wellness Experiences
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Half-Day Retreat",
                duration: "4 hours",
                price: "$180",
                includes: ["60-min Massage", "Meditation Session", "Healthy Lunch", "Lake Access"]
              },
              {
                name: "Full-Day Wellness",
                duration: "8 hours",
                price: "$320",
                includes: ["90-min Massage", "Facial Treatment", "Yoga Session", "All Meals", "Meditation"]
              },
              {
                name: "Weekend Escape",
                duration: "2 days",
                price: "$580",
                includes: ["Multiple Treatments", "All Meals", "Accommodation", "Activities", "Personal Consultation"]
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-light text-gray-800 mb-2">{pkg.name}</h3>
                <div className="text-amber-500 text-3xl font-light mb-2">{pkg.price}</div>
                <div className="text-sm text-gray-600 mb-6">{pkg.duration}</div>
                <div className="space-y-3 mb-8">
                  {pkg.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      {item}
                    </div>
                  ))}
                </div>
                <motion.button
                  className="w-full bg-amber-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Package
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wellness;