import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'accommodations', name: 'Accommodations' },
    { id: 'dining', name: 'Dining' },
    { id: 'activities', name: 'Activities' },
    { id: 'nature', name: 'Nature' },
  ];

  const images = [
    { id: 1, src: '/1.jpg', category: 'nature', title: 'Lake Muhazi Sunrise', description: 'Breathtaking sunrise over the pristine waters' },
    { id: 2, src: '/2.jpg', category: 'nature', title: 'Lakeside Serenity', description: 'Peaceful moments by the water' },
    { id: 3, src: '/3.jpg', category: 'activities', title: 'Water Sports', description: 'Exciting water activities for all ages' },
    { id: 4, src: '/4.jpg', category: 'accommodations', title: 'Resort Overview', description: 'Aerial view of our beautiful resort' },
    { id: 5, src: '/5.jpg', category: 'accommodations', title: 'Luxury Suite', description: 'Elegantly appointed luxury accommodations' },
    { id: 6, src: '/6.jpg', category: 'accommodations', title: 'Private Lakehouse', description: 'Exclusive lakefront living experience' },
    { id: 7, src: '/7.jpg', category: 'accommodations', title: 'Cozy Cottage', description: 'Intimate cottage surrounded by nature' },
    { id: 8, src: '/8.jpg', category: 'dining', title: 'Farm Fresh Cuisine', description: 'Organic ingredients from our gardens' },
    { id: 9, src: '/9.jpg', category: 'activities', title: 'Wildlife Experience', description: 'Discover Rwanda\'s incredible wildlife' },
    { id: 10, src: '/10.jpg', category: 'activities', title: 'Cultural Tours', description: 'Immerse in local culture and traditions' },
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

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
          <p className="text-sm tracking-widest text-amber-300 uppercase font-light mb-4">
            Visual Journey
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide leading-tight">
            GALLERY
          </h1>
          <p className="text-lg text-gray-200 mt-4">
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
                {category.name}
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
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-medium text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
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
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6 rounded-b-lg">
                <h3 className="text-xl font-medium mb-2">{filteredImages[selectedImage].title}</h3>
                <p className="text-gray-300">{filteredImages[selectedImage].description}</p>
              </div>

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