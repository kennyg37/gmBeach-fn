import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [formStatus, setFormStatus] = useState('');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all required fields.');
      return;
    }
    setFormStatus('Thank you! Your message has been sent successfully.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
    setTimeout(() => setFormStatus(''), 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Good Mood Beach Resort", "Lake Muhazi, Rwanda"],
      link: "https://maps.google.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+250781850791"],
      link: "tel:+250781850791"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["goodmoodbeachresort@gmail.com"],
      link: "mailto:goodmoodbeachresort@gmail.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reception Hours",
      details: ["24/7 Available", "Concierge Service"],
      link: null
    }
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
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide leading-tight">
            CONTACT US
          </h1>
          <p className="text-lg text-gray-200 mt-4">
            We're here to help make your stay unforgettable
          </p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-amber-500 mb-6 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {info.link && idx === 0 ? (
                        <a href={info.link} className="hover:text-amber-500 transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Form */}
            <motion.div className="space-y-8" variants={fadeInUp}>
              <div>
                <p className="text-sm tracking-widest text-amber-500 uppercase font-light mb-4">
                  Send us a Message
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-gray-800 leading-tight">
                  We'd Love to Hear From You
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                      placeholder="+250 xxx xxx xxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking & Reservations</option>
                      <option value="events">Events & Weddings</option>
                      <option value="dining">Dining Reservations</option>
                      <option value="activities">Activities & Tours</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-amber-500 text-white py-4 px-8 rounded-lg font-medium hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>

                {formStatus && (
                  <motion.p
                    className={`text-sm text-center p-4 rounded-lg ${
                      formStatus.includes('success') || formStatus.includes('sent')
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {formStatus}
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div className="space-y-8" variants={fadeInUp}>
              <div>
                <h3 className="text-2xl font-light text-gray-800 mb-4">
                  Find Us at Lake Muhazi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Located on the pristine shores of Lake Muhazi, our resort is easily accessible 
                  from Kigali and offers stunning natural beauty in every direction. We provide 
                  complimentary airport transfers for all guests.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Lake Muhazi, Rwanda</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-amber-50 p-8 rounded-lg">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  Need Immediate Assistance?
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="font-medium text-gray-800">Call Us Now</p>
                      <a href="tel:+250781850791" className="text-amber-600 hover:text-amber-700">
                        +250 781 850 791
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="font-medium text-gray-800">Email Us</p>
                      <a href="mailto:goodmoodbeachresort@gmail.com" className="text-amber-600 hover:text-amber-700">
                      goodmoodbeachresort@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;