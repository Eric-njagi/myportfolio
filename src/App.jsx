import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/ericnjagi', emoji: '🐙' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/eric-njagi', emoji: '🔗' }
];

const PROJECTS = [
  {
    title: 'Hypervisor Deployment Automation',
    description: 'Automated KVM hypervisor deployment for enterprise environments.',
    technologies: ['KVM', 'Ansible', 'Terraform'],
    link: '#'
  },
  {
    title: 'Hybrid Cloud Management',
    description: 'Unified platform for hybrid cloud infrastructure management.',
    technologies: ['AWS', 'Azure', 'Docker'],
    link: '#'
  },
  {
    title: 'Terraform VM Provisioning',
    description: 'Infrastructure as Code for automated VM provisioning and lifecycle.',
    technologies: ['Terraform', 'vSphere', 'HashiCorp'],
    link: '#'
  },
  {
    title: 'OpenShift Voting App',
    description: 'Containerized voting application with CI/CD on OpenShift.',
    technologies: ['OpenShift', 'Kubernetes', 'ROSA'],
    link: '#'
  }
];

const EXPERIENCE_TABS = [
  { id: 'current', label: 'Current Role' },
  { id: 'previous', label: 'Previous Experience' },
  { id: 'achievements', label: 'Achievements' }
];

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeExperienceTab, setActiveExperienceTab] = useState('current');
  const formRef = useRef();
  
  // Add smooth scrolling effect for anchor links to each section and Intersection Observer for animations
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };
    
    document.addEventListener('click', handleSmoothScroll);
    
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      observer.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Eric Njagi' // You can customize this as needed
      };

      await emailjs.send(
        'service_x9oq0pf', // Replace with your EmailJS service ID
        'template_se4q6he', // Replace with your EmailJS template ID
        templateParams,
        'VKdJ9CuLlJWxJNjp2' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.96) 25%, rgba(51, 65, 85, 0.94) 50%, rgba(71, 85, 105, 0.92) 75%, rgba(100, 116, 139, 0.90) 100%)',
      minHeight: '100vh', 
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Cloud Elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden'
      }}>
        {/* Cloud 1 */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          fontSize: '3rem',
          opacity: 0.1,
          animation: 'float 20s infinite linear'
        }}>☁️</div>
        
        {/* Cloud 2 */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          fontSize: '2.5rem',
          opacity: 0.08,
          animation: 'float 25s infinite linear reverse'
        }}>☁️</div>
        
        {/* Cloud 3 */}
        <div style={{
          position: 'absolute',
          top: '60%',
          left: '5%',
          fontSize: '2rem',
          opacity: 0.12,
          animation: 'float 30s infinite linear'
        }}>☁️</div>
        
        {/* Cloud 4 */}
        <div style={{
          position: 'absolute',
          top: '80%',
          right: '20%',
          fontSize: '2.5rem',
          opacity: 0.1,
          animation: 'float 22s infinite linear reverse'
        }}>☁️</div>
        
        {/* Server Icons */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '80%',
          fontSize: '1.5rem',
          opacity: 0.06,
          animation: 'float 18s infinite linear reverse'
        }}>🖥️</div>
        
        <div style={{
          position: 'absolute',
          top: '70%',
          left: '85%',
          fontSize: '1.2rem',
          opacity: 0.08,
          animation: 'float 24s infinite linear'
        }}>⚙️</div>
        
        {/* Network Icons */}
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '2%',
          fontSize: '1.8rem',
          opacity: 0.05,
          animation: 'float 28s infinite linear reverse'
        }}>🌐</div>
      </div>
      
      {/* Add CSS animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateX(-10px) translateY(0px); }
          25% { transform: translateX(10px) translateY(-10px); }
          50% { transform: translateX(5px) translateY(-5px); }
          75% { transform: translateX(-5px) translateY(-15px); }
          100% { transform: translateX(-10px) translateY(0px); }
        }
        
        .animate-in {
          animation: slideInUp 0.8s ease-out;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Mobile-first responsive improvements */
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .project-card {
            min-height: 220px !important;
            padding: 1.25rem !important;
          }
          
          /* Touch targets for mobile */
          .project-card:active {
            transform: translateY(-2px) scale(0.98) !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        /* Improve image loading on mobile */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 40px)',
        maxWidth: '1200px',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(51, 65, 85, 0.8) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        zIndex: 1000,
        padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          <div style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em'
          }}>Eric Njagi</div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: window.innerWidth <= 768 ? 'block' : 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              zIndex: 1001
            }}
          >
            <div style={{
              width: '24px',
              height: '2px',
              background: '#fff',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: mobileMenuOpen ? '0' : '-8px',
                left: '0',
                width: '24px',
                height: '2px',
                background: '#fff',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: mobileMenuOpen ? '0' : '-8px',
                left: '0',
                width: '24px',
                height: '2px',
                background: '#fff',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg)' : 'rotate(0deg)'
              }}></div>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <div style={{
            display: window.innerWidth <= 768 ? 'none' : 'flex',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            alignItems: 'center'
          }}>
            <a href="#home" 
               onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
               onMouseLeave={(e) => e.target.style.color = '#60a5fa'}
               style={{
              color: '#60a5fa', 
              textDecoration: 'none', 
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: 500,
              padding: '0.5rem 0',
              transition: 'color 0.3s ease'
            }}>Home</a>
            <a href="#about" 
               onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
               onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
               style={{
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: 500,
              padding: '0.5rem 0',
              transition: 'color 0.3s ease'
            }}>About</a>
            <a href="#experience" 
               onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
               onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
               style={{
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: 500,
              padding: '0.5rem 0',
              transition: 'color 0.3s ease'
            }}>Experience</a>
            <a href="#projects" 
               onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
               onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
               style={{
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: 500,
              padding: '0.5rem 0',
              transition: 'color 0.3s ease'
            }}>Projects</a>
            <a href="#contact" 
               onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
               onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
               style={{
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: 500,
              padding: '0.5rem 0',
              transition: 'color 0.3s ease'
            }}>Contact</a>
            
            {/* Social Icons - Hidden on mobile */}
            <div style={{
              display: window.innerWidth <= 1024 ? 'none' : 'flex',
              gap: '1rem',
              alignItems: 'center',
              marginLeft: '1rem'
            }}>
                <a href="https://gitlab.com/CloudChuck" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{
                   color: 'rgba(255, 255, 255, 0.7)',
                   fontSize: '1.2rem',
                   transition: 'color 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                 onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                 title="GitHub"
              >
                <i className="fab fa-gitlab"></i>
              </a>
               <a href="https://github.com/ChuckyCharles" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{
                   color: 'rgba(255, 255, 255, 0.7)',
                   fontSize: '1.2rem',
                   transition: 'color 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                 onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                 title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/charles-ochieng-177ba3253" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{
                   color: 'rgba(255, 255, 255, 0.7)',
                   fontSize: '1.2rem',
                   transition: 'color 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                 onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                 title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/CharlesO21441" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{
                   color: 'rgba(255, 255, 255, 0.7)',
                   fontSize: '1.2rem',
                   transition: 'color 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                 onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                 title="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:ochiengcharles531@gmail.com" 
                 style={{
                   color: 'rgba(255, 255, 255, 0.7)',
                   fontSize: '1.2rem',
                   transition: 'color 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                 onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                 title="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: window.innerWidth <= 768 && mobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          padding: '6rem 2rem 2rem',
          zIndex: 999,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: mobileMenuOpen ? 1 : 0,
          visibility: mobileMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease'
        }}>
          <a href="#home" 
             onClick={() => setMobileMenuOpen(false)}
             style={{
              color: 'rgba(255, 255, 255, 0.9)', 
              textDecoration: 'none', 
              fontSize: '1.5rem',
              fontWeight: 500,
              padding: '0.75rem 0',
              transition: 'color 0.3s ease'
            }}>Home</a>
          <a href="#about" 
             onClick={() => setMobileMenuOpen(false)}
             style={{
              color: 'rgba(255, 255, 255, 0.9)', 
              textDecoration: 'none', 
              fontSize: '1.5rem',
              fontWeight: 500,
              padding: '0.75rem 0',
              transition: 'color 0.3s ease'
            }}>About</a>
          <a href="#experience" 
             onClick={() => setMobileMenuOpen(false)}
             style={{
              color: 'rgba(255, 255, 255, 0.9)', 
              textDecoration: 'none', 
              fontSize: '1.5rem',
              fontWeight: 500,
              padding: '0.75rem 0',
              transition: 'color 0.3s ease'
            }}>Experience</a>
          <a href="#projects" 
             onClick={() => setMobileMenuOpen(false)}
             style={{
              color: 'rgba(255, 255, 255, 0.9)', 
              textDecoration: 'none', 
              fontSize: '1.5rem',
              fontWeight: 500,
              padding: '0.75rem 0',
              transition: 'color 0.3s ease'
            }}>Projects</a>
          <a href="#contact" 
             onClick={() => setMobileMenuOpen(false)}
             style={{
              color: 'rgba(255, 255, 255, 0.9)', 
              textDecoration: 'none', 
              fontSize: '1.5rem',
              fontWeight: 500,
              padding: '0.75rem 0',
              transition: 'color 0.3s ease'
            }}>Contact</a>
          
          {/* Mobile Social Icons */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            marginTop: '2rem'
          }}>
             <a href="https://gitlab.com/CloudChuck"
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 color: 'rgba(255, 255, 255, 0.8)',
                 fontSize: '1.5rem',
                 transition: 'color 0.3s ease'
               }}
               title="GitLab"
            >
              <i className="fab fa-gitlab"></i>
            </a>
            <a href="https://www.linkedin.com/in/charles-ochieng-177ba3253" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 color: 'rgba(255, 255, 255, 0.8)',
                 fontSize: '1.5rem',
                 transition: 'color 0.3s ease'
               }}
               title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
               <a href="https://github.com/ChuckyCharles" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 color: 'rgba(255, 255, 255, 0.8)',
                 fontSize: '1.5rem',
                 transition: 'color 0.3s ease'
               }}
               title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a href="https://x.com/CharlesO21441" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 color: 'rgba(255, 255, 255, 0.8)',
                 fontSize: '1.5rem',
                 transition: 'color 0.3s ease'
               }}
               title="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:ochiengcharles531@gmail.com" 
               style={{
                 color: 'rgba(255, 255, 255, 0.8)',
                 fontSize: '1.5rem',
                 transition: 'color 0.3s ease'
               }}
               title="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(1rem, 3vw, 2rem)',
        paddingTop: 'clamp(100px, 15vw, 140px)',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.75) 50%, rgba(51, 65, 85, 0.65) 100%)',
        backdropFilter: 'blur(15px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <div>
            {/* Tech Stack Icons */}
            <div style={{
              display: 'flex',
              gap: 'clamp(0.5rem, 2vw, 0.75rem)',
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
              flexWrap: 'wrap'
            }}>
              <TechIcon>☁️</TechIcon>
              <TechIcon>🐳</TechIcon>
              <TechIcon>K8s</TechIcon>
              <TechIcon>🐍</TechIcon>
              <TechIcon>TF</TechIcon>
              <TechIcon>🟢</TechIcon>
              <TechIcon>VM</TechIcon>
              <TechIcon>⚙️</TechIcon>
              <TechIcon>📋</TechIcon>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              color: '#64748b',
              marginBottom: '0.5rem',
              fontWeight: 500
            }}>DevOps & Infrastructure Engineering</div>
            
            <h1 style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              lineHeight: 1.1
            }}>Eric Njagi</h1>
            
            <div style={{
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              color: '#3b82f6',
              fontWeight: 600,
              marginBottom: '0.5rem'
            }}>DevOps & Infrastructure Engineer</div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: '#64748b',
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
              lineHeight: 1.6
            }}>Specializing in cloud architectures, containerization, and infrastructure automation. Passionate about optimizing cloud costs and enhancing system reliability through DevOps practices.</div>
            
            <div style={{
              display: 'flex',
              gap: 'clamp(0.75rem, 2vw, 1rem)',
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
                style={{
                  background: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                  borderRadius: '6px',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}>
                View My Work
              </button>
              <a href="https://charlesochieng.hashnode.dev" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{
                   background: 'transparent',
                   color: '#ffffff',
                   border: '1px solid #374151',
                   padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                   borderRadius: '6px',
                   fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                   fontWeight: 600,
                   cursor: 'pointer',
                   textDecoration: 'none',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '0.5rem',
                   transition: 'all 0.3s ease',
                   whiteSpace: 'nowrap'
                 }}
                 onMouseEnter={(e) => {
                   e.target.style.borderColor = '#3b82f6';
                   e.target.style.color = '#3b82f6';
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.borderColor = '#374151';
                   e.target.style.color = '#ffffff';
                 }}>
                📝 Read My Blogs
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  border: '1px solid #374151',
                  padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                  borderRadius: '6px',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.color = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#374151';
                  e.target.style.color = '#ffffff';
                }}>
                Get In Touch
              </button>
            </div>
            
            {/* Tech Stack */}
            <div style={{
              fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
              color: '#64748b'
            }}>
              <strong>Cloud Expertise:</strong> VMware vSphere, Kubernetes, OpenShift, Terraform, Ansible, AWS, Azure, <span style={{color: '#3b82f6'}}>+10 more tools</span>
            </div>
          </div>
          
          {/* Right Content - Code Editor */}
          <div style={{
            background: '#1a1a1a',
            border: '1px solid #374151',
            borderRadius: '8px',
            overflow: 'hidden',
            display: window.innerWidth <= 768 ? 'none' : 'block'
          }}>
            {/* Code Editor Header */}
            <div style={{
              background: '#2a2a2a',
              padding: '0.75rem 1rem',
              borderBottom: '1px solid #374151',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444'}}></span>
              <span style={{width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b'}}></span>
              <span style={{width: '12px', height: '12px', borderRadius: '50%', background: '#10b981'}}></span>
              <span style={{marginLeft: '1rem', fontSize: '0.875rem', color: '#9ca3af'}}>portfolio.tsx</span>
            </div>
            
            {/* Code Content */}
            <div style={{
              padding: '1.5rem',
              fontFamily: 'JetBrains Mono, Monaco, monospace',
              fontSize: '0.875rem',
              lineHeight: 1.6
            }}>
              <CodeLine number="01">const engineer = {'{'};</CodeLine>
              <CodeLine number="02">  name: <span style={{color: '#10b981'}}>'Eric Njagi'</span>,</CodeLine>
              <CodeLine number="05">  experience: <span style={{color: '#10b981'}}>'3+ years'</span>,</CodeLine>
              <CodeLine number="06">  skills: [</CodeLine>
              <CodeLine number="07">    <span style={{color: '#10b981'}}>'Cloud'</span>, <span style={{color: '#10b981'}}>'Kubernetes'</span>, <span style={{color: '#10b981'}}>'OpenShift'</span>,</CodeLine>
              <CodeLine number="08">    <span style={{color: '#10b981'}}>'Terraform'</span>, <span style={{color: '#10b981'}}>'Ansible'</span>, <span style={{color: '#10b981'}}>'Python'</span></CodeLine>
              <CodeLine number="09">  ],</CodeLine>
              <CodeLine number="10">  infrastructure: () =&gt; manageCloudResources(),</CodeLine>
              <CodeLine number="11">  contact: <span style={{color: '#10b981'}}>'kina3eric@gmail.com'</span></CodeLine>
              <CodeLine number="12">{'}'};</CodeLine>
            </div>
            
            {/* Status Bar */}
            <div style={{
              background: '#2a2a2a',
              padding: '0.5rem 1rem',
              borderTop: '1px solid #374151',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.75rem',
              color: '#9ca3af'
            }}>
              <span>🟢 Eric Automation</span>
              <span>Last commit: Today</span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact & Leadership Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.8) 100%)',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 2rem)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Section Header */}
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#3b82f6',
            marginBottom: '1rem'
          }}>Community Impact & Leadership</h2>
          
          <p style={{
            fontSize: '1.125rem',
            color: '#9ca3af',
            marginBottom: '3rem',
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto 3rem auto'
          }}>Speaking engagements, community contributions, and volunteering activities</p>
          
          {/* Category Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              padding: '0.75rem 1.5rem',
              borderRadius: '25px',
              color: '#60a5fa',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🎤 Speaking Engagements
            </div>
            
            <div style={{
              background: 'rgba(75, 85, 99, 0.3)',
              border: '1px solid rgba(75, 85, 99, 0.5)',
              padding: '0.75rem 1.5rem',
              borderRadius: '25px',
              color: '#d1d5db',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              👥 Community Leadership
            </div>
            
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              padding: '0.75rem 1.5rem',
              borderRadius: '25px',
              color: '#60a5fa',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              💝 Volunteering & Mentorship
            </div>
          </div>
          
          {/* Community Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 4vw, 2rem)',
            textAlign: 'left'
          }}>
            {/* Mentor & Graphic Designer Card */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(75, 85, 99, 0.3)',
              borderRadius: '12px',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  border: '1px solid rgba(75, 85, 99, 0.5)'
                }}>
                  🎨
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}>Career Ambassador</h3>
                  <div style={{
                    color: '#3b82f6',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>Machakos University</div>
                  <div style={{
                    color: '#9ca3af',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span>⏰</span> October 2022 - Present
                  </div>
                </div>
              </div>
              
              <div style={{
                marginBottom: '1rem'
              }}>
                <div style={{
                  color: '#10b981',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>Focus:</div>
                <p style={{
                  color: '#d1d5db',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  marginBottom: '1rem'
                }}>Mentoring students in Career Selection and Navigation</p>
                
                <p style={{
                  color: '#9ca3af',
                  fontSize: '0.85rem',
                  lineHeight: 1.5
                }}>Serving as a Career Ambassador for Machakos University , guiding students in career selection and design principles.</p>
              </div>
              
              <div style={{
                background: 'rgba(75, 85, 99, 0.3)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(75, 85, 99, 0.4)'
              }}>
                <div style={{
                  color: '#10b981',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>Impact:</div>
                <p style={{
                  color: '#d1d5db',
                  fontSize: '0.85rem',
                  lineHeight: 1.4
                }}>Boosted student career engagement with consistent, professional design assets that strengthened Machakos University's presence</p>
              </div>
            </div>
            
            {/* Technical Writer Card */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(75, 85, 99, 0.3)',
              borderRadius: '12px',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  border: '1px solid rgba(59, 130, 246, 0.3)'
                }}>
                  ✍️
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}>Technical Writer</h3>
                  <div style={{
                    color: '#3b82f6',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>Hashnode Platform</div>
                  <div style={{
                    color: '#9ca3af',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span>⏰</span> May 2024 - Current
                  </div>
                </div>
              </div>
              
              <div style={{
                marginBottom: '1rem'
              }}>
                <div style={{
                  color: '#10b981',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>Focus:</div>
                <p style={{
                  color: '#d1d5db',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  marginBottom: '1rem'
                }}>Creating technical content for developers in tech</p>
                
                <p style={{
                  color: '#9ca3af',
                  fontSize: '0.85rem',
                  lineHeight: 1.5
                }}>Contributing technical articles and tutorials to support technology in Africa and beyond. Topics include virtualization, cloud computing, and DevOps practices.</p>
              </div>
              
              <div style={{
                background: 'rgba(75, 85, 99, 0.3)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(75, 85, 99, 0.4)'
              }}>
                <div style={{
                  color: '#10b981',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>Impact:</div>
                <p style={{
                  color: '#d1d5db',
                  fontSize: '0.85rem',
                  lineHeight: 1.4
                }}>Articles reached 5,000+ readers, contributing to increased participation in tech events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 2rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(15px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <SkillsShowcase />
        </div>
      </section>

      {/* Experience Highlight */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.85) 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        backdropFilter: 'blur(15px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '1rem'
          }}>🏆 Top Performer</h2>
          <h3 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#3b82f6',
            marginBottom: '1rem'
          }}>DevOps Engineering</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{color: '#64748b'}}>💰 <strong>KES 2M+</strong> Infrastructure Cost Savings</div>
            <div style={{color: '#64748b'}}>🏢 <strong>5+</strong> Organizations Served</div>
            <div style={{color: '#64748b'}}>🎤 <strong>5+</strong> Technical Presentations</div>
          </div>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
            style={{
              background: '#3b82f6',
              color: '#ffffff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}>Explore</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.75) 0%, rgba(51, 65, 85, 0.65) 100%)',
        padding: '6rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(15px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1rem'
          }}>About Me</h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            lineHeight: 1.7
          }}>
            DevOps specialist, building solutions that impact thousands of users across Kenya. 
            Part of the growing tech talent ecosystem, passionate about continuous learning, community building, and sharing knowledge through technical presentations and mentorship.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.7) 100%)',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 2rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(15px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <ModernExperienceSection activeTab={activeExperienceTab} setActiveTab={setActiveExperienceTab} />
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.82) 0%, rgba(51, 65, 85, 0.72) 100%)',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(15px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>Featured Projects</h2>
          
          <div className="projects-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
            gap: 'clamp(1rem, 3vw, 2rem)'
          }}>
            <SimpleProjectCard 
              title="Hypervisor Deployment Automation"
              description="Automated KVM hypervisor deployment for enterprise environments"
              technologies={['KVM', 'Ansible', 'Terraform']}
              link="https://gitlab.com/cloudchuck/kvm_deplyoment"
              backgroundImage="/assets/images/projects/hypervisor-bg.jpg"
            />
            <SimpleProjectCard 
              title="Multi/Hybrid-Cloud Management Platform"
              description="Unified platform for hybrid cloud infrastructure management"
              technologies={['AWS', 'Azure', 'Python', 'Docker']}
              link="https://gitlab.com/cloudchuck/cloud_manager_stack.git"
              backgroundImage="/assets/images/projects/multicloud-bg.jpg"
            />
            <SimpleProjectCard 
              title="Terraform VM Deployment"
              description="Infrastructure as Code for automated VM provisioning"
              technologies={['Terraform', 'vSphere', 'HashiCorp']}
              link="https://gitlab.com/cloudchuck/terraform_vm_deployment.git"
              backgroundImage="/assets/images/projects/terraform-bg.jpg"
            />
            <SimpleProjectCard 
              title="OpenShift Voting Application"
              description="Containerized voting app with CI/CD on ROSA"
              technologies={['OpenShift', 'Kubernetes', 'ROSA']}
              link="https://github.com/ChuckyCharles/Voting_App_Openshift"
              backgroundImage="/assets/images/projects/kubernetes-bg.jpg"
            />
          </div>
          
          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <a href="https://gitlab.com/cloudchuck" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 background: '#3b82f6',
                 color: '#ffffff',
                 padding: '0.75rem 1.5rem',
                 borderRadius: '6px',
                 textDecoration: 'none',
                 fontSize: '0.9rem',
                 fontWeight: 600
               }}>
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.85) 100%)',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 2rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(15px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>Get In Touch</h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#9ca3af',
            marginBottom: '3rem',
            lineHeight: 1.7,
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
          }}>
            Have a project in mind or want to discuss DevOps solutions? Let's connect and build something amazing together.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: 'clamp(2rem, 5vw, 3rem)',
            alignItems: 'start'
          }}>
            {/* Contact Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <a href="mailto:ochiengcharles531@gmail.com" 
                   style={{
                     background: '#3b82f6',
                     color: '#ffffff',
                     padding: '0.75rem 1.5rem',
                     borderRadius: '6px',
                     textDecoration: 'none',
                     fontSize: '0.9rem',
                     fontWeight: 600,
                     display: 'flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     flex: 1,
                     justifyContent: 'center'
                   }}>
                  ✉️ Email Me
                </a>
                <a href="tel:+254718166201" 
                   style={{
                     background: 'transparent',
                     color: '#ffffff',
                     border: '1px solid #374151',
                     padding: '0.75rem 1.5rem',
                     borderRadius: '6px',
                     textDecoration: 'none',
                     fontSize: '0.9rem',
                     fontWeight: 600,
                     display: 'flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     flex: 1,
                     justifyContent: 'center'
                   }}>
                  📱 Call
                </a>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <a href="https://www.linkedin.com/in/charles-ochieng-177ba3253" 
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     background: 'transparent',
                     color: '#ffffff',
                     border: '1px solid #374151',
                     padding: '0.75rem 1.5rem',
                     borderRadius: '6px',
                     textDecoration: 'none',
                     fontSize: '0.9rem',
                     fontWeight: 600,
                     display: 'flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     flex: 1,
                     justifyContent: 'center'
                   }}>
                  LinkedIn
                </a>
                <a href="https://github.com/ChuckyCharles" 
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     background: 'transparent',
                     color: '#ffffff',
                     border: '1px solid #374151',
                     padding: '0.75rem 1.5rem',
                     borderRadius: '6px',
                     textDecoration: 'none',
                     fontSize: '0.9rem',
                     fontWeight: 600,
                     display: 'flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     flex: 1,
                     justifyContent: 'center'
                   }}>
                  GitHub
                </a>
              </div>
              
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                textAlign: 'center',
                padding: '1rem',
                background: '#1a1a1a',
                borderRadius: '8px',
                border: '1px solid #374151'
              }}>
                📍 Based in Nairobi, Kenya • Available for remote work worldwide
              </div>
            </div>
            
            {/* Contact Form */}
            <div style={{
              background: '#1a1a1a',
              border: '1px solid #374151',
              borderRadius: '12px',
              padding: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,

                color: '#ffffff',
                marginBottom: '1rem'
              }}>Send a Message</h3>
              <p style={{
                color: '#9ca3af',
                fontSize: '0.875rem',
                marginBottom: '1.5rem'
              }}>Let's discuss your DevOps needs</p>              
              <form ref={formRef} onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>

                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  style={{
                    background: '#374151',
                    border: '1px solid #4b5563',
                    borderRadius: '6px',
                    padding: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.875rem'
                  }}
                />
                
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  style={{
                    background: '#374151',
                    border: '1px solid #4b5563',
                    borderRadius: '6px',
                    padding: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.875rem'
                  }}
                />
                
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  style={{
                    background: '#374151',
                    border: '1px solid #4b5563',
                    borderRadius: '6px',
                    padding: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.875rem'
                  }}
                />
                
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  style={{
                    background: '#374151',
                    border: '1px solid #4b5563',
                    borderRadius: '6px',
                    padding: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    resize: 'vertical',
                    minHeight: '100px'
                  }}
                />
                
                {submitStatus === 'success' && (
                  <div style={{
                    color: '#10b981',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    padding: '0.75rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '6px',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                     Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div style={{
                    color: '#ef4444',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    padding: '0.75rem',
                    background: 'rgba(239, 68, 68, 0.1)',
                    borderRadius: '6px',
                    border: '1px solid rgba(239, 68, 68, 0.2)'
                  }}>
                    Failed to send message. Please try again or contact me directly.
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: isSubmitting ? '#6b7280' : '#3b82f6',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid transparent',
                        borderTop: '2px solid currentColor',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L2 8.667l9 4 4 9L22 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
     
    </div>
  );
}

