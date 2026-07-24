import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';
import '../styles/pages.css';
import Seo from '../components/Seo';

const NotFound = () => {
  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Seo
        title="Page Not Found | Sree Varahi Eye Clinic"
        description="The page you're looking for doesn't exist. Visit Sree Varahi Eye Clinic's homepage for eye care services in T. Nagar, Chennai."
        path="/404"
        noindex
      />

      <div className="page-header">
        <div className="container text-center">
          <h1 className="h1 slide-up">404 — Page Not Found</h1>
          <p className="p-large slide-up delay-100" style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.85)' }}>
            Sorry, the page you're looking for doesn't exist or may have moved.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container text-center">
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">
              <Home size={18} /> Back to Home
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <Phone size={18} /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
