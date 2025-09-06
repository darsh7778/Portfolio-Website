import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Home, User, Briefcase, Mail, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: 'hero', icon: Home },
    { name: 'About', href: 'about', icon: User },
    { name: 'Projects', href: 'projects', icon: Briefcase },
    { name: 'Contact', href: 'contact', icon: Mail }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Darshil_Soni_Resume.pdf';
    link.click();
  };

  const scrollToSection = (sectionId) => {
    // Wait for content to be fully loaded
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: isDark 
          ? 'rgba(15, 15, 35, 0.7)' 
          : 'rgba(248, 250, 252, 0.7)',
        backdropFilter: 'blur(16px) saturate(200%)',
        borderBottom: scrolled 
          ? (isDark 
            ? '1px solid rgba(0, 255, 255, 0.3)'
            : '1px solid rgba(59, 130, 246, 0.2)')
          : 'none',
        boxShadow: scrolled 
          ? (isDark 
            ? '0 4px 32px rgba(0, 255, 255, 0.1), 0 8px 64px rgba(0, 0, 0, 0.3)'
            : '0 4px 32px rgba(0, 0, 0, 0.1), 0 8px 64px rgba(59, 130, 246, 0.05)')
          : 'none',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>
          {/* Logo */}
          <motion.div
            whileHover={{ 
              scale: 1.1,
              rotateY: 10,
              rotateX: 5,
              rotateZ: 2
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: '1.8rem',
              fontWeight: 800,
              background: isDark 
                ? 'linear-gradient(135deg, #00ffff 0%, #ff00ff 50%, #ffff00 100%)'
                : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: isDark ?  '0 0 20px rgba(135, 206, 235, 1)' : 'none',
              color: isDark ? '#d1d5db' : '#374151',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.05em',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
            onClick={() => scrollToSection('#hero')}
          >
            DS
          </motion.div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="desktop-nav" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem'
          }}>
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  rotateX: 5,
                  y: -3
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection(item.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isDark ? '#d1d5db' : '#374151',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#3b82f6';
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'translateY(-3px) rotateY(10deg) rotateX(5deg)';
                  e.target.style.background = isDark ? 'linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1))' : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = isDark ? '#d1d5db' : '#374151';
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'translateY(0) rotateY(0deg) rotateX(0deg)';
                  e.target.style.background = 'none';
                }}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Resume Download Button */}
            <motion.button
              whileHover={{ 
                scale: 1.1,
                y: -2,
                rotateX: 5
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                  : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: '#ffffff',
                borderRadius: '1.5rem',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '600',
                padding: '0.75rem 1.5rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isDark 
                  ? '0 4px 20px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  : '0 4px 20px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = isDark 
                  ? '0 8px 32px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)'
                  : '0 8px 32px rgba(59, 130, 246, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = isDark 
                  ? '0 4px 20px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  : '0 4px 20px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)';
              }}
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              style={{
                width: '40px',
                height: '40px',
                padding: '0',
                borderRadius: '50%',
                background: isDark 
                  ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
                  : 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                color: isDark ? '#1e293b' : '#fbbf24',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isDark 
                  ? '0 2px 8px rgba(251, 191, 36, 0.3)'
                  : '0 2px 8px rgba(30, 41, 59, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button - Hidden on desktop */}
          <div className="mobile-nav" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem'
          }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              style={{
                padding: '0.5rem',
                borderRadius: '0.5rem',
                backgroundColor: isDark ? '#374151' : '#f3f4f6',
                color: isDark ? '#d1d5db' : '#374151',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              style={{
                padding: '0.5rem',
                borderRadius: '0.5rem',
                backgroundColor: isDark ? '#374151' : '#f3f4f6',
                color: isDark ? '#d1d5db' : '#374151',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: isDark ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(16px)',
              borderTop: isDark ? '1px solid #00ffff' : '1px solid rgba(0, 0, 0, 0.1)',
              display: 'block',
              '@media (min-width: 768px)': { display: 'none' }
            }}
          >
            <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ 
                    x: 15,
                    scale: 1.05,
                    rotateZ: 2
                  }}
                  onClick={() => scrollToSection(item.href)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    background: 'none',
                    border: 'none',
                    color: isDark ? '#ff00ff' : '#3b82f6',
                    textShadow: isDark ? '0 0 10px #ff00ff' : 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: '0.5rem 0',
                    textAlign: 'left',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    const button = e.currentTarget;
                    button.style.color = '#3b82f6';
                    button.style.background = isDark ? 'linear-gradient(90deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1))' : 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))';
                    button.style.boxShadow = isDark ? '0 4px 20px rgba(255, 0, 255, 0.3)' : '0 4px 20px rgba(59, 130, 246, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    const button = e.currentTarget;
                    button.style.color = isDark ? '#ff00ff' : '#3b82f6';
                    button.style.background = 'none';
                    button.style.boxShadow = 'none';
                  }}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </motion.button>
              ))}
              
              <motion.button
                whileHover={{ x: 10 }}
                onClick={handleDownloadResume}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'none',
                  border: 'none',
                  color: isDark ? '#d1d5db' : '#374151',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: '0.5rem 0',
                  textAlign: 'left',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.target.style.color = isDark ? '#d1d5db' : '#374151'}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .mobile-nav { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 767px) {
          .mobile-nav { display: flex !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
