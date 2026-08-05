import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Target, Eye as EyeIcon, Heart } from 'lucide-react';
import '../styles/pages.css';
import aboutImg from '../assets/images/doctor_photo/aboutPage.jpg';
import Seo from '../components/Seo';
import { buildBreadcrumbSchema } from '../config/seoHelpers';

const About = () => {
  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Seo
        title="About Us | Patient-First Eye Care in T. Nagar | Sree Varahi Eye Clinic"
        description="Sree Varahi Eye Clinic in T. Nagar, Chennai offers ethical, affordable eye care with a patient-first approach — cataract & glaucoma treatment by an expert ophthalmologist in the heart of the city."
        path="/about"
        jsonLd={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])}
      />

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
                As the name sounds pious and pure, this center offers quality care and patient centered services. This clinic also provides ethical, economical medical treatment for all ages, including specialized Pediatric Eye care and surgical treatment related to cataract and glaucoma for adults and elderly by an expert ophthalmologist in the center of the city with good ambience and parking facility.
              </p>

              <div className="about-features">
                <div className="feature-item">
                  <CheckCircle2 className="feature-icon" size={24} />
                  <span>Less Waiting Time</span>
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
                alt="Doctor examining a patient's eye at Sree Varahi Eye Clinic, T. Nagar, Chennai"
                className="about-image"
                width="1189"
                height="1323"
                loading="lazy"
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
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 className="text-primary" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <Link to="/services#glasses-checkup">Glasses checkup and dispensing of glasses</Link>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 className="text-primary" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <Link to="/services#cataract-surgery">Cataract & Glaucoma surgery</Link>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 className="text-primary" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <Link to="/services#glaucoma-screening">Glaucoma screening and management</Link>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 className="text-primary" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <Link to="/services#computer-vision-syndrome">Computer vision syndrome management and counseling</Link>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 className="text-primary" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <Link to="/services#diabetic-eye-screening">Diabetic eye screening</Link>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 className="text-primary" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <Link to="/services#pediatric-eye-care">Pediatric Eye care</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div className="card slide-up" style={{ textAlign: 'center', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#ffe4d6' }}>
              <div style={{ width: '72px', height: '72px', background: '#ffffff', color: '#F86939', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <Target size={36} />
              </div>
              <h3 className="h3" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Our Mission</h3>
              <p className="p-small" style={{ lineHeight: '1.7' }}>
                To provide <strong style={{ color: 'var(--color-primary)', fontWeight: '600' }}>high-quality, comprehensive eye care</strong> services utilizing the <strong style={{ color: 'var(--color-primary)', fontWeight: '600' }}>latest technology</strong>,
                while maintaining the highest standards of <strong style={{ color: 'var(--color-primary)', fontWeight: '600' }}>ethics and patient care</strong>, making advanced treatment
                <strong style={{ color: 'var(--color-primary)', fontWeight: '600' }}> accessible and affordable</strong> to all.
              </p>
            </div>

            <div className="card slide-up delay-100" style={{ textAlign: 'center', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#e0f2f1' }}>
              <div style={{ width: '72px', height: '72px', background: '#ffffff', color: 'var(--color-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <EyeIcon size={36} />
              </div>
              <h3 className="h3" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Our Vision</h3>
              <p className="p-small" style={{ lineHeight: '1.7' }}>
                To be the <strong style={{ color: 'var(--color-primary)', fontWeight: '600' }}>most trusted and preferred</strong> eye care center in Chennai, recognized for <strong style={{ color: 'var(--color-primary)', fontWeight: '600' }}>clinical excellence</strong>, <strong style={{ color: 'var(--color-primary)', fontWeight: '600' }}>innovative treatments</strong>, and unwavering commitment to <strong style={{ color: 'var(--color-primary)', fontWeight: '600' }}>preserving and enhancing vision</strong>.
              </p>
            </div>

            <div className="card slide-up delay-200" style={{ textAlign: 'center', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#e3ebff' }}>
              <div style={{ width: '72px', height: '72px', background: '#ffffff', color: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <Heart size={36} />
              </div>
              <h3 className="h3" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Core Values</h3>
              <ul className="p-small" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left', width: '100%', marginTop: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={18} color="#3b82f6" /> Excellence in clinical care</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={18} color="#3b82f6" /> Integrity and transparency</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={18} color="#3b82f6" /> Compassion and empathy</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={18} color="#3b82f6" /> Continuous innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
