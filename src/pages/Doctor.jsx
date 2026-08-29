import React from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Microscope, BookOpen, Stethoscope, Calendar, Phone, Activity } from 'lucide-react';
import '../styles/pages.css';
import doctorImg from '../assets/images/doctor_photo/drJayalakshmiMainPage.jpg';
import doctorImg2 from '../assets/images/doctor_photo/doctor1.png';
import doctorImg3 from '../assets/images/doctor_photo/doctor2.png';
import Seo from '../components/Seo';
import { buildPhysicianSchema, buildBreadcrumbSchema } from '../config/seoHelpers';

const Doctor = () => {
  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Seo
        title="Dr. Jeyalakshmi Govindan | Cataract & Glaucoma Specialist, Chennai"
        description="Dr. Jeyalakshmi Govindan (MBBS DO DNB) is a senior ophthalmic surgeon with 20+ years experience in cataract & glaucoma care, trained at Sankara Nethralaya. Consults across T. Nagar, Kilpauk, Taramani, Virugambakkam & Anna Nagar, Chennai."
        path="/doctor"
        jsonLd={[
          buildPhysicianSchema(),
          buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Doctor', path: '/doctor' }]),
        ]}
      />

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
              <style>
                {`
                  @keyframes fade-img {
                    0%, 40% { opacity: 1; }
                    50%, 90% { opacity: 0; }
                    100% { opacity: 1; }
                  }
                  .crossfade-img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                  }
                  .img-top {
                    z-index: 2;
                    object-position: bottom right;
                    animation: fade-img 10s infinite;
                  }
                  .img-bottom {
                    z-index: 1;
                    object-position: center;
                  }
                `}
              </style>
              <div className="doctor-image-container mb-4" style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
                {/* Background Image */}
                <img
                  src={doctorImg3}
                  alt="Dr. Jeyalakshmi Govindan consulting"
                  className="crossfade-img img-bottom"
                  loading="lazy"
                />
                {/* Foreground Image */}
                <img
                  src={doctorImg2}
                  alt="Dr. Jeyalakshmi Govindan in clinic"
                  className="crossfade-img img-top"
                  loading="lazy"
                />
              </div>

              <div className="card text-center" style={{ marginTop: '1.5rem' }}>
                <h2 className="doctor-name h3">Dr. Jeyalakshmi Govindan</h2>
                <p className="doctor-specialty text-primary">Cataract & Glaucoma specialist</p>
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

                <hr style={{ margin: '1.5rem 0', borderColor: 'var(--color-border)', borderStyle: 'solid' }} />

                <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <Stethoscope size={18} className="text-secondary" />
                    <span className="p-small">Reg No: 67048</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <BookOpen size={18} className="text-secondary" />
                    <span className="p-small">Languages: Tamil, English, Hindi, Telugu</span>
                  </div>
                </div>

                <Link to="/contact" className="btn btn-primary btn-block" style={{ marginTop: '1.5rem' }}>
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Right Content: Bio, Education, etc. */}
            <div className="doctor-content slide-up delay-200">
              <h3 className="h2 text-primary">Biography</h3>
              <p className="p-large" style={{ marginBottom: '1.5rem' }}>
                Dr. Jeyalakshmi Govindan MBBS DO DNB is a senior ophthalmic surgeon with 20 years experience in the field of ophthalmology and specialized in cataract and glaucoma. Well trained from prestigious institutes like RIOGOH, Chennai, ICare Eye hospital & PG research institute, Noida, Aravind eye hospital, Tirunelveli, Eye associates, Sydney and Sankara Nethralaya, Chennai.
              </p>

              <p className="p-large" style={{ marginBottom: '1.5rem' }}>
                She has served as senior consultant in Sankara Nethralaya for 12 years and has trained many budding ophthalmologists. She is known for handling any kind of patients with smile and patience. She is very approachable and can manage any complicated cataract and glaucoma cases with precision using the latest technology and equipment.
              </p>
              <p className="p-large" style={{ marginBottom: '2rem' }}>
                Dr. Jeyalakshmi also offers her expert opinion in glaucoma at <Link to="/contact#taramani">VHS, Taramani</Link>, <Link to="/contact#annanagar">Dhanvantri Eye Care, Anna Nagar</Link> & <Link to="/contact#virugambakkam">Keshava Eye Care, Virugambakkam</Link>, all in Chennai.
              </p>

              <div className="doctor-cards-grid">
                <div className="card">
                  <h4 className="h4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <GraduationCap className="text-secondary" /> Education & Training
                  </h4>
                  <ul className="timeline">
                    <div className="timeline-item">
                      <strong>MBBS DO DNB</strong>
                    </div>
                    <div className="timeline-item">
                      <strong>Trained at Prestigious Institutes:</strong>
                      <p className="p-small">RIOGOH, Chennai</p>
                      <p className="p-small">ICare Eye hospital, Noida</p>
                      <p className="p-small">Aravind eye hospital, Tirunelveli</p>
                      <p className="p-small">Eye associates, Sydney</p>
                      <p className="p-small">Sankara Nethralaya, Chennai</p>
                    </div>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="h4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <Award className="text-secondary" /> Experience
                  </h4>
                  <ul className="timeline">
                    <div className="timeline-item">
                      <strong>Senior Consultant (12 Years)</strong>
                      <p className="p-small">Sankara Nethralaya, Chennai</p>
                    </div>
                    <div className="timeline-item">
                      <strong>Expert Glaucoma Consultant</strong>
                      <p className="p-small">VHS, Taramani</p>
                      <p className="p-small">Dhanvantri eye care, Anna nagar</p>
                      <p className="p-small">Keshava eye care, Virugambakkam</p>
                    </div>
                  </ul>
                </div>
              </div>

              <div className="card">
                <h4 className="h4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Microscope className="text-secondary" /> Professional Memberships
                </h4>
                <ul className="memberships-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text)' }}>
                  <li>• All India Ophthalmological Society (AIOS)</li>
                  <li>• Tamil Nadu Ophthalmic Association (TNOA)</li>
                  <li>• Medical Council of India (MCI)</li>
                  <li>• Indian Medical Association (IMA)</li>
                  <li>• Glaucoma Society of India (GSI)</li>
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
