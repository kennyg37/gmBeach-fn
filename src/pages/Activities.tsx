import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, Users, MapPin, Star } from 'lucide-react';

const Activities: React.FC = () => {
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

  const activities = [
    {
      id: 1,
      name: "Gorilla Trekking",
      image: "/9.jpg",
      duration: "Full Day",
      groupSize: "8 people max",
      difficulty: "Moderate",
      price: "$1,500",
      rating: 5,
      description: "Experience the magic of meeting mountain gorillas in their natural habitat. This once-in-a-lifetime adventure takes you through Rwanda's pristine forests.",
      highlights: [
        "Professional guide and tracker",
        "Transportation to Volcanoes National Park",
        "Gorilla permit included",
        "Lunch and refreshments"
      ],
      category: "Wildlife"
    },
    {
      id: 2,
      name: "Cultural Village Tour",
      image: "/10.jpg",
      duration: "Half Day",
      groupSize: "12 people max",
      difficulty: "Easy",
      price: "$85",
      rating: 4.8,
      description: "Immerse yourself in authentic Rwandan culture through traditional dance, crafts, and storytelling with local communities.",
      highlights: [
        "Traditional dance performance",
        "Craft-making workshops",
        "Local cuisine tasting",
        "Cultural storytelling session"
      ],
      category: "Cultural"
    },
    {
      id: 3,
      name: "Lake Muhazi Boat Safari",
      image: "/3.jpg",
      duration: "3 Hours",
      groupSize: "15 people max",
      difficulty: "Easy",
      price: "$45",
      rating: 4.9,
      description: "Explore the pristine waters of Lake Muhazi while spotting diverse bird species and enjoying breathtaking sunset views.",
      highlights: [
        "Bird watching opportunities",
        "Sunset photography",
        "Professional boat captain",
        "Refreshments on board"
      ],
      category: "Water Sports"
    },
    {
      id: 4,
      name: "Kayaking Adventure",
      image: "/1.jpg",
      duration: "2 Hours",
      groupSize: "8 people max",
      difficulty: "Easy",
      price: "$35",
      rating: 4.7,
      description: "Paddle through calm waters and hidden coves of Lake Muhazi, perfect for beginners and experienced kayakers alike.",
      highlights: [
        "Professional instruction",
        "Safety equipment provided",
        "Scenic route planning",
        "Photography assistance"
      ],
      category: "Water Sports"
    },
    {
      id: 5,
      name: "Hiking & Nature Walks",
      image: "/2.jpg",
      duration: "4 Hours",
      groupSize: "10 people max",
      difficulty: "Moderate",
      price: "$55",
      rating: 4.6,
      description: "Discover Rwanda's diverse flora and fauna on guided nature walks through scenic trails around the resort.",
      highlights: [
        "Expert naturalist guide",
        "Wildlife spotting",
        "Medicinal plant education",
        "Scenic viewpoints"
      ],
      category: "Nature"
    },
    {
      id: 6,
      name: "Farm-to-Table Experience",
      image: "/8.jpg",
      duration: "5 Hours",
      groupSize: "6 people max",
      difficulty: "Easy",
      price: "$95",
      rating: 4.9,
      description: "Join our chef for a hands-on culinary journey from garden to plate, learning traditional cooking techniques.",
      highlights: [
        "Garden harvesting",
        "Cooking class with chef",
        "Traditional recipes",
        "Full meal included"
      ],
      category: "Culinary"
    }
  ];

  const categories = ["All", "Wildlife", "Cultural", "Water Sports", "Nature", "Culinary"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredActivities = activeCategory === "All" 
    ? activities 
    : activities.filter(activity => activity.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/9.jpg')" }}
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
            Adventures Await
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide leading-tight mb-8">
            FARM ACTIVITIES
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover Rwanda's natural wonders and rich culture through our curated experiences
          </p>
        </motion.div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Activities Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={activeCategory}
          >
            {filteredActivities.map((activity) => (
              <motion.div
                key={activity.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {activity.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                    {activity.price}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-medium text-gray-800">
                      {activity.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm text-gray-600">{activity.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {activity.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {activity.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {activity.groupSize}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {activity.difficulty}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {activity.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="w-1 h-1 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <motion.button
                      className="flex-1 bg-amber-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
                    </motion.button>
                    <motion.button
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Details
                    </motion.button>
                  </div>
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

export default Activities;