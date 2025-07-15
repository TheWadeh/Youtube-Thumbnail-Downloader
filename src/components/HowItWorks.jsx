import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCopy, FiSearch, FiDownload } = FiIcons;

const HowItWorks = () => {
  const steps = [
    {
      icon: FiCopy,
      title: 'Copy URL',
      description: 'Copy the YouTube video URL from your browser'
    },
    {
      icon: FiSearch,
      title: 'Paste & Search',
      description: 'Paste the URL in our search box and hit enter'
    },
    {
      icon: FiDownload,
      title: 'Download',
      description: 'Choose your preferred quality and download instantly'
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
          How It Works
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Download YouTube thumbnails in just 3 simple steps
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="relative inline-block mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <SafeIcon icon={step.icon} className="text-white text-3xl" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-white font-bold text-2xl mb-3">
                {step.title}
              </h3>
              <p className="text-white/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;