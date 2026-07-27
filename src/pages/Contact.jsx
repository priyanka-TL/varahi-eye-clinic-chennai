import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation, ExternalLink, ChevronDown, CheckCircle2, Info, Calendar, ShieldCheck } from 'lucide-react';
import '../styles/pages.css';
import Seo from '../components/Seo';
import { LOCATIONS } from '../config/site';
import { buildAllLocationsSchema, buildBreadcrumbSchema, buildFaqSchema } from '../config/seoHelpers';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    branch: 'Sree Varahi Eye Clinic (T. Nagar Branch)',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const locations = LOCATIONS;

  const faqs = [
    { q: "What should I bring to my first appointment?", a: "Please bring your current glasses/contact lenses, any previous medical records, and a list of medications you are currently taking." },
    { q: "How do I schedule an appointment on Sunday?", a: "Sunday consultations are available by prior appointment only. Please book through our website form or call us directly." },
    { q: "How long does a comprehensive eye exam take?", a: "A comprehensive eye examination typically takes about 30 to 45 minutes, depending on the diagnostic tests required." },
    { q: "Do I need to dilate my eyes during the visit?", a: "Dilation is often necessary for a thorough retinal evaluation. We recommend bringing sunglasses as your eyes may be temporarily sensitive to bright light afterward." }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Redirecting to WhatsApp...');

    const text = `*New Appointment Request*
Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Location: ${formData.branch}
Reason: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919360041641?text=${encodedText}`, '_blank');

    setTimeout(() => {
      setStatus('Success! Request sent via WhatsApp.');
      setFormData({ name: '', phone: '', email: '', date: '', branch: 'Sree Varahi Eye Clinic (T. Nagar Branch)', message: '' });
    }, 1500);
  };

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Seo
        title="Contact & Locations | Eye Clinic in T. Nagar, Chennai | Sree Varahi Eye Clinic"
        description="Book an appointment with Dr. Jeyalakshmi Govindan across 5 consultation centers in Chennai: T. Nagar, Kilpauk, Taramani, Virugambakkam & Anna Nagar. Call, WhatsApp, or fill our form."
        path="/contact"
        jsonLd={[
          ...buildAllLocationsSchema(),
          buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]),
          buildFaqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="h1 slide-up">Get in Touch</h1>
          <div className="breadcrumb slide-up delay-100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Section 1: Consultation Locations Grid */}
      <section className="section" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-6)' }}>
        <div className="container">
          {/* Sunday Notice Banner */}
          <div className="sunday-notice-card slide-up">
            <Info size={22} style={{ flexShrink: 0 }} />
            <div>
              <strong>Sunday Schedule:</strong> Closed for regular walk-ins. Prior appointments are available for Sunday upon request.
            </div>
          </div>

          <div className="section-header slide-up" style={{ textAlign: 'left', marginBottom: 'var(--space-4)' }}>
            <span className="section-subtitle">Consultation Centers</span>
            <h2 className="h2">Doctor Availability & Locations</h2>
            <p className="p-large" style={{ marginTop: '0.5rem' }}>
              Dr. Jeyalakshmi Govindan consults across 5 convenient centers in Chennai. Select a location below for consultation timings.
            </p>
          </div>

          {/* 2-Column Grid of 5 Locations */}
          <div className="locations-full-grid slide-up delay-100">
            {locations.map((loc, idx) => (
              <div key={loc.id} id={loc.id} className={`location-card hover-elevate ${loc.isFeatured ? 'featured-card' : ''}`}>
                <div className="location-card-header">
                  <div>
                    <h3 className="location-title">{idx + 1}. {loc.name}</h3>
                    <div className="location-role">{loc.role}</div>
                  </div>
                  <span className={`location-badge ${loc.isPrimary ? 'primary' : ''}`}>
                    {loc.badge}
                  </span>
                </div>

                <div className="location-detail">
                  <MapPin size={18} className="icon text-secondary" />
                  <div>
                    {loc.room && <span>{loc.room}<br /></span>}
                    <span>{loc.address}</span>
                    {loc.landmark && (
                      <div style={{ fontSize: '0.825rem', color: 'var(--color-secondary)', marginTop: '0.15rem', fontWeight: 500 }}>
                        📍 Landmark: {loc.landmark}
                      </div>
                    )}
                  </div>
                </div>

                <div className="location-timing-box">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={16} className="text-secondary" style={{ flexShrink: 0 }} />
                    <span className="location-timing-text">{loc.timing}</span>
                  </div>
                </div>

                {loc.mapLink && (
                  <div>
                    <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="location-map-btn">
                      <ExternalLink size={15} /> Open in Google Maps
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Appointment Booking Section */}
      <section className="section" style={{ background: 'rgba(10, 46, 92, 0.02)', paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="booking-section-grid">

            {/* Left Info Column */}
            <div className="slide-up">
              <span className="section-subtitle">Book Your Slot</span>
              <h2 className="h2" style={{ marginBottom: '1.25rem' }}>Schedule Your Appointment</h2>
              <p className="p-large" style={{ marginBottom: '2rem' }}>
                Fill out the form to request an appointment slot at your preferred consultation center. Our team will quickly confirm your timing via WhatsApp or Phone.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="feature-icon-wrapper bg-primary-light" style={{ width: '44px', height: '44px', borderRadius: '50%' }}>
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="h4" style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Direct Line & Helpline</h4>
                    <a href="tel:+919360041641" className="feature-link" style={{ fontSize: '1.1rem' }}>+91 93600 41641</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="feature-icon-wrapper bg-secondary-light" style={{ width: '44px', height: '44px', borderRadius: '50%' }}>
                    <Mail className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="h4" style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Email Inquiries</h4>
                    <a href="mailto:drjairajesh@yahoo.com" className="feature-link" style={{ fontSize: '1rem' }}>drjairajesh@yahoo.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="feature-icon-wrapper" style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#fff0eb' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F86939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="h4" style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Social Media & Updates</h4>
                    <a href="https://www.instagram.com/drjairajesh?igsh=bXExamg4emY2emM5" target="_blank" rel="noopener noreferrer" className="feature-link" style={{ fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>@drjairajesh <ExternalLink size={14} /></a>
                    <p className="p-small" style={{ marginTop: '0.3rem' }}>Watch our eye health awareness videos & stay connected.</p>
                  </div>
                </div>


              </div>

              <div>
                <a href="https://wa.me/919360041641?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', gap: '0.6rem', alignItems: 'center' }}>
                  <MessageCircle size={20} /> Instant WhatsApp Inquiry
                </a>
              </div>
            </div>

            {/* Right Appointment Form Column */}
            <div className="slide-up delay-100">
              <div className="contact-form-premium">
                <h3 className="h3" style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Request Appointment</h3>
                <p className="p-small" style={{ marginBottom: '1.5rem' }}>Select your preferred center & slot below.</p>

                {status && (
                  <div className={`form-alert ${status.includes('Success') ? 'success' : 'info'}`}>
                    {status.includes('Success') && <CheckCircle2 size={20} />}
                    <span>{status}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="premium-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name</label>
                      <input type="text" id="name" name="name" className="form-input-premium" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address (Optional)</label>
                      <input type="email" id="email" name="email" className="form-input-premium" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" className="form-input-premium" placeholder="+91 XXXXX XXXXX" required value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="date">Preferred Date</label>
                      <input type="date" id="date" name="date" className="form-input-premium" required value={formData.date} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="branch">Consultation Center</label>
                    <select id="branch" name="branch" className="form-input-premium" required value={formData.branch} onChange={handleChange}>
                      <option value="Sree Varahi Eye Clinic (T. Nagar Branch)">1. Sree Varahi Eye Clinic, T. Nagar (Mon-Sat 4:30 PM - 7 PM)</option>
                      <option value="Kumaran Hospitals (Kilpauk)">2. Kumaran Hospitals, Kilpauk (Mon-Sat 9:30 AM - 2 PM, except Thu)</option>
                      <option value="VHS Hospital (Taramani)">3. VHS Hospital, Taramani (Thu 10 AM - 2 PM)</option>
                      <option value="Keshava Eye Care (Virugambakkam)">4. Keshava Eye Care, Virugambakkam (Tue/Fri 2:30 PM)</option>
                      <option value="Dhanvantri Eye Care (Anna Nagar)">5. Dhanvantri Eye Care, Anna Nagar West (Mon 2:30 PM)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Reason for Visit</label>
                    <textarea id="message" name="message" className="form-textarea-premium" placeholder="E.g., Glaucoma evaluation, Cataract checkup, Eye pain..." value={formData.message} onChange={handleChange}></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-premium">
                    <Send size={18} /> Request Appointment
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Interactive Map */}
      <section className="map-section-premium">
        <div className="map-wrapper">
          <iframe
            src="https://maps.google.com/maps?q=Sree%20Varahi%20Eye%20Clinic,%20T.Nagar,%20Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sree Varahi Eye Clinic Location"
            className="full-map"
          ></iframe>
        </div>
        <div className="container map-overlay-container">
          <div className="map-info-card slide-up delay-200">
            <h4 className="h4">Sree Varahi Eye Clinic</h4>
            <p className="p-small" style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>T.Nagar Branch, Chennai</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Sree+Varahi+Eye+Clinic+43+Vijayaraghava+Road+T+Nagar+Chennai+600017" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block">
              <Navigation size={18} /> Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section className="section" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-8)' }}>
        <div className="container">
          <div className="section-header slide-up" style={{ marginBottom: 'var(--space-4)' }}>
            <h2 className="h2">Frequently Asked Questions</h2>
          </div>

          <div className="contact-faq-list slide-up delay-100">
            {faqs.map((faq, index) => (
              <div key={index} className={`contact-faq-item ${activeFaq === index ? 'active' : ''}`}>
                <button className="contact-faq-question" onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <ChevronDown className="contact-faq-icon" size={20} />
                </button>
                <div className="contact-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
