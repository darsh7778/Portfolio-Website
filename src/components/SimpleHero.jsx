import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SimpleHero = () => {
  const { isDark } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  
  // Typing animation states
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full-Stack Developer',
    'MERN Specialist', 
    'Problem Solver'
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentIndex];
    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, 100 + Math.random() * 100);
    } else if (!isDeleting && text.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(text.slice(0, -1));
      }, 50);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, currentIndex, isDeleting]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: !isMobile ? '2rem' : '1rem',
        paddingTop: '5rem', 
        overflow: 'hidden',
        background: isDark 
          ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        pointerEvents: 'none'
      }}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: isDark 
                ? 'linear-gradient(45deg, #ff00ff, #00ffff)'
                : 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              filter: 'blur(100px)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: !isMobile ? 'row' : 'column',
        gap: '2rem'
      }}>
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            textAlign: !isMobile ? 'left' : 'center',
            maxWidth: !isMobile ? '500px' : '600px',
            margin: !isMobile ? '0' : '0 auto',
            width: !isMobile ? '50%' : '100%',
            padding: '0',
            flex: !isMobile ? '1' : 'none'
          }}
        >
          <motion.h1 
            style={{
              fontSize: !isMobile ? 'clamp(2.5rem, 8vw, 5rem)' : 'clamp(2rem, 10vw, 3rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontFamily: 'Inter, sans-serif',
              textAlign: !isMobile ? 'left' : 'center'
            }}
          >
            <span style={{
              background: isDark 
                ? 'linear-gradient(135deg, #00ffff 0%, #ff00ff 50%, #ffff00 100%)'
                : 'none',
              WebkitBackgroundClip: isDark ? 'text' : 'unset',
              WebkitTextFillColor: isDark ? 'transparent' : 'unset',
              color: isDark ? 'transparent' : '#1a202c',
              textShadow: isDark 
                ? '0 0 20px #ff00ff'
                : '0 2px 4px rgba(0, 0, 0, 0.1)',
              display: 'inline-block'
            }}>
              Darshil Soni
            </span>
          </motion.h1>

          <div style={{ 
            height: '4rem', 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '2rem', 
            justifyContent: !isMobile ? 'flex-start' : 'center' 
          }}>
            <span style={{ 
              fontSize: '1.5rem', 
              opacity: 0.9,
              color: isDark ? '#e5e7eb' : '#1a202c'
            }}>
              I'm a{' '}
              <span style={{ 
                color: isDark ? '#ffff00' : '#3b82f6', 
                fontWeight: '600', 
                fontFamily: 'JetBrains Mono, monospace', 
                textShadow: isDark ? '0 0 10px #ffff00' : '0 0 5px #3b82f6' 
              }}>
                <span style={{
                  color: isDark ? '#00ffff' : '#3b82f6',
                  textShadow: isDark ? '0 0 20px #00ffff' : '0 0 10px #3b82f6',
                  minHeight: '1.2em',
                  display: 'inline-block'
                }}>
                  {text}
                  <span style={{
                    opacity: text.length > 0 ? 1 : 0,
                    animation: 'blink 1s infinite',
                    marginLeft: '2px',
                    color: isDark ? '#ff00ff' : '#8b5cf6'
                  }}>|</span>
                </span>
              </span>
            </span>
          </div>

          <motion.p 
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginBottom: '2rem',
              opacity: 0.9,
              maxWidth: '500px',
              textAlign: !isMobile ? 'left' : 'center',
              color: isDark ? '#e5e7eb' : '#1a202c'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about creating innovative web solutions with cutting-edge technologies. 
            I specialize in building scalable applications using the MERN stack and exploring 
            the fascinating world of AI integration.
          </motion.p>

          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            flexWrap: 'wrap', 
            justifyContent: !isMobile ? 'flex-start' : 'center' 
          }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                background: isDark 
                  ? 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)'
                  : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                color: 'white',
                boxShadow: isDark 
                  ? '0 10px 30px rgba(255, 0, 255, 0.3)'
                  : '0 10px 30px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              View My Work
            </motion.button>

            <motion.a
              href='resume.pdf'
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: isDark ? '2px solid #00ffff' : '2px solid #3b82f6',
                borderRadius: '50px',
                cursor: 'pointer',
                background: 'transparent',
                color: isDark ? '#00ffff' : '#3b82f6',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <Download size={20} />
              Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - 3D Model or Animation - Hidden on mobile */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              width: '50%',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
          {/* Floating geometric shapes */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: `${30 + i * 10}px`,
                  height: `${30 + i * 10}px`,
                  border: isDark ? '2px solid #00ffff' : '2px solid #3b82f6',
                  borderRadius: i % 2 === 0 ? '50%' : '10px',
                  left: `${20 + (i * 15) % 60}%`,
                  top: `${10 + (i * 20) % 70}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Central glowing orb */}
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: isDark 
                  ? 'radial-gradient(circle, #ff00ff 0%, #00ffff 50%, transparent 70%)'
                  : 'radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, transparent 70%)',
                filter: 'blur(20px)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
        )}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="scroll-down-indicator"
        onClick={() => scrollToSection('about')}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          color: isDark ? '#00ffff' : '#3b82f6',
          opacity: 0.7,
          transition: 'opacity 0.3s ease'
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ opacity: 1 }}
      >
        <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem', opacity: 0.8 }}>Scroll down</div>
        <ChevronDown size={24} />
      </motion.div>

      <style>{`
        @media (max-width: 800px) {
          .scroll-down-indicator {
            display: none !important;
          }
          
          /* Ensure content is properly spaced on mobile */
          #hero {
            padding-top: 5rem !important;
          }
          
          /* Adjust hero content for better mobile display */
          .hero-content {
            width: 100% !important;
            padding: 0 1rem !important;
          }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default SimpleHero;
