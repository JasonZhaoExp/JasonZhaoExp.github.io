import React from 'react';
import '../styles/Home.css';

const CalendarIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="40" width="160" height="140" rx="10" stroke="white" strokeWidth="8" fill="none"/>
    <rect x="20" y="70" width="160" height="0" stroke="white" strokeWidth="8"/>
    <line x1="50" y1="20" x2="50" y2="50" stroke="white" strokeWidth="8" strokeLinecap="round"/>
    <line x1="150" y1="20" x2="150" y2="50" stroke="white" strokeWidth="8" strokeLinecap="round"/>
    <circle cx="60" cy="100" r="8" fill="white"/>
    <circle cx="100" cy="100" r="8" fill="white"/>
    <circle cx="140" cy="100" r="8" fill="white"/>
    <circle cx="60" cy="140" r="8" fill="white"/>
    <circle cx="100" cy="140" r="8" fill="white"/>
    <circle cx="140" cy="140" r="8" fill="white"/>
  </svg>
);

const TechStackIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="140" width="120" height="40" rx="5" stroke="white" strokeWidth="8" fill="#2a1a3a"/>
    <rect x="50" y="80" width="100" height="40" rx="5" stroke="white" strokeWidth="8" fill="#3a2a4a"/>
    <rect x="60" y="20" width="80" height="40" rx="5" stroke="white" strokeWidth="8" fill="#4a3a5a"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="10" width="100" height="180" rx="20" stroke="white" strokeWidth="8" fill="none"/>
    <rect x="70" y="30" width="60" height="12" rx="6" stroke="white" strokeWidth="4" fill="none"/>
    <circle cx="100" cy="160" r="15" stroke="white" strokeWidth="8" fill="none"/>
    <rect x="65" y="50" width="70" height="100" rx="5" stroke="white" strokeWidth="4" fill="#2a1a3a"/>
    <line x1="80" y1="70" x2="120" y2="70" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    <line x1="80" y1="90" x2="120" y2="90" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    <line x1="80" y1="110" x2="120" y2="110" stroke="white" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Experience Section */}
      <section className="section experience">
        <div className="content-left">
          <h2>Experience</h2>
          <p className="summary">
            I am a versatile software developer skilled in Python, full-stack web development, 
            and cybersecurity. With a focus on creating efficient, user-friendly applications, 
            I’ve built data-driven tools, dynamic websites, and explored systems-level 
            programming in C++ to optimize performance. Passionate about learning and innovation, 
            I’m eager to tackle new challenges and contribute to impactful projects.
        </p>

        <ul className="highlights">
          <li>Full-stack web development with modern frameworks</li>
          <li>Proficient in Python and C++ for scalable applications</li>
          <li>Strong foundation in cybersecurity and data analysis</li>
          <li>Experience with automated deployment workflows using GitHub Pages</li>
        </ul>

        </div>
        <div className="content-right">
          <div className="section-image">
            <CalendarIcon />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section tech-stack">
        <div className="content-left">
          <div className="section-image">
            <TechStackIcon />
          </div>
        </div>
        <div className="content-right">
          <h2>My Tech Stack</h2>
          <p className="summary">
            I work with a modern tech stack that enables me to build scalable, efficient, and
            maintainable applications. My expertise spans across multiple domains, allowing me
            to choose the right tools for each specific project.
          </p>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Frontend</h3>
              <p>React, TypeScript, Next.js</p>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <p>Node.js, Python, C++</p>
            </div>
            <div className="tech-category">
              <h3>Databases</h3>
              <p>MongoDB, MySQL, PostgreSQL, Prisma</p>
            </div>
            <div className="tech-category">
              <h3>DevOps & Tools</h3>
              <p>Git/GitHub, Docker</p>
            </div>
            <div className="tech-category">
              <h3>Operating Systems</h3>
              <p>Kali Linux, Ubuntu, Windows 10/11</p>
            </div>
            <div className="tech-category">
              <h3>AI tools</h3>
              <p>ChatGPT, Cursor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <div className="content-left">
          <h2>Contact Me</h2>
          <p className="summary">
            I'm always open to discussing new projects, creative ideas, or opportunities to
            be part of your visions. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>Jason.Zhao.Exp@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>London, England</p>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <p><a href="https://github.com/JasonZhaoExp" target="_blank" rel="noopener noreferrer">JasonZhaoExp</a></p>
            </div>
            <div className="contact-item">
              <h3>Discord</h3>
              <p>insideoutsidein</p>
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="section-image">
            <PhoneIcon />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
