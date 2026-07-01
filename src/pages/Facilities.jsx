import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Activity, Car, Monitor, ShieldCheck, Thermometer, Video, Wind, Glasses } from 'lucide-react';
import '../styles/pages.css';

const Facilities = () => {
  const facilities = [
    { name: 'Modular Operation Theatre', icon: <Activity size={32} />, desc: 'State-of-the-art sterile environment for all ocular surgeries ensuring zero infection rates.' },
    { name: 'Digital Diagnostics Lab', icon: <Monitor size={32} />, desc: 'Advanced imaging and diagnostic tools for precise eye condition assessments.' },
    { name: 'In-house Optical Store', icon: <Glasses size={32} />, desc: 'Wide range of branded frames, lenses, and contact lenses.' },
    { name: 'Online Consultation', icon: <Video size={32} />, desc: 'Tele-ophthalmology services for remote patient care and follow-ups.' },
    { name: 'Cashless Insurance', icon: <ShieldCheck size={32} />, desc: 'Tie-ups with major TPAs and insurance providers for hassle-free processing.' },
    { name: 'Central Air Conditioning', icon: <Wind size={32} />, desc: 'Fully air-conditioned premises for patient comfort.' },
    { name: 'Spacious Waiting Lounge', icon: <Thermometer size={32} />, desc: 'Comfortable waiting area with amenities and entertainment.' },
    { name: 'Dedicated Parking', icon: <Car size={32} />, desc: 'Ample parking space available for patients and visitors.' }
  ];

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Helmet>
        <title>Facilities | Sree Varahi Eye Clinic</title>
        <meta name="description" content="Explore the world-class facilities at Sree Varahi Eye Clinic including our modular OT, digital diagnostics, optical store, and cashless insurance support." />
      </Helmet>

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="h1 slide-up">Our Facilities</h1>
          <div className="breadcrumb slide-up delay-100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Facilities</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header slide-up">
            <span className="section-subtitle">Infrastructure</span>
            <h2 className="section-title h2">World-Class Infrastructure</h2>
            <p className="p-large">Designed for patient safety, comfort, and clinical excellence.</p>
          </div>

          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className={`card facility-card slide-up delay-${(index % 4) * 100}`}>
                <div className="facility-icon">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="h4" style={{marginBottom: '0.5rem', color: 'var(--color-primary)'}}>{facility.name}</h3>
                  <p className="p-small">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="about-grid">
            <div className="slide-up">
              {/* TODO: Add machine image */}
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80" 
                alt="Advanced Eye Care Equipment" 
                className="about-image"
              />
            </div>
            <div className="slide-up delay-200">
              <span className="section-subtitle">Technology</span>
              <h2 className="section-title h2">Advanced Medical Equipment</h2>
              <p className="p-large" style={{marginBottom: '1rem'}}>
                We continually invest in the latest ophthalmic technology to provide the most accurate diagnoses and effective treatments.
              </p>
              <ul className="p-large" style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                <li>• <strong>OCT (Optical Coherence Tomography):</strong> High-resolution cross-sectional imaging of the retina.</li>
                <li>• <strong>Visual Field Analyzer:</strong> Advanced perimetry for glaucoma detection.</li>
                <li>• <strong>Corneal Topographer:</strong> Precision mapping of the corneal surface for LASIK.</li>
                <li>• <strong>Phacoemulsification System:</strong> State-of-the-art system for safe cataract removal.</li>
                <li>• <strong>Fundus Camera:</strong> Detailed imaging of the interior surface of the eye.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
