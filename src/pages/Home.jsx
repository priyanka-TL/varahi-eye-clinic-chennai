import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Activity, Eye, ShieldCheck, Stethoscope, Phone } from 'lucide-react';
import '../styles/pages.css';
import doctorImg from '../assets/images/doctor_photo/drJayalakshmiMainPage.png';

const Home = () => {
  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Helmet>
        <title>Sree Varahi Eye Clinic | Premium Eye Care in T.Nagar, Chennai</title>
        <meta name="description" content="State-of-the-art eye care hospital in Chennai. Comprehensive treatments including Cataract Surgery, Glaucoma Management, Diabetic Eye Screening, and Computer Vision Syndrome Counseling." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-shape"></div>
        <div className="container hero-container">
          <div className="hero-content fade-in">
            <span className="hero-subtitle">Premium Eye Care Center</span>
            <h1 className="hero-title h1">
              Trusted Eye Care <br />
              <span className="gradient-text">for You & Your Family</span>
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

            <div className="hero-trust" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem', alignItems: 'center', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={18} className="text-secondary" />
                <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>10,000+ Happy Patients</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>⭐</span>
                <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>4.9 Google Rating</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={18} className="text-secondary" />
                <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>Same-Day Appointments</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper fade-in delay-200">
            {/* Doctor hero image */}
            <img
              src={doctorImg}
              alt="Dr. Jeyalakshmi Govindan"
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
          <div className="about-features" style={{ marginTop: 0, padding: '2rem 0' }}>
            <div className="feature-item slide-up">
              <ShieldCheck className="feature-icon" size={32} />
              <div>
                <h4 className="h4">Patient First</h4>
                <p className="p-small">Dedicated to personalized care</p>
              </div>
            </div>
            <div className="feature-item slide-up delay-100">
              <Activity className="feature-icon" size={32} />
              <div>
                <h4 className="h4">Modern Equipment</h4>
                <p className="p-small">Latest diagnostic technology</p>
              </div>
            </div>
            <div className="feature-item slide-up delay-200">
              <Users className="feature-icon" size={32} />
              <div>
                <h4 className="h4">Expert Doctor</h4>
                <p className="p-small">Highly qualified specialist</p>
              </div>
            </div>
            <div className="feature-item slide-up delay-300">
              <Award className="feature-icon" size={32} />
              <div>
                <h4 className="h4">Affordable Care</h4>
                <p className="p-small">Ethical and economical treatment</p>
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
              { title: 'Glasses Checkup & Dispensing', desc: 'Comprehensive eye health check-up to ensure accurate prescription and best fit for glasses.', icon: <Award size={32} /> },
              { title: 'Cataract Surgery', desc: 'Advanced Micro-Incision Cataract Surgery (MICS) with the latest phacoemulsification technology.', icon: <Eye size={32} /> },
              { title: 'Glaucoma Screening & Management', desc: 'Early diagnosis and advanced management to prevent optic nerve damage.', icon: <ShieldCheck size={32} /> },
              { title: 'Computer Vision Syndrome', desc: 'Expert care and counseling for digital eye strain and related symptoms.', icon: <Activity size={32} /> },
              { title: 'Diabetic Eye Screening', desc: 'Specialized screening to detect and manage diabetic retinopathy early.', icon: <Stethoscope size={32} /> }
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

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
        <div className="container text-center slide-up">
          <h2 className="h2" style={{ color: 'white', marginBottom: '1rem' }}>Ready to improve your vision?</h2>
          <p style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)' }}>Schedule a comprehensive eye examination today.</p>
          <Link to="/contact" className="btn btn-secondary">
            Book an Appointment Online
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
