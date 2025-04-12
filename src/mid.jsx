import { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import './mid.css';

function Mid() {
  const [showIcons, setShowIcons] = useState(false);
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);
  const connectInfoRef = useRef(null);

  const handleToggle = () => {
    setShowIcons(!showIcons);

    // Add animations when button is clicked
    if (buttonRef.current) {
      buttonRef.current.classList.add('active');
      setTimeout(() => {
        buttonRef.current.classList.remove('active');
      }, 500);
    }

    // Toggle active class on the section for background effect
    if (sectionRef.current) {
      if (!showIcons) {
        sectionRef.current.classList.add('active');
      } else {
        sectionRef.current.classList.remove('active');
      }
    }
  };

  // Set up IntersectionObserver to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation when .connect-info is in view
            connectInfoRef.current.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the element is visible
      }
    );

    if (connectInfoRef.current) {
      observer.observe(connectInfoRef.current);
    }

    return () => {
      if (connectInfoRef.current) {
        observer.unobserve(connectInfoRef.current);
      }
    };
  }, []);

  return (
    <div className="mid-section" ref={sectionRef}>
      <div className="connect-info" ref={connectInfoRef}>
        <p>Connect me through these:</p>
      </div>
      <div className="button-container">
        <button 
          className="connect-button" 
          onClick={handleToggle}
          ref={buttonRef}
          aria-label="Toggle social media connections"
        >
          {showIcons ? '☺️' : 'Connect'}
        </button>

        <div className={`social-icons ${showIcons ? 'active' : ''}`}>
          <a 
            href="https://github.com/Gaya3584" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="icon-link github"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/gayathri-m-a-12a823256/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-link linkedin"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://www.instagram.com/__gayathri_m_a_?igsh=MTFyNGNyZnJzN240" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="icon-link instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://devpost.com/gayugayus584?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Devpost"
            className="icon-link devpost"
          >
            <SiDevpost />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mid;