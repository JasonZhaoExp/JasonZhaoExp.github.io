import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className="header">
      <div className={`mobile-background ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}></div>
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" className="logo-image" />
          Jason Zhao
        </Link>
        
        <button className="burger-menu" onClick={toggleMobileMenu}>
          <span className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About me</Link>
          <div className="dropdown">
            <Link to="/projects">Projects</Link>
            <div className="dropdown-content">
              <Link to="/projects/python">Python</Link>
              <Link to="/projects/web">Web</Link>
              <Link to="/projects/cpp">C++</Link>
            </div>
          </div>
          <Link to="/contact">Contact me</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
