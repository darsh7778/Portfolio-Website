import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import SimpleHero from './components/SimpleHero';
import SimpleAbout from './components/SimpleAbout';
import SimpleProjects from './components/SimpleProjects';
import SimpleContact from './components/SimpleContact';
import DynamicBackground from './components/DynamicBackground';
import MobileOptimized from './components/MobileOptimized';
import LoadingScreen from './components/LoadingScreen';
import InteractiveParticles from './components/InteractiveParticles';
import './App.css';

function AppContent() {
  const { isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };
  
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', position: 'relative' }}>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <DynamicBackground />
      
      <div className="App" style={{ 
        opacity: showContent ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        visibility: showContent ? 'visible' : 'hidden'
      }}>
        <MobileOptimized />
        <Navbar />
        
        {showContent && (
          <div style={{ 
            opacity: showContent ? 1 : 0, 
            transition: 'opacity 0.5s ease-in-out',
            position: 'relative'
          }}>
            <InteractiveParticles />
            <main>
              <SimpleHero />
              <SimpleAbout />
              <SimpleProjects />
              <SimpleContact />
            </main>
          </div>
        )}
      </div>
      
      {showContent && (
        <footer style={{
          background: isDark 
            ? 'linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a1a 50%, #111111 75%, #050505 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 20%, #e2e8f0 40%, #cbd5e1 60%, #94a3b8 80%, #64748b 100%)',
          color: isDark ? '#00ffff' : '#1a202c',
          textShadow: isDark ? '0 0 10px #00ffff' : 'none',
            textAlign: 'center',
            padding: '3rem 2rem',
            position: 'relative',
            zIndex: 10
          }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ 
              margin: 0, 
              opacity: 0.8, 
              fontSize: '0.9rem', 
              color: isDark ? '#ffff00' : '#1a202c', 
              textShadow: isDark ? '0 0 5px #ffff00' : 'none' 
            }}>
              © 2025 Darshil Soni. Built with React, Three.js & ❤️
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
