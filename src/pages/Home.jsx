import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Activity, Eye, ShieldCheck, Stethoscope, Phone, Star, Quote } from 'lucide-react';
import '../styles/pages.css';
import doctorImg from '../assets/images/doctor_photo/drJayalakshmiMainPage.jpg';
import imgGlasses from '../assets/images/spectacles/glasses-checkup-edited.png';
import imgCataract from '../assets/images/patients/cataract-surgery-edited.png';
import imgGlaucoma from '../assets/images/services_nethra/glaucoma.webp';
import imgComputerVision from '../assets/images/services_nethra/cornea-refractive.webp';
import imgDiabetic from '../assets/images/services_nethra/retina-vitreous.webp';
import imgPediatric from '../assets/images/services_nethra/pediatric-ophthalmology.webp';
import Seo from '../components/Seo';
import { buildOrganizationSchema } from '../config/seoHelpers';
import AnimatedCounter from '../components/AnimatedCounter';
import ServicesMarquee from '../components/ServicesMarquee';
import useScrollReveal from '../hooks/useScrollReveal';

const Home = () => {
  useScrollReveal();

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Seo
        title="Sree Varahi Eye Clinic | Best Eye Care Clinic in T. Nagar, Chennai"
        description="Trusted eye clinic in T. Nagar, Chennai offering cataract surgery, glaucoma management, diabetic eye screening & computer vision care. 20+ years experience, 5 Google rating. Book your eye checkup today."
        path="/"
        jsonLd={buildOrganizationSchema()}
      />

      {/* Hero Section */}
      <section className="hero" style={{ overflow: 'hidden' }}>
        <div className="hero-bg-shape ken-burns"></div>
        <div className="container hero-container">
          <div className="hero-content fade-in">
            <span className="hero-subtitle">Sree Varahi Eye Clinic</span>
            <h1 className="hero-title h1">
              Trusted Eye Care <br />
              <span className="gradient-text">for You & Your Family</span>
            </h1>
            <p className="hero-desc">
              Experience world-class ophthalmic care at Sree Varahi Eye Clinic.
              Our advanced technology and experienced specialist ensure the best
              vision outcomes for you and your family.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary pulse-primary btn-shimmer">
                Book Appointment
              </Link>
              <a href="tel:+919360041641" className="btn btn-outline">
                <Phone size={18} /> Contact Clinic
              </a>
            </div>

            <div className="hero-trust" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem', alignItems: 'center', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={18} className="text-secondary" />
                <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>
                  <AnimatedCounter end={10000} suffix="+" /> Surgeries
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>⭐</span>
                <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>5 Google Rating</span>
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
              alt="Dr. Jeyalakshmi Govindan, ophthalmologist at Sree Varahi Eye Clinic, T. Nagar, Chennai"
              className="hero-image"
              width="1122"
              height="1402"
              fetchPriority="high"
            />
            <div className="hero-badge float">
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
            <div className="feature-item fly-in">
              <ShieldCheck className="feature-icon" size={32} />
              <div>
                <h4 className="h4">Patient First</h4>
                <p className="p-small">Dedicated to personalized care</p>
              </div>
            </div>
            <div className="feature-item fly-in delay-100">
              <Activity className="feature-icon" size={32} />
              <div>
                <h4 className="h4">Less Waiting Time</h4>
                <p className="p-small">Latest diagnostic technology</p>
              </div>
            </div>
            <div className="feature-item fly-in delay-200">
              <Users className="feature-icon" size={32} />
              <div>
                <h4 className="h4">Expert Doctor</h4>
                <p className="p-small">Highly qualified specialist</p>
              </div>
            </div>
            <div className="feature-item fly-in delay-300">
              <Award className="feature-icon" size={32} />
              <div>
                <h4 className="h4">Affordable Care</h4>
                <p className="p-small">Ethical and economical treatment</p>
              </div>
            </div>
            {/* <div className="feature-item fly-in">
              <ShieldCheck className="feature-icon" size={32} />
              <div>
                <h4 className="h4">Pediatric Eye care</h4>
                <p className="p-small">Dedicated to personalized care</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Marquee */}
      <ServicesMarquee />

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

              { title: 'Cataract Surgery', slug: 'cataract-surgery', desc: 'Advanced Micro-Incision Cataract Surgery (MICS) with the latest phacoemulsification technology.', icon: <Eye size={32} />, img: imgCataract },
              { title: 'Glaucoma Screening & Surgery', slug: 'glaucoma-screening', desc: 'Early diagnosis and advanced management to prevent optic nerve damage.', icon: <ShieldCheck size={32} />, img: imgGlaucoma },
              { title: 'Computer Vision Syndrome', slug: 'computer-vision-syndrome', desc: 'Expert care and counseling for digital eye strain and related symptoms.', icon: <Activity size={32} />, img: imgComputerVision },
              { title: 'Diabetic Eye Screening', slug: 'diabetic-eye-screening', desc: 'Specialized screening to detect and manage diabetic retinopathy early.', icon: <Stethoscope size={32} />, img: imgDiabetic },
              { title: 'Glasses Checkup & Dispensing', slug: 'glasses-checkup', desc: 'Comprehensive eye health check-up to ensure accurate prescription and best fit for glasses.', icon: <Award size={32} />, img: imgGlasses },
              { title: 'Pediatric Eye Care', slug: 'pediatric-eye-care', desc: 'Dedicated to personalized care and treatment for children’s vision needs.', icon: <Users size={32} />, img: imgPediatric }
            ].map((service, index) => (
              <div key={index} className={`card service-card slide-up delay-${(index % 3 + 1) * 100}`}>
                <div className="service-card-image-wrapper">
                  <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)' }}>
                    <img src={service.img} alt={service.title} className="service-card-image" loading="lazy" />
                  </div>
                  <div className="service-icon">{service.icon}</div>
                </div>
                <div className="service-card-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="p-small">{service.desc}</p>
                  <Link to={`/services#${service.slug}`} className="service-link">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header slide-up">
            <span className="section-subtitle" style={{ color: 'var(--color-secondary)' }}>Testimonials</span>
            <h2 className="section-title h2" style={{ marginBottom: '0.5rem' }}>What Our Patients Say</h2>
            <div className="swipe-indicator">
              <span>Swipe for more</span>
              <ArrowRight size={16} />
            </div>
          </div>
          <div className="testimonials-slider slide-up delay-200">
            {[
              {
                text: "Dr. Jayalakshmi at Sree Varahi Eye Clinic is exceptionally professional and caring. The cataract surgery was completely painless, and my vision is better than ever.",
                author: "Rajesh K.",
                rating: 5
              },
              {
                text: "I took my daughter here for her first eye checkup. Dr. Jayalakshmi made her feel very comfortable. Highly recommend her pediatric eye care!",
                author: "Priya S.",
                rating: 5
              },
              {
                text: "Dr. Jayalakshmi's expertise in managing my glaucoma has been a blessing. She has the latest equipment and provides very thorough explanations.",
                author: "Venkat R.",
                rating: 5
              },
              {
                text: "I've been suffering from computer vision syndrome for months. The specialized care and advice I received here made a huge difference.",
                author: "Ananya M.",
                rating: 5
              }
            ].map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <Quote className="testimonial-quote-icon" strokeWidth={1} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div className="testimonial-stars">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                </div>
                <div className="testimonial-author" style={{ position: 'relative', zIndex: 1 }}>
                  <span>- {t.author}</span>
                </div>
              </div>
            ))}
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
