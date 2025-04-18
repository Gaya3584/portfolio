import React, { useState } from 'react';
import './proj.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "FISAT Forge",
      description: "A platform connecting FISAT alumni and student communities for mentorship and career guidance.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      tools: ["Visual Studio Code", "GitLab CI/CD"],
      features: [
        "Login system for students and alumni",
        "Profile searching and following",
        "Community discussion forum",
        "Job posting and application system",
        "Real-time chat",
        "Admin features"
      ],
      link: "https://gitlab.com/group-42592305/fisat-forge",
      linkText: "GitLab Repository",
      category: "web"
    },
    {
      id: 2,
      title: "Feel It",
      description: "AI-based web application that detects user emotions through text and recommends music.",
      techStack: ["React.js", "TensorFlow.js", "Node.js", "Express"],
      tools: ["Visual Studio Code", "GitHub Actions"],
      features: [
        "Text and voice input for emotion detection",
        "Music recommendations based on emotional state",
        "Music playback integration"
      ],
      link: "https://feelit-nu.vercel.app/",
      linkText: "Live Site",
      category: "ai"
    },
    {
      id: 3,
      title: "IEDC FISAT Website",
      description: "Contributed to development and maintenance of the organization's official website.",
      techStack: ["React"],
      tools: ["Visual Studio Code"],
      features: [
        "Official IEDC information portal",
        "Event showcase",
        "Team details"
      ],
      link: "https://iedc.fisat.ac.in/",
      linkText: "Official Website",
      category: "web"
    },
    {
      id: 4,
      title: "Flavor Files",
      description: "A recipe management website allowing users to browse, rate, and add recipes.",
      techStack: ["React", "Node.js", "Express", "MySQL", "PHP"],
      tools: ["Git", "Visual Studio Code"],
      features: [
        "User authentication",
        "Category-wise filtering",
        "Recipe rating system",
        "Add and view recipes"
      ],
      category: "web"
    },
    {
      id: 5,
      title: "Tecverso '24",
      description: "Event registration and information portal for Tecverso 2024 conducted by IEDC FISAT.",
      techStack: ["React", "Node.js"],
      tools: ["Git", "Visual Studio Code"],
      features: [
        "Event registration",
        "Schedule display",
        "Speaker information",
        "FAQ section"
      ],
      link: "https://tecverso-iedc-fisat.vercel.app/",
      linkText: "Live Site",
      category: "web"
    },
    {
      id: 6,
      title: "Homemade Heaven",
      description: "A platform to buy and sell handmade items, supporting local artisans and craft communities.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      tools: ["Git", "Visual Studio Code"],
      features: [
        "Product listings",
        "User profiles",
        "Cart functionality",
        "Order management"
      ],
      link: "https://github.com/Hawk1509/hackathon",
      linkText: "GitHub",
      category: "web"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className='wrapper'>
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      
      <div className="projects-filter">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
          onClick={() => setActiveFilter('web')}
        >
          Web Development
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
          onClick={() => setActiveFilter('ai')}
        >
          AI Projects
        </button>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>
            </div>
            
            <div className="project-body">
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                <h3>Tech Stack</h3>
                <div className="tech-tags">
                  {project.techStack.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-tools">
                <h3>Tools</h3>
                <div className="tools-tags">
                  {project.tools.map((tool, index) => (
                    <span className="tool-tag" key={index}>{tool}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-features">
                <h3>Features</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="project-footer">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  {project.linkText} <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;