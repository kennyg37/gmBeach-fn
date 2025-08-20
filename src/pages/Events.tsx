import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Heart, Users } from 'lucide-react';

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

const events = [
  {
    id: 1,
    name: 'Waterfront Weddings',
    image: '/umbrella.jpg',
    icon: <Heart className="w-6 h-6 text-amber-500" />,
    description: 'Exchange vows with stunning lake views and natural elegance.',
    features: ['Lakeside ceremony', 'Customized packages', 'Full catering support'],
  },
  {
    id: 2,
    name: 'Company Retreats & Workshops',
    image: '/workshops.jpg',
    icon: <Users className="w-6 h-6 text-amber-500" />,
    description: 'Boost creativity, teamwork, and relaxation in a unique setting.',
    features: ['Team-building activities', 'Conference facilities', 'Serene environment'],
  },
  {
    id: 3, 
    name: "By the Water events",
    image: '/hiking.jpg',
    icon: <Users className="w-6 h-6 text-amber-500" />,
    description: 'Experience the beauty of the lake with a unique event.',
    features: ['Well organized events', 'Fun and relaxation', 'Discounts and special offers'],
  }
];

const Events = () => (
  <div className="min-h-screen bg-white">
    <Header />
    
    {/* Hero Section */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/4.jpg')" }}
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
          Unforgettable Events
        </p>
        <h1 className="text-5xl md:text-7xl font-light tracking-wide leading-tight mb-8">
          CELEBRATE BY THE WATER
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Plan your dream wedding or serene company retreat at GoodMood Resort, where every moment is crafted to perfection.
        </p>
      </motion.div>
    </section>

    {/* Events Section */}
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
            Our Events
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
            Create Lasting Memories
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch border-2 border-amber-100 hover:border-amber-300 transition-all duration-300`}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="lg:w-1/2 w-full h-80 relative">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-white/90 rounded-full p-3 shadow-md">
                  {event.icon}
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-light text-gray-800 mb-4">{event.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Highlights</h4>
                  <ul className="space-y-2">
                    {event.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We offer full planning support, catering, and customized packages to ensure your event is seamless and unforgettable.
          </p>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Events;