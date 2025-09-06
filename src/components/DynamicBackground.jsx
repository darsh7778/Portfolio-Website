import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const DynamicBackground = () => {
  const { isDark } = useTheme();
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    // Track window size for performance optimization
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  // Reduce particle count on smaller screens
  const particleCount = windowSize.width < 768 ? 15 : windowSize.width < 1200 ? 25 : 35;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {/* Animated Gradient Background */}
      <div
        className="gradient-bg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: isDark 
            ? 'linear-gradient(-45deg, #000000, #0a0a0a, #1a1a1a, #111111, #050505, #0d0d0d)'
            : 'linear-gradient(-45deg, #f0f9ff, #e0f2fe, #bae6fd, #7dd3fc, #38bdf8, #0ea5e9)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}
      />

      {/* Floating Particles */}
      {!isReducedMotion && Array.from({ length: particleCount }, (_, i) => (
        <div
          key={i}
          className="floating-orb"
          style={{
            position: 'absolute',
            borderRadius: '50%',
            background: isDark
              ? `radial-gradient(circle, ${['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'][i]}20, transparent)`
              : `radial-gradient(circle, ${['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444', '#6366f1'][i]}15, transparent)`,
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float${i} ${8 + i * 2}s ease-in-out infinite`,
            filter: 'blur(1px)'
          }}
        />
      ))}

      {/* Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`shape-${i}`}
          className="geometric-shape"
          style={{
            position: 'absolute',
            width: `${20 + i * 10}px`,
            height: `${20 + i * 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: isDark
              ? `linear-gradient(45deg, ${['#00ffff', '#ff00ff', '#ffff00', '#00ff00'][i % 4]}, transparent)`
              : `linear-gradient(45deg, ${['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981'][i % 4]}, transparent)`,
            transform: i % 2 === 0 ? 'rotate(45deg)' : 'rotate(0deg)',
            animation: `rotate${i % 3} ${10 + i}s linear infinite`,
            opacity: 0.1,
            borderRadius: i % 3 === 0 ? '50%' : '0'
          }}
        />
      ))}

      {/* Particle Lines */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`line-${i}`}
          style={{
            position: 'absolute',
            width: '1px',
            height: `${50 + i * 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: isDark
              ? `linear-gradient(to bottom, ${['#00ffff', '#ff00ff', '#ffff00'][i % 3]}60, transparent)`
              : `linear-gradient(to bottom, ${['#3b82f6', '#8b5cf6', '#f59e0b'][i % 3]}40, transparent)`,
            animation: `drift${i % 4} ${15 + i * 2}s ease-in-out infinite`,
            transform: `rotate(${i * 30}deg)`
          }}
        />
      ))}
      
      {/* FIX: Replaced non-standard <style jsx> with a standard <style> tag */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .gradient-bg, .particle {
            animation: none !important;
          }
        }
        
        /* Performance optimization for mobile */
        @media (max-width: 768px) {
          .gradient-bg {
            animation-duration: 20s;
          }
          .particle {
            animation-duration: 15s;
          }
        }

        @keyframes float0 { 0%, 100% { transform: translateY(0px) translateX(0px) scale(1); } 33% { transform: translateY(-30px) translateX(20px) scale(1.1); } 66% { transform: translateY(20px) translateX(-15px) scale(0.9); } }
        @keyframes float1 { 0%, 100% { transform: translateY(0px) translateX(0px) scale(1); } 25% { transform: translateY(25px) translateX(-30px) scale(1.2); } 75% { transform: translateY(-20px) translateX(25px) scale(0.8); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0px) translateX(0px) scale(1); } 40% { transform: translateY(-25px) translateX(30px) scale(1.15); } 80% { transform: translateY(30px) translateX(-20px) scale(0.85); } }
        @keyframes float3 { 0%, 100% { transform: translateY(0px) translateX(0px) scale(1); } 50% { transform: translateY(35px) translateX(-25px) scale(1.3); } }
        @keyframes float4 { 0%, 100% { transform: translateY(0px) translateX(0px) scale(1); } 30% { transform: translateY(-40px) translateX(15px) scale(0.7); } 70% { transform: translateY(25px) translateX(-35px) scale(1.4); } }
        @keyframes float5 { 0%, 100% { transform: translateY(0px) translateX(0px) scale(1); } 60% { transform: translateY(20px) translateX(40px) scale(1.1); } }

        @keyframes rotate0 { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(180deg) scale(1.2); } 100% { transform: rotate(360deg) scale(1); } }
        @keyframes rotate1 { 0% { transform: rotate(0deg) scale(1); } 33% { transform: rotate(120deg) scale(0.8); } 66% { transform: rotate(240deg) scale(1.3); } 100% { transform: rotate(360deg) scale(1); } }
        @keyframes rotate2 { 0% { transform: rotate(0deg) scale(1); } 25% { transform: rotate(90deg) scale(1.5); } 75% { transform: rotate(270deg) scale(0.6); } 100% { transform: rotate(360deg) scale(1); } }
        
        @keyframes drift0 { 0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; } 50% { transform: translateY(-100px) rotate(180deg); opacity: 0.8; } }
        @keyframes drift1 { 0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; } 50% { transform: translateY(80px) rotate(-180deg); opacity: 0.6; } }
        @keyframes drift2 { 0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; } 50% { transform: translateY(-60px) rotate(90deg); opacity: 0.9; } }
        @keyframes drift3 { 0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; } 50% { transform: translateY(120px) rotate(-90deg); opacity: 0.7; } }
      `}</style>
    </div>
  );
};

export default DynamicBackground;