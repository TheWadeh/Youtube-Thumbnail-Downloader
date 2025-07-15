import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

import { FiSearch, FiLoader, FiAlertCircle, FiGlobe, FiSend, FiLinkedin, FiYoutube } from 'react-icons/fi';

const ThumbnailInput = ({ onSubmit, loading, error }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url.trim());
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.form 
        onSubmit={handleSubmit}
        className="relative"
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube URL or Video ID here..."
            className="w-full px-6 py-4 pr-16 text-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
            disabled={loading}
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <motion.button
              type="submit"
              disabled={loading || !url.trim()}
              className="p-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? (
                <SafeIcon icon={FiLoader} className="text-xl animate-spin" />
              ) : (
                <SafeIcon icon={FiSearch} className="text-xl" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.form>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center space-x-2 text-red-200"
        >
          <SafeIcon icon={FiAlertCircle} className="text-xl flex-shrink-0" />
          <span>{error}</span>
        </motion.div>
      )}

      <div className="mt-6 text-center">
        <p className="text-white/60 text-sm mb-4">
          Supports: youtube.com/watch?v=VIDEO_ID, youtu.be/VIDEO_ID, or just VIDEO_ID
        </p>
        <p className="text-white/60 text-sm mb-4">
          Follow me for more cool projects :
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://wadehlife.abdulfetah.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink-400 transition-colors duration-300">
            <SafeIcon icon={FiGlobe} className="text-2xl" />
          </a>
          <a href="https://t.me/wadehlife" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink-400 transition-colors duration-300">
            <SafeIcon icon={FiSend} className="text-2xl" />
          </a>
          <a href="https://linkedin.com/in/wadehlife" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink-400 transition-colors duration-300">
            <SafeIcon icon={FiLinkedin} className="text-2xl" />
          </a>
          <a href="https://www.youtube.com/@wadehlife" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink-400 transition-colors duration-300">
            <SafeIcon icon={FiYoutube} className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailInput;