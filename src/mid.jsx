import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import './mid.css';

function Mid() {
  return (
    <div className="mid-section">
      <div className="social-icons">
        <a href="https://github.com/Gaya3584" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/gayathri-m-a-12a823256/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/__gayathri_m_a_?igsh=MTFyNGNyZnJzN240" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://devpost.com/gayugayus584?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer"><SiDevpost /></a>
      </div>
    </div>
  );
}

export default Mid;
