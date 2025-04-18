import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <div className="about-summary">
          <h2>Summary</h2>
          <p>
            Passionate B.Tech Computer Science student with experience in web development and a 
            keen interest in AI. Strong problem-solving skills with a track record of successful 
            project implementation and technical leadership.
          </p>
        </div>

        <div className="about-education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>KTU University, Federal Institute of Science and Technology, Angamaly</h3>
            <p className="education-period">2022 - Present</p>
            <p className="education-degree">B-Tech Computer Science and Engineering</p>
            <p className="education-gpa">CGPA: 8.07</p>
          </div>
          
          <div className="education-item">
            <h3>Little Flower Convent Girls Higher Secondary School, Mammiyoor</h3>
            <p className="education-period">2019 - 2021</p>
            <p className="education-degree">Higher Secondary School</p>
            <p className="education-gpa">Overall Percentage: 99.3</p>
          </div>
          
          <div className="education-item">
            <h3>Little Flower Convent Girls Higher Secondary School, Mammiyoor</h3>
            <p className="education-degree">High School</p>
            <p className="education-gpa">Overall Percentage: 90</p>
          </div>
        </div>

        <div className="about-skills">
          <h2>Technical Skills</h2>
          <div className="skills-group">
            <h3>Languages</h3>
            <div className="skills-tags">
              <span className="skill-tag">C</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">PHP</span>
            </div>
          </div>
          
          <div className="skills-group">
            <h3>Software</h3>
            <div className="skills-tags">
              <span className="skill-tag">MS Office</span>
              <span className="skill-tag">LaTeX</span>
            </div>
          </div>
        </div>

        <div className="about-trainings">
          <h2>Professional Training</h2>
          <ul className="training-list">
            <li>
              <span className="training-title">Android App Development using Java</span>
              <span className="training-org">Logix Space Technologies Pvt Ltd</span>
              <span className="training-date">December 2024</span>
            </li>
            <li>
              <span className="training-title">iOS App Development</span>
              <span className="training-org">iPlanet Education</span>
              <span className="training-date">September 2023</span>
            </li>
          </ul>
        </div>

        <div className="about-activities">
          <h2>Extra-Curricular Activities</h2>
          <ul className="activities-list">
            <li>Technical Lead – IEDC FISAT</li>
            <li>Event Coordinator – Tecverso 2024</li>
            <li>Event Team Member – FISAT Horizon Club (FHC)</li>
          </ul>
        </div>

        <div className="about-achievements">
          <h2>Hackathons</h2>
          <ul className="achievements-list">
            <li>
              <span className="achievement-title">Winner (Beginner Track)</span>
              <span className="achievement-event">Nosu AI Hackathon (2023)</span>
            </li>
            <li>
              <span className="achievement-title">Participant</span>
              <span className="achievement-event">Codedge 4.0 (24hr Hackathon), ACM Student Chapter FISAT (2023)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;