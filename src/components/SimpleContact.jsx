import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Facebook, CheckCircle, AlertCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import emailjs from '@emailjs/browser';

const SimpleContact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('loading');
    
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'sonidarsh2005@gmail.com'
      };

      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sonidarsh2005@gmail.com',
      href: 'mailto:sonidarsh2005@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6261582940',
      href: 'tel:+916261582940'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Indore, Madhya Pradesh',
      href: 'https://maps.google.com/?q=Indore, Madhya Pradesh'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/darsh7778', color: '#8b5cf6' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/darshil-soni-a874552aa/', color: '#3b82f6' },
    { icon: Twitter, href: 'https://x.com/DarshilSon72207', color: '#1da1f2' },
    { icon: Instagram, href: 'https://www.instagram.com/_darrsshh_/', color: '#e4405f' },
    { icon: Facebook, href: 'https://www.facebook.com/darshil.soni.1217', color: '#1877f2' },
  ];

  // Add dark class to body when in dark mode
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    return () => {
      document.body.classList.remove('dark');
    };
  }, [isDark]);

  return (
    <section id="contact" style={{
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
            Get In <span style={{
              background: isDark 
                ? 'linear-gradient(135deg, #ff00ff 0%, #ffff00 50%, #00ff00 100%)'
                : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: isDark ? '0 0 20px #ff00ff' : 'none'
            }}>Touch</span>
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: isDark ? '#ffff00' : '#64748b',
            textShadow: isDark ? '0 0 10px #ffff00' : 'none',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(51, 65, 85, 0.8) 100%)'
                : 'linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(241, 245, 249, 0.85) 100%)',
              backdropFilter: 'blur(15px)',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: isDark 
                ? '0 8px 32px rgba(0, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.3)' 
                : '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05)',
              border: isDark 
                ? '1px solid rgba(0, 255, 255, 0.2)' 
                : '1px solid rgba(203, 213, 225, 0.5)'
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: isDark ? '#00ffff' : '#111827',
              marginBottom: '1.5rem',
              textShadow: isDark ? '0 0 10px #00ffff' : 'none'
            }}>
              Let's Connect
            </h3>
            <p style={{
              color: isDark ? '#e5e7eb' : '#6b7280',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              I'm always excited to work on new projects and collaborate with talented individuals.
              Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>

            {/* Contact Details */}
            <div style={{ marginBottom: '2rem' }}>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    marginBottom: '1rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.3s ease',
                    background: isDark ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = isDark ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.05)';
                    e.target.style.transform = 'translateX(0px)';
                  }}
                >
                  <div style={{
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    background: isDark ? 'rgba(96, 165, 250, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p style={{
                      fontSize: '0.875rem',
                      margin: 0,
                      color: 'inherit',
                      opacity: 0.8
                    }}>{item.label}</p>
                    <p style={{
                      margin: 0,
                      fontWeight: 500,
                      color: 'inherit'
                    }}>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: isDark ? '#00ffff' : '#1f2937',
              marginBottom: '1rem',
              textShadow: isDark ? '0 0 5px #00ffff' : 'none'
            }}>
              Follow Me
            </h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    background: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    color: social.color
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0px)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(55, 65, 81, 0.85) 0%, rgba(75, 85, 99, 0.8) 100%)'
                : 'linear-gradient(135deg, rgba(243, 244, 246, 0.9) 0%, rgba(229, 231, 235, 0.85) 100%)',
              backdropFilter: 'blur(15px)',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: isDark 
                ? '0 8px 32px rgba(0, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.3)' 
                : '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05)',
              border: isDark 
                ? '1px solid rgba(0, 255, 255, 0.2)' 
                : '1px solid rgba(203, 213, 225, 0.5)'
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: isDark ? '#00ffff' : '#111827',
              marginBottom: '1.5rem',
              textShadow: isDark ? '0 0 10px #00ffff' : 'none'
            }}>
              Send Message
            </h3>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem',
                marginBottom: '1.5rem',
                borderRadius: '0.5rem',
                fontSize: '0.95rem',
                backgroundColor: '#d1fae5',
                color: '#065f46',
                border: '1px solid #a7f3d0'
              }}>
                <CheckCircle size={18} />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem',
                marginBottom: '1.5rem',
                borderRadius: '0.5rem',
                fontSize: '0.95rem',
                backgroundColor: '#fee2e2',
                color: '#991b1b',
                border: '1px solid #fecaca'
              }}>
                <AlertCircle size={18} />
                <span>Failed to send message. Please try again or contact me directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="name" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 500,
                  color: isDark ? '#e5e7eb' : '#374151'
                }}>
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: errors.name 
                      ? '1px solid #ef4444' 
                      : isDark ? '1px solid #374151' : '1px solid #d1d5db',
                    background: isDark ? '#1f2937' : '#ffffff',
                    color: isDark ? '#e5e7eb' : '#374151',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    if (!errors.name) {
                      e.target.style.borderColor = isDark ? '#00ffff' : '#3b82f6';
                      e.target.style.boxShadow = isDark 
                        ? '0 0 0 3px rgba(0, 255, 255, 0.1)' 
                        : '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }
                  }}
                  onBlur={(e) => {
                    if (!errors.name) {
                      e.target.style.borderColor = isDark ? '#374151' : '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                />
                {errors.name && (
                  <div style={{
                    color: '#ef4444',
                    fontSize: '0.875rem',
                    marginTop: '0.25rem'
                  }}>
                    {errors.name}
                  </div>
                )}
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="email" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 500,
                  color: isDark ? '#e5e7eb' : '#374151'
                }}>
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: errors.email ? '1px solid #ef4444' : (isDark ? '1px solid #4b5563' : '1px solid #d1d5db'),
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    background: isDark ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                    color: isDark ? '#f3f4f6' : '#1f2937',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = isDark ? '#60a5fa' : '#3b82f6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.email ? '#ef4444' : (isDark ? '#4b5563' : '#d1d5db');
                    e.target.style.boxShadow = 'none';
                  }}
                />
                {errors.email && (
                  <p style={{
                    marginTop: '0.25rem',
                    fontSize: '0.875rem',
                    color: '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <AlertCircle size={14} /> {errors.email}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="subject" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 500,
                  color: isDark ? '#e5e7eb' : '#374151'
                }}>
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: errors.subject ? '1px solid #ef4444' : (isDark ? '1px solid #4b5563' : '1px solid #d1d5db'),
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    background: isDark ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                    color: isDark ? '#f3f4f6' : '#1f2937',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = isDark ? '#60a5fa' : '#3b82f6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.subject ? '#ef4444' : (isDark ? '#4b5563' : '#d1d5db');
                    e.target.style.boxShadow = 'none';
                  }}
                />
                {errors.subject && (
                  <p style={{
                    marginTop: '0.25rem',
                    fontSize: '0.875rem',
                    color: '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <AlertCircle size={14} /> {errors.subject}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="message" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 500,
                  color: isDark ? '#e5e7eb' : '#374151'
                }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: errors.message ? '1px solid #ef4444' : (isDark ? '1px solid #4b5563' : '1px solid #d1d5db'),
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    background: isDark ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                    color: isDark ? '#f3f4f6' : '#1f2937',
                    transition: 'border-color 0.2s ease',
                    resize: 'vertical',
                    minHeight: '120px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = isDark ? '#60a5fa' : '#3b82f6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.message ? '#ef4444' : (isDark ? '#4b5563' : '#d1d5db');
                    e.target.style.boxShadow = 'none';
                  }}
                ></textarea>
                {errors.message && (
                  <p style={{
                    marginTop: '0.25rem',
                    fontSize: '0.875rem',
                    color: '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <AlertCircle size={14} /> {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
                whileHover={{ scale: (isSubmitting || Object.keys(errors).some(key => errors[key])) ? 1 : 1.02 }}
                whileTap={{ scale: (isSubmitting || Object.keys(errors).some(key => errors[key])) ? 1 : 0.98 }}
                style={{
                  width: '100%',
                  padding: '0.875rem 2rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  background: (isSubmitting || Object.keys(errors).some(key => errors[key]))
                    ? (isDark ? '#374151' : '#9ca3af')
                    : isDark 
                      ? 'linear-gradient(135deg, #00ffff 0%, #ff00ff 100%)'
                      : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  color: (isSubmitting || Object.keys(errors).some(key => errors[key])) ? '#6b7280' : '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: (isSubmitting || Object.keys(errors).some(key => errors[key])) ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid #6b7280',
                      borderTop: '2px solid #ffffff',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Add CSS animation for spinner */}
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default SimpleContact;
