import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, Users, Utensils, Leaf } from 'lucide-react';

const Dining: React.FC = () => {
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

  const restaurants = [
    {
      id: 1,
      name: "Restaurant",
      image: "/8.jpg",
      cuisine: "Full-service Dining",
      hours: "6:00 AM - 10:00 PM",
      capacity: "80 guests",
      priceRange: "-",
      description: "Full-service dining with lakefront ambiance.",
      specialties: [],
      features: ["Lakefront Ambiance"]
    },
    {
      id: 2,
      name: "Bar",
      image: "/6.jpg",
      cuisine: "Cocktails, Local Beers, Fine Wines",
      hours: "4:00 PM - 12:00 AM",
      capacity: "40 guests",
      priceRange: "-",
      description: "Sip refreshing cocktails, local beers, and fine wines.",
      specialties: [],
      features: ["Refreshing Cocktails", "Local Beers", "Fine Wines"]
    },
    {
      id: 3,
      name: "Modern Kitchen",
      image: "/3.jpg",
      cuisine: "Open Concept Kitchen",
      hours: "6:00 AM - 10:00 PM",
      capacity: "-",
      priceRange: "-",
      description: "Clean, open concept kitchen for fresh, visible cooking.",
      specialties: [],
      features: ["Open Concept", "Fresh Cooking"]
    },
    {
      id: 4,
      name: "BBQ Experience",
      image: "/4.jpg",
      cuisine: "BBQ",
      hours: "On Request",
      capacity: "-",
      priceRange: "-",
      description: "BBQ Experience with local specialties.",
      specialties: [
        "Fresh Fish from Lake Muhazi",
        "Traditional Rwandan Chicken",
        "Oven-Roasted Whole Goat (on request)"
      ],
      features: ["BBQ", "Local Specialties"]
    }
  ];

  const menuHighlights = [
    {
      category: "Breakfast",
      items: [
        { name: "Rwandan Coffee Experience", price: "$12", description: "Locally roasted coffee with traditional preparation" },
        { name: "Garden Fresh Omelet", price: "$15", description: "Eggs with herbs and vegetables from our garden" },
        { name: "Tropical Fruit Bowl", price: "$10", description: "Seasonal fruits with honey and yogurt" }
      ]
    },
    {
      category: "Lunch",
      items: [
        { name: "Lake Muhazi Fish", price: "$28", description: "Fresh catch grilled with local spices" },
        { name: "Organic Vegetable Curry", price: "$22", description: "Seasonal vegetables in aromatic curry sauce" },
        { name: "Traditional Ugali", price: "$18", description: "Served with beef stew and vegetables" }
      ]
    },
    {
      category: "Dinner",
      items: [
        { name: "Chef's Tasting Menu", price: "$65", description: "5-course journey through Rwandan flavors" },
        { name: "Grilled Beef Tenderloin", price: "$35", description: "With roasted vegetables and red wine sauce" },
        { name: "Vegetarian Feast", price: "$30", description: "Plant-based dishes celebrating local produce" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/8.jpg')" }}
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
            Culinary Excellence
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide leading-tight mb-8">
          Fresh Flavors. Local Taste. Global Standards.
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Enjoy a culinary journey with freshly prepared meals inspired by local ingredients and international flair.
          </p>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
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
                  Our Philosophy
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight mb-6">
                  From Garden to Plate
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  At Good Mood Beach Resort, we believe that exceptional dining begins with exceptional ingredients. 
                  Our farm-to-table approach ensures that 95% of what graces your plate is grown, nurtured, 
                  and harvested right here on our property.
                </p>
                
                <p>
                  Our gardens flourish with organic vegetables, herbs, and fruits, while our free-range animals 
                  roam happily across our grounds. Even the honey in your morning tea comes from our own beehives, 
                  creating a truly authentic and sustainable dining experience.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-light text-amber-500 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Ingredients from our farm</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-light text-amber-500 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Organic produce</div>
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
                src="/8.jpg"
                alt="Farm to Table"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-400 rounded-lg flex items-center justify-center">
                <Leaf className="w-12 h-12 text-gray-800" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Restaurants Section */}
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
              Dining Venues
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
              Where Every Meal is an Experience
            </h2>
          </motion.div>

          <div className="space-y-20">
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
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
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-96 object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute top-6 right-6 bg-amber-500 text-white px-4 py-2 rounded-lg">
                    <span className="text-sm font-medium">{restaurant.priceRange}</span>
                  </div>
                </motion.div>

                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  variants={fadeInUp}
                >
                  <div>
                    <h3 className="text-3xl font-light text-gray-800 mb-2">
                      {restaurant.name}
                    </h3>
                    <p className="text-amber-500 font-medium mb-4">{restaurant.cuisine}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {restaurant.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <div>
                        <div className="font-medium">Hours</div>
                        <div>{restaurant.hours}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <div>
                        <div className="font-medium">Capacity</div>
                        <div>{restaurant.capacity}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4" />
                      <div>
                        <div className="font-medium">Cuisine</div>
                        <div>{restaurant.cuisine}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Signature Dishes</h4>
                    <ul className="space-y-2">
                      {restaurant.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    className="bg-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Make Reservation
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
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
              Menu Highlights
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
              Taste the Difference
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {menuHighlights.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg"
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-light text-gray-800 mb-6 text-center border-b border-amber-200 pb-4">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <span className="text-amber-500 font-medium">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dining;