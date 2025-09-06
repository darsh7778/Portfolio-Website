import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Search } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SimpleProjects = () => {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Airbnb Clone',
      description: 'Full-stack web application with user authentication, CRUD operations for listings, reviews & ratings. Integrated Mapbox API for geolocation and Cloudinary for image uploads.',
      tags: ['MongoDB', 'Express.js', 'Node.js', 'Bootstrap', 'EJS', 'Mapbox', 'Cloudinary'],
      github: 'https://github.com/darsh7778/AirBnb-fullstack-Major-Project.git',
      live: 'https://wanderstay-ej7u.onrender.com/',
      color: '#3b82f6',
      image: 'https://www.figma.com/community/resource/5cfe43c4-f0ac-41ea-8606-1564be301929/thumbnail',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Realtime Locator',
      description: 'Backend project for real-time tracking of devices using Node.js, Express, EJS, and Socket.io. Enables live device data streaming with dynamic updates.',
      tags: ['Node.js', 'Express.js', 'Socket.io', 'EJS', 'WebSockets'],
      github: 'https://github.com/darsh7778/Realtime-Locater.git',
      live: 'https://realtime-locater-rtla.onrender.com/',
      color: '#8b5cf6',
      image: 'https://cdn.prod.website-files.com/64271bfe7740d26d891438c0/65ea3b5abf8a461585022329_Untitled5.webp',
      category: 'backend'
    },
    {
      id: 3,
      title: 'Pixabay Clone',
      description: 'A simple React application that replicates the core features of Pixabay, allowing users to: Search for images by keyword . Sort results (e.g., by relevance, latest, etc.) Built with React + Pixabay API for fast and responsive image fetching.',
      tags: ['React.js', 'Bootstrap', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/darsh7778/Pixabay-Clone.git',
      live: 'https://pixabay-clone-ten-xi.vercel.app/',
      color: '#10b981',
      image: 'https://dear-lavender-ngnfmhvi7f.edgeone.app/Screenshot%202025-09-06%20at%205.44.19%E2%80%AFPM.png',
      category: 'frontend'
    },
    {
      id: 4,
      title: "Weather Forecast",
      description: "The Weather Forecast Web App is a responsive web application built with HTML, CSS, and JavaScript, integrated with a Weather API (such as OpenWeatherMap) to provide real-time and accurate weather updates.",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
      github: "https://github.com/darsh7778/Weather-Forecast-Project.git",
      live: "https://weather-forecast-project-brown.vercel.app/",
      color: "#8b5cf6",
      image: "https://www.chinimandi.com/wp-content/uploads/2018/05/unnamed.jpg",
      category: 'frontend'
    },
    {
      id: 5,
      title: "Todo-List App",
      description: "The TODO-List App is a responsive web application built with HTML, CSS, and JavaScript, allowing users to manage their tasks efficiently.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/darsh7778/todo-list-.git",
      live: "https://todo-list-kappa-six-68.vercel.app/",
      color: "#10b981",
      image: "https://artistic-pink-c4v0kg8xcz.edgeone.app/Screenshot%202025-09-06%20at%206.47.06%E2%80%AFPM.png",
      category: 'frontend'
    },
    {
      id: 6,
      title: "Event Ticketing Website",
      description: "The Event Ticketing Website is a responsive web application built with HTML5 and CSS, allowing users to browse and purchase tickets for various events.",
      tags: ["HTML5", "CSS3"],
      github: "https://github.com/darsh7778/Event-Ticketing-Website.git",
      live: "https://event-ticketing-website.vercel.app/",
      color: "#10b981",
      image: "blob:https://www-towrco-in.filesusr.com/869d8ebf-3f70-448a-97b8-71323a788f15",
      category: 'frontend'
    },
    {
      id: 7,
      title: "Simon-Says Game project",
      description: "This project is a web-based implementation of the beloved Simon Says memory game, built entirely using JavaScript. It challenges players to recall and replicate sequences of colored buttons that light up in a random order.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/darsh7778/Simon-Says-Project.git",
      live: "https://air-bnb-fullstack-major-project-m2s.vercel.app/",
      color: "#f59e0b",
      image: "https://increasing-pink-uqiav7tgf0.edgeone.app/Screenshot%202025-09-06%20at%206.13.22%E2%80%AFPM.png",
      category: 'frontend'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  const filterButtons = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length }
  ];

  return (
    <section 
      id="projects" 
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a1a 50%, #111111 75%, #050505 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 20%, #e2e8f0 40%, #cbd5e1 60%, #94a3b8 80%, #64748b 100%)',
        color: isDark ? '#00ffff' : '#1a202c',
        transition: 'all 0.5s ease',
        padding: '5rem 1rem',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden'
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 'bold',
            color: isDark ? '#00ffff' : '#1e293b',
            textShadow: isDark ? '0 0 20px #00ffff' : 'none',
            marginBottom: '1rem'
          }}>
            Featured <span style={{ 
              background: isDark 
                ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              boxShadow: isDark 
                ? '0 4px 12px rgba(59, 130, 246, 0.4)'
                : '0 4px 12px rgba(59, 130, 246, 0.3)', 
              textShadow: isDark ? '0 0 20px #ff00ff' : 'none' 
            }}>Projects</span>
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: isDark ? '#ffff00' : '#64748b',
            textShadow: isDark ? '0 0 10px #ffff00' : 'none',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Showcasing innovative solutions and technical expertise through real-world applications
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}
        >
          {filterButtons.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: `1px solid ${activeFilter === filter.id 
                  ? (isDark ? '#3b82f6' : '#3b82f6')
                  : (isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.2)')}`,
                backgroundColor: activeFilter === filter.id 
                  ? (isDark ? '#3b82f6' : '#3b82f6')
                  : (isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)'),
                color: activeFilter === filter.id 
                  ? '#ffffff'
                  : (isDark ? '#60a5fa' : '#3b82f6'),
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeFilter === filter.id 
                  ? '0 4px 12px rgba(59, 130, 246, 0.4)'
                  : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {filter.label}
              <span style={{
                backgroundColor: activeFilter === filter.id 
                  ? 'rgba(255, 255, 255, 0.2)'
                  : (isDark ? 'rgba(96, 165, 250, 0.2)' : 'rgba(59, 130, 246, 0.2)'),
                color: activeFilter === filter.id ? '#ffffff' : 'inherit',
                padding: '0.125rem 0.5rem',
                borderRadius: '1rem',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                {filter.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            <Search style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#9ca3af'
            }} size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                paddingLeft: '3rem',
                paddingRight: '1rem',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
                borderRadius: '0.5rem',
                border: isDark ? '2px solid #00ffff' : '2px solid #3b82f6',
                backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
                color: isDark ? '#00ffff' : '#1e293b',
                boxShadow: isDark ? '0 0 10px #00ffff' : '0 0 5px #3b82f6',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = isDark ? '#ff00ff' : '#8b5cf6';
                e.target.style.boxShadow = '0 6px 16px rgba(139, 92, 246, 0.5)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = isDark ? '#00ffff' : '#3b82f6';
                e.target.style.boxShadow = isDark ? '0 4px 12px rgba(59, 130, 246, 0.4)' : '0 4px 12px rgba(59, 130, 246, 0.3)';
              }}
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="project-card project-container"
              style={{
                background: isDark 
              ? 'rgba(30, 30, 30, 0.8)'
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: isDark 
              ? '0 4px 20px rgba(0, 255, 255, 0.3)'
              : '0 4px 12px rgba(0, 0, 0, 0.15)',
            border: isDark 
              ? '1px solid rgba(0, 255, 255, 0.3)'
              : '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%',
                maxWidth: '100%',
                minHeight: 'fit-content'
              }}
            >
              {/* Project Header */}
              <div className="project-header" style={{
                height: 'clamp(150px, 25vw, 200px)',
                background: project.image 
                  ? `url("${project.image}") center/cover`
                  : (isDark 
                    ? 'linear-gradient(135deg, #333 0%, #555 100%)'
                    : `linear-gradient(135deg, ${project.color} 0%, ${project.color}cc 100%)`),
                backgroundBlendMode: isDark ? 'normal' : 'overlay',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                backgroundImage: project.image ? `url(${project.image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  padding: '0 1rem'
                }}>
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="project-content" style={{ 
                padding: 'clamp(1rem, 3vw, 1.5rem)',
                overflow: 'hidden'
              }}>
                <p style={{
                  color: isDark ? '#e5e7eb' : '#374151',
                  textShadow: isDark ? '0 0 3px rgba(229, 231, 235, 0.5)' : 'none',
                  marginBottom: '1rem',
                  lineHeight: 1.6
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="project-tags" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem',
                  overflow: 'hidden'
                }}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                      color: isDark ? '#60a5fa' : '#3b82f6',
                      border: isDark ? '1px solid rgba(96, 165, 250, 0.5)' : '1px solid #3b82f6',
                      textShadow: 'none',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '1rem',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span style={{ color: '#ff00ff', fontSize: '0.875rem', textShadow: '0 0 5px #ff00ff' }}>
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#6b7280',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = project.color}
                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#6b7280',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = project.color}
                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                  >
                    <ExternalLink size={18} />
                    <span>Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: 'center',
              padding: '3rem',
              color: '#9ca3af',
              fontSize: '1.1rem'
            }}
          >
            No projects found matching your criteria.
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SimpleProjects;
