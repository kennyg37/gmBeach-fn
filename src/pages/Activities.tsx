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
    // Nature & Leisure
    {
      id: 1,
      name: "Bird Viewing",
      image: "/2.jpg",
      duration: "1 Hour",
      groupSize: "10 people max",
      difficulty: "Easy",
      price: "Included",
      rating: 4.8,
      description: "Observe a wide variety of exotic and native birds in their natural lakeside habitat.",
      highlights: [
        "over 200 species of birds",
        "Guided birdwatching walks",
        "Binoculars available"
      ],
      category: "Nature & Leisure"
    },
    {
      id: 2,
      name: "Zoo Botanic Walk",
      image: "/10.jpg",
      duration: "1 Hour",
      groupSize: "15 people max",
      difficulty: "Easy",
      price: "Included",
      rating: 4.7,
      description: "Stroll through our lush botanical space featuring local plant life and small animals (Monkeys) for a peaceful nature experience.",
      highlights: [
        "Botanical garden tour",
        "See monkeys and local flora"
      ],
      category: "Nature & Leisure"
    },
    {
      id: 3,
      name: "Fresh Fruit & Vegetable Garden Tour",
      image: "/8.jpg",
      duration: "45 Minutes",
      groupSize: "10 people max",
      difficulty: "Easy",
      price: "Included",
      rating: 4.6,
      description: "Visit our garden to see how we grow fresh, organic produce that ends up on your plate.",
      highlights: [
        "Organic gardening",
        "Farm-to-table experience"
      ],
      category: "Nature & Leisure"
    },
    // Water Activities
    {
      id: 4,
      name: "Umbrella Boat Ride",
      image: "/3.jpg",
      duration: "30 Minutes",
      groupSize: "6 people max",
      difficulty: "Easy",
      price: "$20",
      rating: 4.9,
      description: "Enjoy a slow, romantic cruise on Lake Muhazi under a shaded umbrella boat.",
      highlights: [
        "Romantic lake cruise",
        "Shaded umbrella boat"
      ],
      category: "Water Activities"
    },
    {
      id: 5,
      name: "Speed Boat Adventures",
      image: "/1.jpg",
      duration: "20 Minutes",
      groupSize: "4 people max",
      difficulty: "Moderate",
      price: "$35",
      rating: 4.8,
      description: "For the thrill-seekers—feel the breeze with a fast-paced ride across the lake.",
      highlights: [
        "Fast-paced lake ride",
        "Thrill-seeking adventure"
      ],
      category: "Water Activities"
    },
    {
      id: 6,
      name: "Fishing on the Lake",
      image: "/5.jpg",
      duration: "1 Hour",
      groupSize: "6 people max",
      difficulty: "Easy",
      price: "$15",
      rating: 4.5,
      description: "Grab a rod and try catching your own fresh fish right from the lake.",
      highlights: [
        "Fishing equipment provided",
        "Catch-and-release option"
      ],
      category: "Water Activities"
    },
    {
      id: 7,
      name: "Swimming Pool",
      image: "/4.jpg",
      duration: "All Day",
      groupSize: "Open",
      difficulty: "Easy",
      price: "Included",
      rating: 4.7,
      description: "Take a refreshing dip in our clean and scenic pool overlooking the lake.",
      highlights: [
        "Scenic pool",
        "Lake views"
      ],
      category: "Water Activities"
    },
    // Games & Sports
    {
      id: 8,
      name: "Mini Golf",
      image: "/7.jpg",
      duration: "Flexible",
      groupSize: "6 people max",
      difficulty: "Easy",
      price: "$10",
      rating: 4.6,
      description: "Have some relaxed fun with family or friends on our mini golf course.",
      highlights: [
        "Family-friendly",
        "Fun for all ages"
      ],
      category: "Games & Sports"
    },
    {
      id: 9,
      name: "Basketball",
      image: "/6.jpg",
      duration: "Flexible",
      groupSize: "10 people max",
      difficulty: "Easy",
      price: "Included",
      rating: 4.5,
      description: "Enjoy a quick game or shoot some hoops with fellow guests.",
      highlights: [
        "Basketball court",
        "Casual or competitive play"
      ],
      category: "Games & Sports"
    },
    {
      id: 10,
      name: "Table Tennis",
      image: "/9.jpg",
      duration: "Flexible",
      groupSize: "4 people max",
      difficulty: "Easy",
      price: "Included",
      rating: 4.4,
      description: "Test your reflexes and have fun with indoor table tennis matches.",
      highlights: [
        "Indoor table tennis",
        "Fun matches"
      ],
      category: "Games & Sports"
    },
    {
      id: 11,
      name: "Mini Football",
      image: "/10.jpg",
      duration: "Flexible",
      groupSize: "8 people max",
      difficulty: "Easy",
      price: "Included",
      rating: 4.3,
      description: "Play small-sided football matches in a fun and safe environment.",
      highlights: [
        "Small-sided matches",
        "Safe environment"
      ],
      category: "Games & Sports"
    },
    // {
    //   id: 12,
    //   name: "Gazaux de Champagne",
    //   image: "/8.jpg",
    //   duration: "Flexible",
    //   groupSize: "2 people",
    //   difficulty: "Easy",
    //   price: "Included",
    //   rating: 4.9,
    //   description: "Lakeside sipping corner.",
    //   highlights: [
    //     "Romantic lakeside spot"
    //   ],
    //   category: "Chill & Romance Spots"
    // },
    // {
    //   id: 13,
    //   name: "Gazaux de Golf",
    //   image: "/7.jpg",
    //   duration: "Flexible",
    //   groupSize: "2 people",
    //   difficulty: "Easy",
    //   price: "Included",
    //   rating: 4.8,
    //   description: "A golf-inspired garden relaxation zone.",
    //   highlights: [
    //     "Garden relaxation"
    //   ],
    //   category: "Chill & Romance Spots"
    // },
    {
      id: 14,
      name: "Bingaloo d'Amour (Swinging Bed)",
      image: "/6.jpg",
      duration: "Flexible",
      groupSize: "2 people",
      difficulty: "Easy",
      price: "Included",
      rating: 4.9,
      description: "Swinging Bed for two, perfect for sunset moments.",
      highlights: [
        "Swinging bed",
        "Perfect for sunset"
      ],
      category: "Chill & Romance Spots"
    }, 
    {
      id: 15,
      name: "Pool table",
      image: "/10.jpg",
      duration: "Flexible",
      groupSize: "4 people max",
      difficulty: "Easy",
      price: "Included",
      rating: 4.9,
      description: "Pool table for fun and relaxation.",
      highlights: [
        "Pool table",
        "Fun and relaxation"
      ],
      category: "Chill & Romance Spots"
    }, 
    {
      id: 16,
      name: "Hiking (Mount fumbwe)",
      image: "/10.jpg",
      duration: "Flexible",
      groupSize: "4 people max",
      difficulty: "Easy",
      price: "Included",
      rating: 4.9,
      description: "Hiking in the mountains of Rwanda.",
      highlights: [
        "Hiking",
        "Mountains"
      ],
      category: "Nature & Leisure"
    }
  ];

  const categories = [
    "All",
    "Nature & Leisure",
    "Water Activities",
    "Games & Sports",
    "Chill & Romance Spots"
  ];
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
            Experiences
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide leading-tight mb-8">
            More Than a Stay – It's a Lifestyle
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover the best of nature, fun, and relaxation in one resort.
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