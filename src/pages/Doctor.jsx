import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Microscope, BookOpen, Stethoscope, Calendar, Phone, Activity } from 'lucide-react';
import '../styles/pages.css';

const Doctor = () => {
  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Helmet>
        <title>Our Doctor | Sree Varahi Eye Clinic</title>
        <meta name="description" content="Meet our experienced eye specialist at Sree Varahi Eye Clinic. Highly qualified in modern ophthalmic procedures, LASIK, and cataract surgery." />
        {/* TODO: Add Doctor Schema here if applicable */}
      </Helmet>

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="h1 slide-up">Meet Our Doctor</h1>
          <div className="breadcrumb slide-up delay-100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Doctor</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="doctor-profile-grid">
            
            {/* Left Sidebar: Photo & Quick Info */}
            <div className="slide-up">
              <div className="doctor-image-container mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80" 
                  alt="Dr. Jayalakshmi Govindan" 
                  className="doctor-image"
                />
              </div>
              
              <div className="card text-center" style={{marginTop: '1.5rem'}}>
                <h2 className="doctor-name h3">Dr. Jayalakshmi Govindan</h2>
                <p className="doctor-specialty text-primary">Chief Ophthalmologist & Surgeon</p>
                <div className="doctor-stats">
                  <div className="stat">
                    <h4>20+</h4>
                    <span>Years Exp.</span>
                  </div>
                  <div className="stat">
                    <h4>10k+</h4>
                    <span>Surgeries</span>
                  </div>
                </div>
                
                <hr style={{margin: '1.5rem 0', borderColor: 'var(--color-border)', borderStyle: 'solid'}} />
                
                <div style={{textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                  <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                    <Stethoscope size={18} className="text-secondary" />
                    <span className="p-small">Reg No: 54321</span>
                  </div>
                  <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                    <BookOpen size={18} className="text-secondary" />
                    <span className="p-small">Languages: English, Tamil</span>
                  </div>
                </div>

                <Link to="/contact" className="btn btn-primary btn-block" style={{marginTop: '1.5rem'}}>
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Right Content: Bio, Education, etc. */}
            <div className="doctor-content slide-up delay-200">
              <h3 className="h2 text-primary">Biography</h3>
              <p className="p-large" style={{marginBottom: '1rem'}}>
                Dr. Jayalakshmi Govindan is a highly esteemed ophthalmologist with years of experience in diagnosing and treating a wide array of eye conditions. Dedicated to restoring and preserving vision, she employs the latest surgical techniques and state-of-the-art technology to ensure optimal patient outcomes.
              </p>
              <p className="p-large" style={{marginBottom: '2rem'}}>
                Known for a compassionate, patient-centric approach, Dr. Jayalakshmi Govindan takes the time to understand each patient's unique needs, carefully explaining diagnoses and treatment options. Her expertise spans advanced cataract micro-surgery, LASIK, and comprehensive glaucoma management.
              </p>

              <div className="services-grid" style={{marginBottom: '2rem'}}>
                <div className="card">
                  <h4 className="h4" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
                    <GraduationCap className="text-secondary" /> Education
                  </h4>
                  <ul className="timeline">
                    <div className="timeline-item">
                      <strong>Fellowship in Cornea & Refractive Surgery</strong>
                      <p className="p-small">Institute Name, Year</p>
                    </div>
                    <div className="timeline-item">
                      <strong>MS - Ophthalmology</strong>
                      <p className="p-small">University Name, Year</p>
                    </div>
                    <div className="timeline-item">
                      <strong>MBBS</strong>
                      <p className="p-small">Medical College Name, Year</p>
                    </div>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="h4" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
                    <Award className="text-secondary" /> Achievements & Awards
                  </h4>
                  <ul className="timeline">
                    <div className="timeline-item">
                      <strong>Best Surgeon Award</strong>
                      <p className="p-small">Awarding Body, Year</p>
                    </div>
                    <div className="timeline-item">
                      <strong>Excellence in Ophthalmology</strong>
                      <p className="p-small">Organization, Year</p>
                    </div>
                  </ul>
                </div>
              </div>

              <div className="card">
                <h4 className="h4" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
                  <Microscope className="text-secondary" /> Professional Memberships
                </h4>
                <ul className="memberships-list" style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text)'}}>
                  <li>• All India Ophthalmological Society (AIOS)</li>
                  <li>• Tamil Nadu Ophthalmic Association (TNOA)</li>
                  <li>• Medical Council of India (MCI)</li>
                  <li>• Indian Medical Association (IMA)</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
