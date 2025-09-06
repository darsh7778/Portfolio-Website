import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Mobile-optimized CSS styles
const MobileOptimized = () => {
  const { isDark } = useTheme();
  
  // FIX: Replaced non-standard <style jsx> with a standard <style> tag
  // The CSS is now inside a template literal, which allows for dynamic values like isDark.
  return (
    <style>{`
      /* Mobile-first responsive design */
      @media (max-width: 768px) {
        body {
          overflow-x: hidden;
        }
        
        /* Hero section mobile optimization */
        .hero-container { padding: 1rem !important; min-height: 100vh !important; }
        .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; text-align: center !important; }
        .hero-title { font-size: clamp(2rem, 10vw, 3rem) !important; text-align: center !important; }
        .hero-subtitle { font-size: 1.2rem !important; text-align: center !important; }
        .hero-description { text-align: center !important; max-width: 100% !important; padding: 0 1rem !important; }
        .hero-buttons { justify-content: center !important; flex-direction: column !important; align-items: center !important; }
        .hero-buttons button { width: 100% !important; max-width: 280px !important; margin-bottom: 1rem !important; }
        .social-links { justify-content: center !important; }
        
        /* Navigation mobile optimization */
        .navbar { padding: 0.5rem 1rem !important; }
        .navbar-brand { font-size: 1.2rem !important; }
        .navbar-menu {
          flex-direction: column !important;
          position: absolute !important;
          top: 100% !important;
          left: 0 !important;
          right: 0 !important;
          background: ${isDark ? 'rgba(26, 26, 46, 0.95)' : 'rgba(248, 250, 252, 0.95)'} !important;
          backdrop-filter: blur(10px) !important;
          padding: 1rem !important;
          border-radius: 0 0 1rem 1rem !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
        }
        .navbar-item { margin: 0.5rem 0 !important; text-align: center !important; }
        
        /* Section optimizations */
        .about-container, .projects-container, .contact-container { padding: 2rem 1rem !important; }
        .about-grid, .projects-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        .skills-grid { grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important; gap: 1rem !important; }
        .project-card { margin: 0 !important; }
        
        /* Contact section mobile optimization */
        .contact-form { max-width: 100% !important; }
        .form-group { margin-bottom: 1.5rem !important; }
        .form-input, .form-textarea { width: 100% !important; padding: 1rem !important; font-size: 16px !important; /* Prevents zoom on iOS */ }
        
        /* Footer mobile optimization */
        .footer { padding: 2rem 1rem !important; text-align: center !important; }
        .footer-content { flex-direction: column !important; gap: 1rem !important; }
        
        /* General mobile optimizations */
        .section-title { font-size: clamp(2rem, 8vw, 3rem) !important; text-align: center !important; margin-bottom: 2rem !important; }
        .section-subtitle { font-size: 1.1rem !important; text-align: center !important; margin-bottom: 2rem !important; }
        
        /* Performance and usability optimizations */
        .motion-reduce { animation: none !important; transition: none !important; }
        button, .button { min-height: 44px !important; min-width: 44px !important; touch-action: manipulation !important; }
        
        /* Prevent horizontal scroll */
        * { max-width: 100% !important; box-sizing: border-box !important; }
        html, body, #root, .App { overflow-x: hidden !important; width: 100% !important; margin: 0 !important; padding: 0 !important; }
        section, div, main { max-width: 100% !important; overflow-x: hidden !important; }
        .container, .content, .wrapper { max-width: 100% !important; padding-left: 1rem !important; padding-right: 1rem !important; }
        
        /* Optimize images */
        img { max-width: 100% !important; height: auto !important; }
        .mobile-spacing { margin: 1rem 0 !important; padding: 0 1rem !important; }
      }
      
      /* Tablet optimization */
      @media (min-width: 769px) and (max-width: 1024px) {
        .hero-grid { grid-template-columns: 1fr 1fr !important; gap: 3rem !important; }
        .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .skills-grid { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important; }
      }
      
      /* Large screen optimization */
      @media (min-width: 1025px) {
        .hero-grid { grid-template-columns: 1fr 1fr !important; }
        .projects-grid { grid-template-columns: repeat(3, 1fr) !important; }
      }
    `}</style>
  );
};

export default MobileOptimized;