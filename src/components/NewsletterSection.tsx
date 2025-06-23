import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <Mail className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Stay Connected with Paradise
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about exclusive offers, 
              seasonal packages, and special events at Good Mood Beach Resort.
            </p>
          </div>

          {!isSubscribed ? (
            <motion.form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Subscribe
                    </>
                  )}
                </motion.button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.form>
          ) : (
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-green-400 mb-2">
                  Successfully Subscribed!
                </h3>
                <p className="text-gray-300">
                  Thank you for joining our community. You'll receive our latest updates and exclusive offers.
                </p>
              </div>
            </motion.div>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              className="p-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-3xl font-light text-amber-400 mb-2">Weekly</div>
              <p className="text-gray-400">Newsletter Updates</p>
            </motion.div>
            <motion.div
              className="p-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-3xl font-light text-amber-400 mb-2">Exclusive</div>
              <p className="text-gray-400">Member Offers</p>
            </motion.div>
            <motion.div
              className="p-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-3xl font-light text-amber-400 mb-2">Early</div>
              <p className="text-gray-400">Event Access</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;