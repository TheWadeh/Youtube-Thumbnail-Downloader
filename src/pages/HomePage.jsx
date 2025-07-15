import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThumbnailInput from '../components/ThumbnailInput';
import ThumbnailDisplay from '../components/ThumbnailDisplay';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';

const HomePage = () => {
  const [thumbnailData, setThumbnailData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const extractVideoId = (url) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const handleSubmit = async (url) => {
    setLoading(true);
    setError('');
    setThumbnailData(null);

    try {
      const videoId = extractVideoId(url);
      
      if (!videoId) {
        throw new Error('Invalid YouTube URL or Video ID');
      }

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const thumbnails = {
        maxres: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        high: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        medium: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        standard: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
        default: `https://img.youtube.com/vi/${videoId}/default.jpg`
      };

      setThumbnailData({
        videoId,
        thumbnails,
        title: `Video ${videoId}` // In a real app, you'd fetch this from YouTube API
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-20">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pt-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Download YouTube
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
            {' '}Thumbnails
          </span>
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Get high-quality thumbnails from any YouTube video instantly. 
          Perfect for content creators, designers, and marketers.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ThumbnailInput onSubmit={handleSubmit} loading={loading} error={error} />
      </motion.section>

      {thumbnailData && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ThumbnailDisplay data={thumbnailData} />
        </motion.section>
      )}

      <Features />
      <HowItWorks />
    </div>
  );
};

export default HomePage;