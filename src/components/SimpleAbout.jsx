import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const SkillBar = ({ name, level, color, isDark, delay }) => {
  const [width, setWidth] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setWidth(level), 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [level]);

  return (
    <div ref={ref} style={{ marginBottom: '1.5rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
        color: isDark ? '#e5e7eb' : '#1f2937'
      }}>
        <span style={{ fontSize: '1rem', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{level}%</span>
      </div>
      <div style={{
        width: '100%',
        height: '8px',
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : 0 }}
          transition={{ duration: 1.5, delay: delay * 0.1, ease: [0.6, 0.05, 0.28, 0.91] }}
          style={{
            height: '100%',
            background: color,
            borderRadius: '4px',
            boxShadow: `0 0 10px ${color}80`
          }}
        />
      </div>
    </div>
  );
};

const SimpleAbout = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);
  
  const skills = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
    { name: 'JavaScript (ES6+)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'},
    { name: 'Responsive Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'},
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'},
    { name: 'C/C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'},
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'},
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'},
    { name: 'MongoDB (NoSQL)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'},
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'},
    { name: 'Render', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg'},
    { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'},
    { name: 'Netlify', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg'},
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'},
  ];

  const skillLevels = [
    { name: 'JavaScript', level: 90, color: '#f0db4f' },
    { name: 'React', level: 85, color: '#61dafb' },
    { name: 'Node.js', level: 80, color: '#68a063' },
    { name: 'MongoDB', level: 75, color: '#4DB33D' },
    { name: 'HTML/CSS', level: 90, color: '#e44d26' },
    { name: 'Python', level: 70, color: '#3776ab' },
    { name: 'C++', level: 75, color: '#00599c' },
    { name: 'Java', level: 70, color: '#007396' },
  ];

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={ref}
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a1a 50%, #111111 75%, #050505 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 20%, #e2e8f0 40%, #cbd5e1 60%, #94a3b8 80%, #64748b 100%)',
        padding: '5rem 1rem',
        minHeight: '100vh',
        transition: 'all 0.5s ease',
        color: isDark ? '#00ffff' : '#1a202c',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden'
      }}
    >
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
            About <span style={{
              background: isDark 
                ? 'linear-gradient(135deg, #ff00ff 0%, #ffff00 50%, #00ff00 100%)'
                : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: isDark ? '0 0 20px #ff00ff' : 'none'
            }}>Me</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: isDark ? '#e5e7eb' : '#4b5563',
            textShadow: isDark ? '0 0 3px rgba(229, 231, 235, 0.5)' : 'none',
            marginBottom: '2rem'
          }}>
            I'm a passionate BCA student and full-stack developer currently pursuing my Bachelor's 
            in Computer Application at Renaissance University, Indore. With strong problem-solving 
            skills and an eagerness to learn, I specialize in creating innovative web solutions 
            using the MERN stack and modern technologies.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: isDark ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.15)',
              marginBottom: '2rem',
              border: isDark ? 'none' : '1px solid rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: isDark ? '#374151' : '#111827', marginBottom: '1rem' }}>
                My Journey
              </h3>
              <div style={{ color: isDark ? '#6b7280' : '#1f2937', lineHeight: 1.6 }}>
                <p style={{ marginBottom: '1rem' }}>
                  My journey in web development started with curiosity and has grown into a passion 
                  for creating innovative digital solutions. Currently pursuing BCA at Renaissance 
                  University, I've developed strong technical skills through hands-on projects and 
                  continuous learning.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  I specialize in full-stack development using the MERN stack, with experience 
                  in building real-world applications like an Airbnb clone and real-time tracking 
                  systems. My projects showcase proficiency in both frontend and backend technologies.
                </p>
                <p>
                  With strong problem-solving abilities and a team-oriented mindset, I'm always 
                  eager to learn new technologies and take on challenging projects. My goal is to 
                  create applications that solve real problems while providing excellent user experiences.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: isDark ? '#374151' : '#111827', marginBottom: '2rem', textAlign: 'center' }}>
                Technical Skills
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '10px',
                justifyItems: 'center',
                alignItems: 'center'
              }} className="skills-grid">
                {skills.map((skill, index) => (
                  <img 
                    key={skill.name}
                    src={skill.logo} 
                    alt={skill.name}
                    className="skill-logo"
                    style={{
                      filter: isDark ? 'brightness(1.2)' : 'none',
                      width: '80px',
                      height: '80px',
                      objectFit: 'contain'
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const styles = `
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 1.5rem;
    justify-items: center;
    align-items: center;
  }

  .skill-item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    max-width: 80px;
    height: auto;
    aspect-ratio: 1/1;
  }

  .skill-logo {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  @media (max-width: 470px) {
    .skills-grid {
      grid-template-columns: repeat(3, 1fr) !important;
      gap: 6px !important;
    }

    .skill-logo {
      width: 50px !important;
      height: 50px !important;
    }
  }
`;

const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);

export default SimpleAbout;
