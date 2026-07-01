import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import '../styles/components.css';
import logoUrl from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand Col */}
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <img src={logoUrl} alt="Sree Varahi Eye Clinic" className="logo-img" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>
            <p className="footer-desc">
              Providing comprehensive, world-class eye care with advanced technology and a patient-first approach. Your vision is our priority.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/doctor">Our Doctor</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="footer-col">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Cataract Surgery</Link></li>
              <li><Link to="/services">LASIK & Refractive</Link></li>
              <li><Link to="/services">Glaucoma Treatment</Link></li>
              <li><Link to="/services">Retina Care</Link></li>
              <li><Link to="/services">Pediatric Ophthalmology</Link></li>
              <li><Link to="/services">Optical Store</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-col">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={20} className="icon" />
                <span>
                  <strong>Aikiya health care, Flat GB, Swathi court</strong><br />
                  43/2, Vijayaraghava Rd, T. Nagar, Chennai, Tamil Nadu 600017
                </span>
              </li>
              <li>
                <Phone size={20} className="icon" />
                <a href="tel:+919360041641">+91 93600 41641</a>
              </li>
              <li>
                <Mail size={20} className="icon" />
                <a href="mailto:info@sreevarahieyeclinic.com">info@sreevarahieyeclinic.com</a>
              </li>
              <li>
                <Clock size={20} className="icon" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM<br />Sun: By Appointment</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Sree Varahi Eye Clinic. All rights reserved.</p>
            <p className="developer-credit" style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-lighter)' }}>
              Designed & Developed by Priyanka Pradeep | <a href="mailto:hello.priyankapradeepng@gmail.com" style={{ textDecoration: 'underline' }}>hello.priyankapradeepng@gmail.com</a>
            </p>
          </div>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
