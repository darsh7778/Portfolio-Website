import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const LoadingScreen = ({ onComplete }) => {
  const { isDark } = useTheme();
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  const loadingSteps = [
    'Initializing...',
    'Loading components...',
    'Setting up animations...',
    'Preparing experience...',
    'Almost ready...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update loading text based on progress
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
        if (stepIndex < loadingSteps.length) {
          setLoadingText(loadingSteps[stepIndex]);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete && onComplete(), 500);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: isDark 
            ? 'linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a1a 50%, #111111 75%, #050505 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 20%, #e2e8f0 40%, #cbd5e1 60%, #94a3b8 80%, #64748b 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            background: isDark 
              ? 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00)'
              : 'linear-gradient(45deg, #3b82f6, #8b5cf6, #f59e0b)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '2rem'
          }}
        >
          DS
        </motion.div>

        {/* Loading Bar Container */}
        <div style={{
          width: '300px',
          height: '4px',
          background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '1rem'
        }}>
          {/* Loading Bar Fill */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              height: '100%',
              background: isDark 
                ? 'linear-gradient(90deg, #00ffff, #ff00ff)'
                : 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              borderRadius: '2px'
            }}
          />
        </div>

        {/* Progress Text */}
        <motion.div
          key={loadingText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            color: isDark ? '#d1d5db' : '#374151',
            fontSize: '0.9rem',
            marginBottom: '0.5rem'
          }}
        >
          {loadingText}
        </motion.div>

        {/* Progress Percentage */}
        <motion.div
          style={{
            color: isDark ? '#00ffff' : '#3b82f6',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}
        >
          {Math.round(progress)}%
        </motion.div>

        {/* Floating Particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: isDark ? '#00ffff' : '#3b82f6',
              borderRadius: '50%',
              pointerEvents: 'none'
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
