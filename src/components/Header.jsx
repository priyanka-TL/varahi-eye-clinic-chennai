import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import '../styles/components.css';
import logoUrl from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctor', path: '/doctor' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled glass' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logoUrl} alt="Sree Varahi Eye Clinic" className="logo-img" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="header-actions desktop-only">
          <a href="tel:+919360041641" className="contact-link">
            <Phone size={16} />
            <span>+91 93600 41641</span>
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm">
            <Calendar size={18} />
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-actions">
            <Link to="/contact" className="btn btn-primary btn-block">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
