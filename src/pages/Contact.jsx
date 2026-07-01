import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Send, MessageCircle, Navigation, ChevronDown, CheckCircle2 } from 'lucide-react';
import '../styles/pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "What should I bring to my first appointment?", a: "Please bring your current glasses/contact lenses, any previous medical records, and a list of medications you are currently taking." },
    { q: "Do you offer emergency eye care?", a: "Yes, we provide emergency eye care during our working hours. For after-hours emergencies, please call our emergency contact number." },
    { q: "How long does a comprehensive eye exam take?", a: "A comprehensive eye examination typically takes about 30 to 45 minutes, depending on the tests required." },
    { q: "Do I need to dilate my eyes during the visit?", a: "Dilation is often necessary for a thorough retinal evaluation. We recommend bringing sunglasses as your eyes may be sensitive to light afterward." }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    setTimeout(() => {
      setStatus('Success! We will contact you shortly to confirm your appointment.');
      setFormData({ name: '', phone: '', email: '', date: '', message: '' });
    }, 1500);
  };

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Helmet>
        <title>Contact Us | Sree Varahi Eye Clinic</title>
        <meta name="description" content="Book an appointment or contact Sree Varahi Eye Clinic in T.Nagar, Chennai. Find our address, phone number, and working hours." />
      </Helmet>

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

      <section className="section" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-6)' }}>
        <div className="container">
          <div className="contact-grid-premium">

            {/* Left Side: Info & Cards */}
            <div className="contact-left slide-up">
              <span className="section-subtitle">Contact Information</span>
              <h2 className="h2" style={{ marginBottom: '1.5rem' }}>We're Here to Help</h2>
              <p className="p-large" style={{ marginBottom: '2rem' }}>
                Reach out to us for appointments, emergencies, or any queries regarding your eye health. Our team is ready to assist you.
              </p>

              <div className="contact-feature-cards">
                <div className="contact-feature-card hover-elevate">
                  <div className="feature-icon-wrapper bg-primary-light">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div className="feature-content">
                    <h4 className="h4">Call Us</h4>
                    <a href="tel:+919360041641" className="feature-link">+91 93600 41641</a>
                    <span className="feature-subtext">Mon-Sat: 4:30 PM - 7:00 PM</span>
                  </div>
                </div>

                <div className="contact-feature-card hover-elevate">
                  <div className="feature-icon-wrapper bg-secondary-light">
                    <MapPin className="text-secondary" size={24} />
                  </div>
                  <div className="feature-content">
                    <h4 className="h4">Visit Us</h4>
                    <p className="feature-text">Aikiya health care, Flat GB, Swathi court<br />43/2, Vijayaraghava Rd, T. Nagar<br />Chennai, Tamil Nadu 600017</p>
                  </div>
                </div>

                <div className="contact-feature-card hover-elevate">
                  <div className="feature-icon-wrapper bg-accent">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div className="feature-content">
                    <h4 className="h4">Business Hours</h4>
                    <p className="feature-text">Mon - Sat: 4:30 PM - 7:00 PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="https://wa.me/919360041641" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', gap: '0.5rem' }}>
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Side: Premium Form */}
            <div className="contact-right slide-up delay-200">
              <div className="contact-form-premium">
                <h3 className="h3" style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Book an Appointment</h3>
                <p className="p-small" style={{ marginBottom: '2rem' }}>Fill out the form below and we will confirm your slot.</p>

                {status && (
                  <div className={`form-alert ${status.includes('Success') ? 'success' : 'info'}`}>
                    {status.includes('Success') && <CheckCircle2 size={20} />}
                    <span>{status}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="premium-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" className="form-input-premium" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
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
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" className="form-input-premium" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Reason for Visit</label>
                    <textarea id="message" name="message" className="form-textarea-premium" placeholder="E.g., General checkup, Eye pain..." value={formData.message} onChange={handleChange}></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-premium" disabled={status === 'Submitting...'}>
                    <Send size={18} /> Request Appointment
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section with Overlay */}
      <section className="map-section-premium">
        <div className="map-wrapper">
          <iframe
            src="https://maps.google.com/maps?q=Sree%20Varahi%20Eye%20Clinic,%20T.Nagar,%20Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
            <p className="p-small" style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>T.Nagar, Chennai, Tamil Nadu</p>
            <a href="https://www.google.com/maps/place/Sree+Varahi+Eye+Clinic+-+T.Nagar" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block">
              <Navigation size={18} /> Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Small FAQ Section */}
      <section className="section" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-8)' }}>
        <div className="container">
          <div className="section-header slide-up" style={{ marginBottom: 'var(--space-4)' }}>
            <h2 className="h2">Common Questions</h2>
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
