import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Our stay at Good Mood Beach Resort was absolutely magical. The lakeside views, exceptional service, and farm-to-table dining created memories we'll treasure forever. The staff went above and beyond to make our honeymoon perfect.",
      image: "/1.jpg"
    },
    {
      id: 2,
      name: "David & Emma Wilson",
      location: "London, UK",
      rating: 5,
      text: "We've traveled the world, but Good Mood Beach Resort stands out as truly special. The combination of luxury accommodations, authentic Rwandan culture, and pristine natural beauty is unmatched. We're already planning our return visit.",
      image: "/2.jpg"
    },
    {
      id: 3,
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      text: "The gorilla trekking experience organized by the resort was life-changing. Combined with the peaceful lakeside setting and world-class amenities, this resort offers the perfect blend of adventure and relaxation.",
      image: "/3.jpg"
    }
  ];

  return (
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
            Guest Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Discover why travelers from around the world choose Good Mood Beach Resort for their unforgettable Rwanda experience
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-6 right-6 text-amber-400">
                <Quote className="w-8 h-8 opacity-20" />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More Reviews
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;