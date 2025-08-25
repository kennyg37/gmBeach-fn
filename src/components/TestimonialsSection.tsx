import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Clock, ThumbsUp } from 'lucide-react';
import { GOOGLE_REVIEWS, getOverallRating } from '../constants/constants';

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

  // Function to render category ratings
  const renderCategoryRatings = (categories: Record<string, number | undefined>) => {
    if (!categories || Object.keys(categories).length === 0) return null;
    
    return (
      <div className="flex flex-wrap gap-2 mb-3">
        {Object.entries(categories)
          .filter(([_, rating]) => rating !== undefined)
          .map(([category, rating]) => (
            <span key={category} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {category.charAt(0).toUpperCase() + category.slice(1)}: {rating}/5
            </span>
          ))}
      </div>
    );
  };

  // Function to render highlights
  const renderHighlights = (highlights: string[]) => {
    if (!highlights || highlights.length === 0) return null;
    
    return (
      <div className="flex flex-wrap gap-1 mb-3">
        {highlights.map((highlight, index) => (
          <span key={index} className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full flex items-center gap-1">
            <ThumbsUp className="w-3 h-3" />
            {highlight}
          </span>
        ))}
      </div>
    );
  };

  const overallRating = getOverallRating();
  const ratingNumber = parseFloat(overallRating);

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
          <p className="text-sm tracking-widest text-amber-500 uppercase font-light mb-4 font-montserrat">
            Google Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight font-zarathustra">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto font-montserrat">
            Real experiences from travelers who have discovered the magic of Good Mood Beach Resort
          </p>
          
          {/* Overall Rating Summary */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500">{overallRating}</div>
              <div className="flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < ratingNumber ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <div className="text-sm text-gray-600 mt-1">Based on {GOOGLE_REVIEWS.length} reviews</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {GOOGLE_REVIEWS.slice(0, 6).map((review) => (
            <motion.div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-4 right-4 text-amber-400">
                <Quote className="w-6 h-6 opacity-20" />
              </div>
              
              {/* Header with rating and date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {review.date}
                </span>
              </div>

              {/* Reviewer name */}
              <h4 className="font-medium text-gray-800 mb-3 text-sm">
                {review.reviewer}
              </h4>

              {/* Review text */}
              {review.text && (
                <p className="text-gray-600 leading-relaxed italic mb-4 text-sm">
                  "{review.text}"
                </p>
              )}

              {/* Category ratings */}
              {renderCategoryRatings(review.categories)}

              {/* Highlights */}
              {renderHighlights(review.highlights)}

              {/* Google branding */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">Google Review</span>
                </div>
                <div className="text-xs text-gray-400">
                  Verified Guest
                </div>
              </div>
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
          <motion.a
            href="https://www.google.com/travel/search?q=good%20mood%20beach%20resort&g2lb=4965990%2C4969803%2C72248047%2C72248048%2C72302247%2C72317059%2C72414906%2C72471280%2C72472051%2C72485658%2C72560029%2C72573224%2C72616120%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72832976%2C72882230%2C72958624%2C72959983%2C72990342%2C73059275&hl=en-RW&gl=rw&cs=1&ssta=1&ts=CAEaKwopEicyJTB4MTlkYjVkODFiOGE0YzQwOToweDYzMTQzZmQ0YjFjMDg5Y2U&qs=CAEyE0Nnb0l6cE9DanN2Nmo0cGpFQUU4Ag&ap=ugEHcmV2aWV3cw&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read All Reviews on Google
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;