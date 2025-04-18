import React from 'react';
import './exp.css';

const Experience = () => {
  return (
    <div className="experience-wrapper">

    <div className="experience-container">
      <h1 className="experience-title">Experience & Leadership</h1>
      
      <div className="experience-timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fab fa-apple"></i>
          </div>
          <div className="timeline-content">
            <h2>iOS App Development Training</h2>
            <h3>iPlanet Education</h3>
            <p className="timeline-period">September 2023</p>
            <p>
              Underwent comprehensive training in iOS application development. Learned Swift
              programming and iOS application architecture, gaining skills needed to create 
              native iOS applications.
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <div className="timeline-content">
            <h2>Technical Lead</h2>
            <h3>IEDC FISAT</h3>
            <p className="timeline-period">2024 - Present</p>
            <p>
              Leading technical initiatives and project developments for Innovation and 
              Entrepreneurship Development Cell at Federal Institute of Science and Technology.
              Responsible for coordinating technical aspects of events and mentoring team members.
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fas fa-calendar-check"></i>
          </div>
          <div className="timeline-content">
            <h2>Event Coordinator</h2>
            <h3>Tecverso 2024</h3>
            <p className="timeline-period">2024</p>
            <p>
              Spearheaded event planning and coordination for Tecverso 2024, a major technical
              event at FISAT. Managed team members, coordinated with participants, and ensured
              smooth execution of all event activities.
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <div className="timeline-content">
            <h2>Android App Development Training</h2>
            <h3>Logix Space Technologies Pvt Ltd</h3>
            <p className="timeline-period">December 2024</p>
            <p>
              Completed intensive training in Android application development using Java.
              Gained hands-on experience in building mobile applications and understanding
              the Android ecosystem.
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fas fa-trophy"></i>
          </div>
          <div className="timeline-content">
            <h2>Winner (Beginner Track)</h2>
            <h3>Nosu AI Hackathon</h3>
            <p className="timeline-period">2025</p>
            <p>
              Led a team to victory in the beginner track of Nosu AI Hackathon, developing
              an innovative AI-based solution within the competition timeframe. Demonstrated
              strong problem-solving and technical implementation skills.
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fas fa-code"></i>
          </div>
          <div className="timeline-content">
            <h2>Participant</h2>
            <h3>Codedge 4.0 (24hr Hackathon)</h3>
            <p className="timeline-period">2025</p>
            <p>
              Participated in a 24-hour hackathon organized by ACM Student Chapter FISAT,
              working on developing a technical solution under tight time constraints. Enhanced
              skills in rapid prototyping and collaborative development.
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="timeline-content">
            <h2>Event Team Member</h2>
            <h3>FISAT Horizon Club (FHC)</h3>
            <p className="timeline-period">2024 - Present</p>
            <p>
              Actively contributed to organizing and executing various cultural and technical
              events as part of the FISAT Horizon Club. Collaborated with team members to
              ensure successful event outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experience;