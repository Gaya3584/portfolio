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

    if (buttonRef.current) {
      buttonRef.current.classList.add('active');
      setTimeout(() => {
        buttonRef.current.classList.remove('active');
      }, 500);
    }

    if (sectionRef.current) {
      if (!showIcons) {
        sectionRef.current.classList.add('active');
      } else {
        sectionRef.current.classList.remove('active');
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && connectInfoRef.current) {
            connectInfoRef.current.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (connectInfoRef.current) observer.observe(connectInfoRef.current);

    return () => {
      if (connectInfoRef.current) observer.unobserve(connectInfoRef.current);
    };
  }, []);

  return (
    <div className="mid-section" ref={sectionRef}>
      <div className="connect-container">
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
            <a href="https://github.com/Gaya3584" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-link github">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/gayathri-m-a-12a823256/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-link linkedin">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/__gayathri_m_a_?igsh=MTFyNGNyZnJzN240" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon-link instagram">
              <FaInstagram />
            </a>
            <a href="https://devpost.com/gayugayus584?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer" aria-label="Devpost" className="icon-link devpost">
              <SiDevpost />
            </a>
          </div>
        </div>
      </div>

      <div className="info-sections">
        {/* About Me Section */}
        <div className="about-section">
          <h2>About Me</h2>
          <p>I'm a 3rd year B.Tech Computer Science and Engineering student, passionate about learning and building cool stuff!</p>
          <button className="learn-more-button">Learn More</button>
        </div>

        {/* My Works Section */}
        <div className="works-section">
          <h2>My Works</h2>
          <p>Check out some of my projects and contributions across platforms!
          </p>
          <button className="work-button">See Projects</button>
        </div>
      </div>
    </div>
  );
}

export default Mid;