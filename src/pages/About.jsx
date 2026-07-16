import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, Target, Eye as EyeIcon, Heart } from 'lucide-react';
import '../styles/pages.css';
import aboutImg from '../assets/images/Tnagar_branch/drCheckingpatient.jpeg';

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
              <span className="section-subtitle">About Sree Varahi eye clinic</span>
              <h2 className="section-title h2">Quality Care & Patient Centered Services</h2>
              <p className="p-large" style={{ marginBottom: '2rem' }}>
                As the name sounds pious and pure, this center offers quality care and patient centered services. This clinic also provides ethical, economical medical treatment for all ages and surgical treatment related to cataract and glaucoma for adults and elderly by an expert ophthalmologist in the center of the city with good ambience and parking facility.
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
              <img
                src={aboutImg}
                alt="Dr. Checking Patient"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="section-header slide-up">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title h2">Services Offered</h2>
          </div>
          <div className="slide-up" style={{ display: 'flex', justifyContent: 'center' }}>
            <ul className="p-large" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: 'var(--color-bg)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', maxWidth: '800px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 className="text-primary" size={24} />
                <span>Glasses checkup and dispensing of glasses</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 className="text-primary" size={24} />
                <span>Cataract surgery</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 className="text-primary" size={24} />
                <span>Glaucoma screening and management</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 className="text-primary" size={24} />
                <span>Computer vision syndrome management and counseling</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 className="text-primary" size={24} />
                <span>Diabetic eye screening</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div className="card slide-up">
              <div className="service-icon"><Target size={32} /></div>
              <h3 className="h3" style={{ marginBottom: '1rem' }}>Our Mission</h3>
              <p className="p-small">
                To provide high-quality, comprehensive eye care services utilizing the latest technology,
                while maintaining the highest standards of ethics and patient care, making advanced treatment
                accessible and affordable to all.
              </p>
            </div>

            <div className="card slide-up delay-100">
              <div className="service-icon"><EyeIcon size={32} /></div>
              <h3 className="h3" style={{ marginBottom: '1rem' }}>Our Vision</h3>
              <p className="p-small">
                To be the most trusted and preferred eye care center in Chennai, recognized for clinical
                excellence, innovative treatments, and unwavering commitment to preserving and enhancing vision.
              </p>
            </div>

            <div className="card slide-up delay-200">
              <div className="service-icon"><Heart size={32} /></div>
              <h3 className="h3" style={{ marginBottom: '1rem' }}>Core Values</h3>
              <ul className="p-small" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
