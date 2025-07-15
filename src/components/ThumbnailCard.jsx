import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiImage, FiCheck } = FiIcons;

const ThumbnailCard = ({ thumbnail, videoId }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await fetch(thumbnail.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${videoId}-${thumbnail.key}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
    >
      <div className="text-center mb-4">
        <h4 className="text-white font-semibold text-lg mb-1">
          {thumbnail.label}
        </h4>
        <p className="text-white/60 text-sm">
          {thumbnail.size}
        </p>
      </div>

      <div className="relative mb-4 bg-gray-800/50 rounded-xl overflow-hidden aspect-video">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <SafeIcon icon={FiImage} className="text-white/40 text-3xl animate-pulse" />
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/60 text-sm">Preview not available</span>
          </div>
        ) : (
          <img
            src={thumbnail.url}
            alt={`${thumbnail.label} thumbnail`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <motion.button
        onClick={handleDownload}
        className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={downloaded}
      >
        <SafeIcon 
          icon={downloaded ? FiCheck : FiDownload} 
          className="text-lg" 
        />
        <span>{downloaded ? 'Downloaded!' : 'Download'}</span>
      </motion.button>
    </motion.div>
  );
};

export default ThumbnailCard;