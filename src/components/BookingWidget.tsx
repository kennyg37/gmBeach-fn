import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Clock, Phone } from 'lucide-react';

const BookingWidget: React.FC = () => {
  const [formData, setFormData] = useState({
    checkIn: '2025-06-17',
    checkOut: '2025-06-18',
    guests: '2',
    roomType: 'suite'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
    console.log('Booking data:', formData);
  };

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.1 }}
    >
      <div className="text-center mb-8">
        <motion.h3 
          className="text-2xl font-light text-white mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Reserve Your Perfect Getaway
        </motion.h3>
        <motion.p 
          className="text-gray-300 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Experience luxury at Lake Muhazi
        </motion.p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Check In */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <Calendar className="w-4 h-4" />
              Check In
            </label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 transition-all"
            />
          </motion.div>

          {/* Check Out */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
          >
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <Clock className="w-4 h-4" />
              Check Out
            </label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 transition-all"
            />
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
          >
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <Users className="w-4 h-4" />
              Guests
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 transition-all"
            >
              <option value="1" className="text-gray-800">1 Guest</option>
              <option value="2" className="text-gray-800">2 Guests</option>
              <option value="3" className="text-gray-800">3 Guests</option>
              <option value="4" className="text-gray-800">4 Guests</option>
              <option value="5" className="text-gray-800">5+ Guests</option>
            </select>
          </motion.div>

          {/* Room Type */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
          >
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <MapPin className="w-4 h-4" />
              Accommodation
            </label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 transition-all"
            >
              <option value="suite" className="text-gray-800">Luxury Suite</option>
              <option value="lakehouse" className="text-gray-800">Private Lakehouse</option>
              <option value="cottage" className="text-gray-800">Cottage</option>
            </select>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
        >
          <motion.button
            type="submit"
            className="flex-1 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 px-8 py-4 rounded-lg font-medium tracking-wide hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Check Availability
          </motion.button>
          <motion.button
            type="button"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white rounded-lg font-medium tracking-wide hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-4 h-4" />
            Call: +250 788 123 456
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default BookingWidget;