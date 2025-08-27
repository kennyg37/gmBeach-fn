import React, { useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight} from 'lucide-react';
import {  
  GALLERY_STRUCTURE,
  getCategoryCounts,
  filterImagesByCategory,
} from '@/constants/gallery-manifest';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [categoryCounts] = useState<Record<string, number>>(getCategoryCounts());

  const categories = [
    { id: 'all', name: 'All', count: categoryCounts.all },
    { id: 'nature', name: 'Nature', count: categoryCounts.nature },
    { id: 'accomodation', name: 'Accommodation', count: categoryCounts.accomodation },
    { id: 'dining', name: 'Dining', count: categoryCounts.dining },
    { id: 'activities', name: 'Activities', count: categoryCounts.activities },
  ];

  const filteredImages = filterImagesByCategory(activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
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
          <p className="text-sm tracking-widest text-amber-300 uppercase font-light mb-4 font-montserrat">
            Visual Journey
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide leading-tight font-zarathustra">
            Gallery
          </h1>
          <p className="text-lg text-gray-200 mt-4 font-montserrat">
            Discover the beauty and elegance of Good Mood Beach Resort
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium tracking-wider transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={activeCategory} // Re-animate when category changes
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  variants={fadeInUp}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -5 }}
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={`${image.category} - ${image.filename}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Images Message */}
          {filteredImages.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </motion.div>
          )}

          {/* Gallery Stats */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(GALLERY_STRUCTURE).map(([key, category]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">
                    {categoryCounts[key] || 0}
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    {category.name}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].src}
                alt={`${filteredImages[selectedImage].category} - ${filteredImages[selectedImage].filename}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;