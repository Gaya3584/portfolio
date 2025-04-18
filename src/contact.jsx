import React, { useState } from 'react';
import './contact.css';
import { FaGithub, FaLinkedin, FaInstagram,FaMapMarkerAlt,FaPhone,FaEnvelope } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you would typically handle form submission
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Message sent successfully! I will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get In Touch</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
          <div className="info-icon">
  <FaMapMarkerAlt />
</div>

            <div className="info-details">
              <h3>Location</h3>
              <p>Moothedath House, Puthanpalli P O, Guruvayoor, Thrissur</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div className="info-details">
              <h3>Phone</h3>
              <p><a href="tel:8714724982">8714724982</a></p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
          <FaEnvelope/>    
            </div>
            <div className="info-details">
              <h3>Email</h3>
              <p><a href="mailto:gayugayus584@gmail.com">gayugayus584@gmail.com</a></p>
            </div>
          </div>
          
          <div className="social-links">
  <h3>Connect me through these:</h3>
  <div className="connect-container">
    <div className="button-container">
      <button 
        className="connect-button" 
        onClick={() => setShowIcons(!showIcons)}
        aria-label="Toggle social media connections"
      >
        {showIcons ? '☺️' : 'Connect'}
      </button>

      <div className={`social-icons ${showIcons ? 'active' : ''}`}>
        <a href="https://github.com/Gaya3584" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-link github">
        <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/gayathri-m-a-12a823256/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-link linkedin">
      <FaLinkedin/>
        </a>
        <a href="https://www.instagram.com/__gayathri_m_a_?igsh=MTFyNGNyZnJzN240" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon-link instagram">
      <FaInstagram/>
        </a>
        <a href="https://devpost.com/gayugayus584?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer" aria-label="Devpost" className="icon-link devpost">
<SiDevpost/>
        </a>
      </div>
    </div>
  </div>
</div>

        </div>
        
        <div className="contact-form-container">
          <h2>Send a Message</h2>
          {formStatus.submitted && (
            <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
              {formStatus.message}
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Your Message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;