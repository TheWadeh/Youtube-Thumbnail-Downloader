import React from 'react';
import { motion } from 'framer-motion';
import ThumbnailCard from './ThumbnailCard';

const ThumbnailDisplay = ({ data }) => {
  const thumbnailSizes = [
    { key: 'maxres', label: 'Max Resolution', size: '1280x720', url: data.thumbnails.maxres },
    { key: 'high', label: 'High Quality', size: '480x360', url: data.thumbnails.high },
    { key: 'medium', label: 'Medium Quality', size: '320x180', url: data.thumbnails.medium },
    { key: 'standard', label: 'Standard', size: '640x480', url: data.thumbnails.standard },
    { key: 'default', label: 'Default', size: '120x90', url: data.thumbnails.default }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Available Thumbnails
        </h3>
        <p className="text-white/70">
          Choose your preferred quality and download
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {thumbnailSizes.map((thumbnail, index) => (
          <motion.div
            key={thumbnail.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ThumbnailCard
              thumbnail={thumbnail}
              videoId={data.videoId}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailDisplay;