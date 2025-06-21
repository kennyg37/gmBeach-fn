import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Users, CreditCard, Check } from 'lucide-react';

const Booking: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'suite',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const accommodations = [
    {
      id: 'suite',
      name: 'Luxury Suite',
      price: 250,
      image: '/5.jpg',
      features: ['Lake View', 'Private Balcony', 'King Bed', 'Mini Bar']
    },
    {
      id: 'lakehouse',
      name: 'Private Lakehouse',
      price: 450,
      image: '/6.jpg',
      features: ['Private Beach', 'Full Kitchen', '2 Bedrooms', 'Boat Access']
    },
    {
      id: 'cottage',
      name: 'Cozy Cottage',
      price: 180,
      image: '/7.jpg',
      features: ['Garden View', 'Fireplace', 'Queen Bed', 'Private Patio']
    }
  ];

  const selectedAccommodation = accommodations.find(acc => acc.id === bookingData.roomType);

  const steps = [
    { number: 1, title: 'Select Dates & Room', icon: <Calendar className="w-5 h-5" /> },
    { number: 2, title: 'Guest Information', icon: <Users className="w-5 h-5" /> },
    { number: 3, title: 'Payment & Confirmation', icon: <CreditCard className="w-5 h-5" /> }
  ];

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
            Reserve Your Stay
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide leading-tight">
            BOOKING
          </h1>
          <p className="text-lg text-gray-200 mt-4">
            Secure your perfect lakeside getaway
          </p>
        </motion.div>
      </section>

      {/* Booking Steps */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="flex justify-center items-center space-x-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex items-center"
                variants={fadeInUp}
              >
                <div className={`flex items-center gap-3 ${
                  currentStep >= step.number ? 'text-amber-500' : 'text-gray-400'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step.number ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    {currentStep > step.number ? <Check className="w-5 h-5" /> : step.icon}
                  </div>
                  <span className="font-medium text-sm hidden md:block">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-amber-500' : 'bg-gray-300'
                  }`} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Step 1: Select Dates & Room */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-light text-gray-800 mb-6">
                  Select Your Dates & Accommodation
                </h2>

                {/* Date Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={bookingData.checkIn}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={bookingData.checkOut}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Guests
                    </label>
                    <select
                      name="guests"
                      value={bookingData.guests}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Room Selection */}
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    Choose Your Accommodation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {accommodations.map((room) => (
                      <motion.div
                        key={room.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          bookingData.roomType === room.id
                            ? 'border-amber-500 bg-amber-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setBookingData(prev => ({ ...prev, roomType: room.id }))}
                        whileHover={{ scale: 1.02 }}
                      >
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <h4 className="font-medium text-gray-800 mb-2">{room.name}</h4>
                        <p className="text-amber-500 font-bold mb-2">${room.price}/night</p>
                        <div className="space-y-1">
                          {room.features.slice(0, 2).map((feature, idx) => (
                            <p key={idx} className="text-xs text-gray-600">• {feature}</p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Guest Information */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-light text-gray-800 mb-6">
                  Guest Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={bookingData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={bookingData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="Any special requests or dietary requirements..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Payment & Confirmation */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-light text-gray-800 mb-6">
                  Booking Summary & Payment
                </h2>

                {/* Booking Summary */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Booking Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Accommodation:</span>
                      <span className="font-medium">{selectedAccommodation?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-in:</span>
                      <span>{bookingData.checkIn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-out:</span>
                      <span>{bookingData.checkOut}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guests:</span>
                      <span>{bookingData.guests}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-lg font-medium">
                      <span>Total:</span>
                      <span className="text-amber-500">${selectedAccommodation?.price}/night</span>
                    </div>
                  </div>
                </div>

                {/* Payment Form */}
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-800">Payment Information</h3>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-sm text-amber-700">
                      <strong>Note:</strong> This is a demo booking form. No actual payment will be processed.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t">
              {currentStep > 1 && (
                <motion.button
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Previous
                </motion.button>
              )}
              
              <motion.button
                onClick={currentStep === 3 ? () => alert('Booking confirmed!') : nextStep}
                className="px-8 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors ml-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {currentStep === 3 ? 'Confirm Booking' : 'Continue'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;