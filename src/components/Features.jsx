import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiShield, FiSmartphone, FiHeart } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'Download thumbnails instantly without any delays or processing time'
    },
    {
      icon: FiShield,
      title: 'Secure & Private',
      description: 'No data stored on our servers. Your privacy is our top priority'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices - desktop, tablet, and mobile'
    },
    {
      icon: FiHeart,
      title: 'Completely Free',
      description: 'No hidden fees, no subscriptions. Use it as much as you want'
    }
  ];

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Choose Our Downloader?
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          The most reliable and user-friendly YouTube thumbnail downloader
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(236, 72, 153, 0.5)' }}
            className="text-center p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 shadow-lg"
          >
            <div className="inline-flex p-5 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mb-6 shadow-lg">
              <SafeIcon icon={feature.icon} className="text-white text-3xl" />
            </div>
            <h3 className="text-white font-bold text-2xl mb-3">
              {feature.title}
            </h3>
            <p className="text-white/60 text-base">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;