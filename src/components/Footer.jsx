import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

import { FiHeart, FiCode, FiYoutube, FiLinkedin, FiSend, FiGlobe } from 'react-icons/fi';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black/20 backdrop-blur-lg border-t border-white/10 py-8 mt-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <SafeIcon icon={FiYoutube} className="text-red-500 text-2xl" />
            <span className="text-white font-bold text-lg">Thumbnail Downloader</span>
          </div>
          
          <p className="text-white/60 mb-4">
            The fastest and most reliable YouTube thumbnail downloader
          </p>
          
          <div className="flex items-center justify-center space-x-1 text-white/70">
            <span>Made with</span>
            <SafeIcon icon={FiHeart} className="text-red-500 text-sm" />
            <span>and</span>
            <SafeIcon icon={FiCode} className="text-blue-400 text-sm" />
            <span>by developers</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-white/60 mb-4">
              This site is powered by Wadeh Life. Visit for more tools:
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://wadehlife.abdulfetah.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink-400 transition-colors duration-300">
                <SafeIcon icon={FiGlobe} className="text-2xl" />
              </a>
              <a href="https://t.me/wadehlife" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink-400 transition-colors duration-300">
                <SafeIcon icon={FiSend} className="text-2xl" />
              </a>
              <a href="https://linkedin.com/in/wadeh-life" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink-400 transition-colors duration-300">
                <SafeIcon icon={FiLinkedin} className="text-2xl" />
              </a>
              <a href="https://www.youtube.com/@wadehlife" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink-400 transition-colors duration-300">
                <SafeIcon icon={FiYoutube} className="text-2xl" />
              </a>
            </div>
            <p className="text-white/50 text-sm mt-6">
              © 2024 YouTube Thumbnail Downloader. All rights reserved.
            </p>
            <p className="text-white/40 text-xs mt-2">
              Not affiliated with YouTube or Google Inc.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;