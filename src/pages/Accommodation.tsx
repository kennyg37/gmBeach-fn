import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wifi, Car, Coffee, Waves, Users, Bed } from 'lucide-react';

const Accommodation: React.FC = () => {
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

  const accommodations = [
    {
      id: 1,
      name: "Luxury Suites",
      image: "/5.jpg",
      price: "$250",
      capacity: "2-4 Guests",
      size: "65 m²",
      description: "Elegantly appointed suites with panoramic lake views, featuring modern amenities and private balconies.",
      amenities: ["Lake View", "Private Balcony", "King Bed", "Mini Bar", "Free WiFi", "Room Service"],
      features: [
        "Spacious living area with lake-facing windows",
        "Marble bathroom with rain shower",
        "Premium bedding and linens",
        "24/7 concierge service"
      ]
    },
    {
      id: 2,
      name: "Private Lakehouse",
      image: "/6.jpg",
      price: "$450",
      capacity: "4-6 Guests",
      size: "120 m²",
      description: "Exclusive lakefront accommodation with direct water access, perfect for families or groups seeking privacy.",
      amenities: ["Private Beach", "Full Kitchen", "2 Bedrooms", "Living Room", "Boat Access", "BBQ Area"],
      features: [
        "Direct lake access with private dock",
        "Fully equipped kitchen and dining area",
        "Separate bedrooms with en-suite bathrooms",
        "Private outdoor terrace with lake views"
      ]
    },
    {
      id: 3,
      name: "Cozy Cottage",
      image: "/7.jpg",
      price: "$180",
      capacity: "2 Guests",
      size: "45 m²",
      description: "Intimate cottage nestled among gardens, offering a peaceful retreat with authentic Rwandan charm.",
      amenities: ["Garden View", "Fireplace", "Queen Bed", "Kitchenette", "Private Patio", "Nature Walks"],
      features: [
        "Traditional Rwandan architecture with modern comfort",
        "Surrounded by lush tropical gardens",
        "Cozy fireplace for cool evenings",
        "Private patio with garden seating"
      ]
    }
  ];

  const commonAmenities = [
    { icon: <Wifi className="w-6 h-6" />, name: "Free WiFi" },
    { icon: <Car className="w-6 h-6" />, name: "Free Parking" },
    { icon: <Coffee className="w-6 h-6" />, name: "Daily Breakfast" },
    { icon: <Waves className="w-6 h-6" />, name: "Lake Access" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/5.jpg')" }}
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
            Luxury Accommodations
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide leading-tight mb-8">
            WHERE COMFORT MEETS ELEGANCE
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Choose from our carefully curated selection of lakeside accommodations
          </p>
        </motion.div>
      </section>

      {/* Common Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              Included with Every Stay
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {commonAmenities.map((amenity, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
                variants={fadeInUp}
              >
                <div className="text-amber-500 mb-4 flex justify-center">
                  {amenity.icon}
                </div>
                <p className="text-gray-700 font-medium">{amenity.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-widest text-amber-500 uppercase font-light mb-4">
              Our Accommodations
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
              Find Your Perfect Stay
            </h2>
          </motion.div>

          <div className="space-y-20">
            {accommodations.map((accommodation, index) => (
              <motion.div
                key={accommodation.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={accommodation.image}
                    alt={accommodation.name}
                    className="w-full h-96 object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute top-6 right-6 bg-amber-500 text-white px-4 py-2 rounded-lg">
                    <span className="text-lg font-medium">{accommodation.price}</span>
                    <span className="text-sm">/night</span>
                  </div>
                </motion.div>

                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  variants={fadeInUp}
                >
                  <div>
                    <h3 className="text-3xl font-light text-gray-800 mb-4">
                      {accommodation.name}
                    </h3>
                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {accommodation.capacity}
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4" />
                        {accommodation.size}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {accommodation.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {accommodation.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {accommodation.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      className="bg-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                    <motion.button
                      className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accommodation;