function TechIcon({ children }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'clamp(2rem, 4vw, 2.5rem)',
      height: 'clamp(2rem, 4vw, 2.5rem)',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      borderRadius: '8px',
      fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
      fontWeight: 600,
      color: '#60a5fa',
      transition: 'all 0.3s ease'
    }}>
      {children}
    </span>
  );
}

function CodeLine({ number, children }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.25rem 0'
    }}>
      <span style={{
        color: '#6b7280',
        fontSize: '0.75rem',
        minWidth: '2rem',
        textAlign: 'right',
        userSelect: 'none'
      }}>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function SkillsShowcase() {
  const skills = [
    { name: 'Kubernetes', level: 90, icon: '☸️', color: '#326ce5' },
    { name: 'Docker', level: 85, icon: '🐳', color: '#2496ed' },
    { name: 'Terraform', level: 88, icon: '🏗️', color: '#623ce4' },
    { name: 'Ansible', level: 82, icon: '📋', color: '#ee0000' },
    { name: 'AWS', level: 85, icon: '☁️', color: '#ff9900' },
    { name: 'Python', level: 80, icon: '🐍', color: '#3776ab' },
    { name: 'OpenShift', level: 78, icon: '🔴', color: '#ee0000' },
    { name: 'VMware', level: 75, icon: '🖥️', color: '#607078' },
    { name: 'Git', level: 90, icon: '📚', color: '#f05032' },
    { name: 'Linux', level: 85, icon: '🐧', color: '#fcc624' }
  ];

  return (
    <div>
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 800,
        color: '#ffffff',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>Technical Skills</h2>
      
      <p style={{
        fontSize: '1.125rem',
        color: '#9ca3af',
        marginBottom: '3rem',
        lineHeight: 1.6,
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto 3rem auto'
      }}>Proficient in modern DevOps tools and cloud technologies</p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
        gap: 'clamp(1.5rem, 4vw, 2rem)'
      }}>
        {skills.map((skill) => (
          <div key={skill.name} style={{
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid rgba(75, 85, 99, 0.3)',
            borderRadius: '12px',
            padding: '2rem',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: `linear-gradient(135deg, ${skill.color}20 0%, ${skill.color}40 100%)`,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                border: `1px solid ${skill.color}30`
              }}>
                {skill.icon}
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.25rem'
                }}>{skill.name}</h3>
                <div style={{
                  color: skill.color,
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}>{skill.level}% Proficiency</div>
              </div>
            </div>
            
            <div style={{
              width: '100%',
              height: '8px',
              background: 'rgba(75, 85, 99, 0.3)',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${skill.level}%`,
                height: '100%',
                background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}80 100%)`,
                borderRadius: '4px',
                transition: 'width 1s ease-out'
              }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ModernExperienceSection({ activeTab, setActiveTab }) {
  return (
    <div>
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 800,
        color: '#ffffff',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>Professional Experience</h2>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '3rem',
        flexWrap: 'wrap'
      }}>
        {EXPERIENCE_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: activeTab === tab.id ? '#3b82f6' : 'rgba(75, 85, 99, 0.3)',
              color: activeTab === tab.id ? '#ffffff' : '#d1d5db',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <ExperiencePanel activeTab={activeTab} />
    </div>
  );
}

function SimpleProjectCard({ title, description, technologies, link, backgroundImage }) {
  return (
    <div style={{
      background: 'rgba(30, 41, 59, 0.8)',
      border: '1px solid rgba(75, 85, 99, 0.3)',
      borderRadius: '12px',
      overflow: 'hidden',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'translateY(-5px)';
      e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = 'none';
    }}
    onClick={() => window.open(link, '_blank')}
    >
      <div style={{
        height: '200px',
        background: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        color: 'rgba(255, 255, 255, 0.3)'
      }}>
        {!backgroundImage && '🚀'}
      </div>
      
      <div style={{
        padding: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '0.5rem'
        }}>{title}</h3>
        
        <p style={{
          color: '#9ca3af',
          fontSize: '0.9rem',
          lineHeight: 1.5,
          marginBottom: '1rem'
        }}>{description}</p>
        
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '1rem'
        }}>
          {technologies.map((tech) => (
            <span key={tech} style={{
              background: 'rgba(59, 130, 246, 0.1)',
              color: '#60a5fa',
              padding: '0.25rem 0.75rem',
              borderRadius: '12px',
              fontSize: '0.75rem',
              fontWeight: 600,
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              {tech}
            </span>
          ))}
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#60a5fa',
          fontSize: '0.875rem',
          fontWeight: 600
        }}>
          View Project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ExperiencePanel({ activeTab }) {
  if (activeTab === 'current') {
    return (
      <div className="experience-card">
        <h3>Cloud Support Engineer</h3>
        <div className="experience-meta">Angani Limited · Jul 2025 - Sep 2025</div>
        <p>Delivered infrastructure support and automation improvements while reducing escalations and optimizing resource use.</p>
      </div>
    );
  }

  if (activeTab === 'previous') {
    return (
      <div className="experience-card-grid">
        <div className="experience-card">
          <h3>Infrastructure Automation Specialist</h3>
          <div className="experience-meta">Safaricom PLC · Oct 2024 - Apr 2025</div>
          <p>Built IaC workflows and hybrid cloud deployment pipelines using Terraform, Ansible, and Kubernetes.</p>
        </div>
        <div className="experience-card">
          <h3>IT Infrastructure Engineer</h3>
          <div className="experience-meta">ICT Authority · May 2024 - Aug 2024</div>
          <p>Administered servers and supported virtualization platforms across Linux, VMware, and OpenStack environments.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="experience-card-grid">
      <div className="experience-card">
        <h3>Performance Recognition</h3>
        <p>Top performer in recent reviews with strong delivery across infrastructure automation and cloud optimization.</p>
      </div>
      <div className="experience-card">
        <h3>Cost Optimization</h3>
        <p>Implemented automation that reduced infrastructure waste and improved cloud cost efficiency.</p>
      </div>
      <div className="experience-card">
        <h3>Innovation Leadership</h3>
        <p>Helped drive adoption of modern DevOps tooling and infrastructure best practices in teams.</p>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-top">
        <span className="project-chip">Project</span>
        <span className="project-link">↗</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.technologies.map((tech) => (
          <span key={tech} className="project-tag">{tech}</span>
        ))}
      </div>
      <a href={project.link} className="project-button">View Project</a>
    </div>
  );
}

export default Home;
