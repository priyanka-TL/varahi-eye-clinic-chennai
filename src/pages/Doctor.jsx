import React from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Microscope, BookOpen, Stethoscope, Calendar, Phone, Activity, MapPin } from 'lucide-react';
import '../styles/pages.css';
import doctorImg from '../assets/images/doctor_photo/drJayalakshmiMainPage.jpg';
import doctorImg2 from '../assets/images/doctor_photo/doctor1.png';
import doctorImg3 from '../assets/images/doctor_photo/doctor2.png';
import Seo from '../components/Seo';
import { buildPhysicianSchema, buildBreadcrumbSchema } from '../config/seoHelpers';

const ConsultationLocationsCard = () => (
  <div className="card" style={{ marginTop: '1.5rem' }}>
    <h4 className="h4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <MapPin className="text-secondary" /> Consultation Locations
    </h4>
    <p className="p-large" style={{ marginBottom: '1.5rem' }}>
      Dr. Jeyalakshmi provides comprehensive ophthalmic consultations and specialist cataract and glaucoma care at prominent locations in Chennai:
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
      <Link to="/contact#taramani" className="location-card">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
          <MapPin className="text-primary" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h5 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', color: 'var(--color-text)' }}>VHS</h5>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Taramani</p>
          </div>
        </div>
      </Link>
      <Link to="/contact#annanagar" className="location-card">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
          <MapPin className="text-primary" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h5 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', color: 'var(--color-text)' }}>Dhanvantri Eye Care</h5>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Anna Nagar</p>
          </div>
        </div>
      </Link>
      <Link to="/contact#virugambakkam" className="location-card">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
          <MapPin className="text-primary" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h5 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', color: 'var(--color-text)' }}>Keshava Eye Care</h5>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Virugambakkam</p>
          </div>
        </div>
      </Link>
    </div>
    <style>
      {`
        .location-card {
          display: block;
          padding: 1rem;
          background-color: var(--color-bg, #ffffff);
          border-radius: var(--radius-md);
          text-decoration: none;
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }
        .location-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-sm);
          border-color: var(--color-primary);
        }
        .location-card:hover .text-primary {
          color: var(--color-secondary);
        }
      `}
    </style>
  </div>
);

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

              {/* Consultation Locations (Desktop Only) */}
              <div className="hide-on-mobile slide-up delay-300">
                <ConsultationLocationsCard />
              </div>
            </div>

            {/* Right Content: Bio, Education, etc. */}
            <div className="doctor-content slide-up delay-200">
              <h3 className="h2 text-primary">Biography</h3>

              <p className="p-large" style={{ marginBottom: '1.5rem' }}>
                <strong>Dr. Jeyalakshmi Govindan, MBBS, DO, DNB</strong>, is a senior ophthalmic surgeon with 20 years of experience in ophthalmology, with special expertise in the diagnosis and management of cataract and glaucoma. She is particularly experienced in managing complex cataract and glaucoma cases, combining meticulous clinical assessment, surgical precision, and the use of modern technology to deliver personalised, high-quality eye care.
              </p>

              <p className="p-large" style={{ marginBottom: '1.5rem' }}>
                Dr. Jeyalakshmi has undergone extensive training at some of the most respected ophthalmic institutions in India and abroad, including RIOGOH, Chennai; ICARE Eye Hospital & Postgraduate Institute, Noida; Aravind Eye Hospital, Tirunelveli; Eye Associates, Sydney; and Sankara Nethralaya, Chennai. This broad training has given her a strong foundation in both comprehensive ophthalmology and the specialised management of cataract and glaucoma.
              </p>

              <p className="p-large" style={{ marginBottom: '1.5rem' }}>
                She served as a Senior Consultant at Sankara Nethralaya for 12 years, where she gained extensive experience in managing a wide spectrum of ophthalmic conditions and challenging surgical cases. During her tenure, she also had the privilege of training and mentoring many budding ophthalmologists, contributing to the development of the next generation of eye-care professionals.
              </p>

              <p className="p-large" style={{ marginBottom: '1.5rem' }}>
                Dr. Jeyalakshmi has a particular interest in advanced cataract surgery and glaucoma care. She is experienced in evaluating and treating patients with a wide range of cataract presentations, including complicated and challenging cataract cases, with an emphasis on careful planning, precision, safety, and optimal visual outcomes.
              </p>

              <p className="p-large" style={{ marginBottom: '2rem' }}>
                In glaucoma, she provides comprehensive care ranging from early detection and accurate diagnosis to long-term medical and surgical management. Her approach focuses not only on controlling eye pressure but also on protecting the optic nerve and preserving vision over the long term. Her experience in managing complex glaucoma cases enables her to tailor treatment according to each patient's individual needs.
              </p>

              <h4 className="h3 text-secondary" style={{ marginBottom: '1rem' }}>A Patient-Centred Approach</h4>

              <p className="p-large" style={{ marginBottom: '1.5rem' }}>
                Beyond her surgical expertise, Dr. Jeyalakshmi is known for her warm, approachable, and compassionate manner. She believes that good eye care begins with listening to patients carefully, understanding their concerns, and explaining their condition and treatment options clearly.
              </p>

              <p className="p-large" style={{ marginBottom: '1.5rem' }}>
                Her calm demeanour, patience, and ability to handle patients with a reassuring smile have made her a trusted choice for patients seeking specialist care, particularly those requiring treatment for cataract and glaucoma.
              </p>

              <p className="p-large" style={{ marginBottom: '2rem' }}>
                With two decades of clinical experience, extensive specialist training, 12 years as a Senior Consultant at Sankara Nethralaya, and a commitment to adopting modern advances in ophthalmology, Dr. Jeyalakshmi strives to provide precise, ethical, and personalised eye care to every patient.
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

              {/* Consultation Locations (Mobile Only) */}
              <div className="hide-on-desktop">
                <ConsultationLocationsCard />
              </div>

            </div>

          </div>
        </div>
      </section>

      <style>
        {`
          @media (max-width: 991px) {
            .hide-on-mobile { display: none !important; }
          }
          @media (min-width: 992px) {
            .hide-on-desktop { display: none !important; }
          }
        `}
      </style>
    </div>
  );
};

export default Doctor;
