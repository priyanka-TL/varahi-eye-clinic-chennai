import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Activity, Eye, ShieldCheck, Stethoscope, Phone } from 'lucide-react';
import '../styles/pages.css';

const Home = () => {
  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Helmet>
        <title>Sree Varahi Eye Clinic | Premium Eye Care in T.Nagar, Chennai</title>
        <meta name="description" content="State-of-the-art eye care hospital in T.Nagar. Comprehensive treatments including LASIK, Cataract Surgery, and Pediatric Ophthalmology." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-shape"></div>
        <div className="container hero-container">
          <div className="hero-content fade-in">
            <span className="hero-subtitle">Premium Eye Care Center</span>
            <h1 className="hero-title h1">
              See the World <br />
              <span className="gradient-text">Clearly & Beautifully</span>
            </h1>
            <p className="hero-desc">
              Experience world-class ophthalmic care at Sree Varahi Eye Clinic. 
              Our advanced technology and experienced specialists ensure the best 
              vision outcomes for you and your family.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Book Appointment
              </Link>
              <a href="tel:+919360041641" className="btn btn-outline">
                <Phone size={18} /> Contact Clinic
              </a>
            </div>
          </div>
          
          <div className="hero-image-wrapper fade-in delay-200">
            {/* TODO: Replace with actual high-quality clinic/doctor hero image */}
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" 
              alt="Eye Care Specialist" 
              className="hero-image"
            />
            <div className="hero-badge">
              <div className="hero-badge-icon">
                <Award size={24} />
              </div>
              <div className="hero-badge-text">
                <strong>20+ Years</strong>
                <span>Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="section-alt padding-y-small">
        <div className="container">
          <div className="about-features" style={{marginTop: 0, padding: '2rem 0'}}>
            <div className="feature-item slide-up">
              <ShieldCheck className="feature-icon" size={32} />
              <div>
                <h4 className="h4">NABH Guidelines</h4>
                <p className="p-small">Adhering to strict safety standards</p>
              </div>
            </div>
            <div className="feature-item slide-up delay-100">
              <Activity className="feature-icon" size={32} />
              <div>
                <h4 className="h4">Advanced Tech</h4>
                <p className="p-small">Latest diagnostic & surgical equipment</p>
              </div>
            </div>
            <div className="feature-item slide-up delay-200">
              <Users className="feature-icon" size={32} />
              <div>
                <h4 className="h4">Expert Doctors</h4>
                <p className="p-small">Highly qualified specialists</p>
              </div>
            </div>
            <div className="feature-item slide-up delay-300">
              <Eye className="feature-icon" size={32} />
              <div>
                <h4 className="h4">Complete Care</h4>
                <p className="p-small">From diagnostics to surgery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header slide-up">
            <span className="section-subtitle">Our Specialities</span>
            <h2 className="section-title h2">Comprehensive Eye Care</h2>
            <p className="p-large">We offer a wide range of specialized treatments to ensure optimal eye health.</p>
          </div>
          
          <div className="services-grid">
            {[
              { title: 'Cataract Surgery', desc: 'Advanced Micro-Incision Cataract Surgery (MICS) with premium IOLs.', icon: <Eye size={32} /> },
              { title: 'LASIK & Refractive', desc: 'Freedom from glasses with safe and precise laser vision correction.', icon: <Activity size={32} /> },
              { title: 'Glaucoma Care', desc: 'Early detection and effective management of glaucoma.', icon: <ShieldCheck size={32} /> },
              { title: 'Retina Services', desc: 'Diabetic retinopathy, macular degeneration, and other retinal treatments.', icon: <Stethoscope size={32} /> },
              { title: 'Pediatric Eye Care', desc: 'Specialized eye care for children including squint correction.', icon: <Users size={32} /> },
              { title: 'Comprehensive Exam', desc: 'Thorough eye check-ups for early disease detection and prevention.', icon: <Award size={32} /> }
            ].map((service, index) => (
              <div key={index} className={`card service-card slide-up delay-${(index % 3 + 1) * 100}`}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="p-small">{service.desc}</p>
                <Link to="/services" className="service-link">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center" style={{marginTop: '3rem'}}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{background: 'var(--color-primary)', color: 'white'}}>
        <div className="container text-center slide-up">
          <h2 className="h2" style={{color: 'white', marginBottom: '1rem'}}>Ready to improve your vision?</h2>
          <p style={{marginBottom: '2rem', color: 'rgba(255,255,255,0.8)'}}>Schedule a comprehensive eye examination today.</p>
          <Link to="/contact" className="btn btn-secondary">
            Book an Appointment Online
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
