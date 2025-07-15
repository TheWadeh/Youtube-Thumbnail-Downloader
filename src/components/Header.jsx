import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiYoutube, FiDownload } = FiIcons;

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-lg border-b border-white/20"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-3">
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiYoutube} className="text-red-500 text-3xl" />
            <SafeIcon icon={FiDownload} className="text-white text-2xl" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Thumbnail Downloader
          </h1>
        </div>
        <p className="text-center text-white/80 mt-2 text-sm md:text-base">
          Download YouTube thumbnails in high quality
        </p>
        <p className="text-center text-white/60 mt-2 text-xs md:text-sm">
          A tool by <a href="https://wadehlife.abdulfetah.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Wadeh Life</a>
        </p>
      </div>
    </motion.header>
  );
};

export default Header;