import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-categories">
        <Link to="/projects/python" className="category-card">
          <h2>Python</h2>
          <p>Machine Learning, Data Science, and Automation</p>
        </Link>
        <Link to="/projects/web" className="category-card">
          <h2>Web Development</h2>
          <p>Full-stack applications and websites</p>
        </Link>
        <Link to="/projects/cpp" className="category-card">
          <h2>C++</h2>
          <p>System Programming and Game Development</p>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
