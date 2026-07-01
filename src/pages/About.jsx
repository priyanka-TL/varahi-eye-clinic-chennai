import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, Target, Eye as EyeIcon, Heart } from 'lucide-react';
import '../styles/pages.css';

const About = () => {
  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Helmet>
        <title>About Us | Sree Varahi Eye Clinic</title>
        <meta name="description" content="Learn about Sree Varahi Eye Clinic's history, mission, vision, and core values. We are dedicated to providing affordable, patient-first eye care." />
      </Helmet>

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="h1 slide-up">About Us</h1>
          <div className="breadcrumb slide-up delay-100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="slide-up">
              <span className="section-subtitle">Our History</span>
              <h2 className="section-title h2">A Legacy of Clear Vision</h2>
              <p className="p-large" style={{marginBottom: '1rem'}}>
                Sree Varahi Eye Clinic was established with a singular focus: to bring world-class, 
                affordable eye care to the heart of Chennai. Located in T.Nagar, our state-of-the-art 
                facility combines clinical excellence with compassionate care.
              </p>
              <p className="p-large" style={{marginBottom: '2rem'}}>
                Over the years, we have grown from a modest clinic to a comprehensive eye care center, 
                equipped with cutting-edge technology and staffed by renowned specialists. Our patient-first 
                approach ensures that every individual receives personalized treatment tailored to their unique needs.
              </p>
              
              <div className="about-features">
                <div className="feature-item">
                  <CheckCircle2 className="feature-icon" size={24} />
                  <span>Modern Equipment</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 className="feature-icon" size={24} />
                  <span>Experienced Doctors</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 className="feature-icon" size={24} />
                  <span>Patient First Approach</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 className="feature-icon" size={24} />
                  <span>Affordable Care</span>
                </div>
              </div>
            </div>
            
            <div className="slide-up delay-200">
              {/* TODO: Replace with real clinic reception/exterior image */}
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" 
                alt="Sree Varahi Eye Clinic Facility" 
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="services-grid">
            <div className="card slide-up">
              <div className="service-icon"><Target size={32} /></div>
              <h3 className="h3" style={{marginBottom: '1rem'}}>Our Mission</h3>
              <p className="p-small">
                To provide high-quality, comprehensive eye care services utilizing the latest technology, 
                while maintaining the highest standards of ethics and patient care, making advanced treatment 
                accessible and affordable to all.
              </p>
            </div>
            
            <div className="card slide-up delay-100">
              <div className="service-icon"><EyeIcon size={32} /></div>
              <h3 className="h3" style={{marginBottom: '1rem'}}>Our Vision</h3>
              <p className="p-small">
                To be the most trusted and preferred eye care center in Chennai, recognized for clinical 
                excellence, innovative treatments, and unwavering commitment to preserving and enhancing vision.
              </p>
            </div>

            <div className="card slide-up delay-200">
              <div className="service-icon"><Heart size={32} /></div>
              <h3 className="h3" style={{marginBottom: '1rem'}}>Core Values</h3>
              <ul className="p-small" style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <li>• Excellence in clinical care</li>
                <li>• Integrity and transparency</li>
                <li>• Compassion and empathy</li>
                <li>• Continuous innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
