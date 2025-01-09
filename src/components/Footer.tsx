import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return(
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>
            © {new Date().getFullYear()} Jason Zhao. 
            This website is licensed under the MIT License.
          </p>
        </div>
        <div className="social-links">
          <a href="https://github.com/JasonZhaoExp" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;