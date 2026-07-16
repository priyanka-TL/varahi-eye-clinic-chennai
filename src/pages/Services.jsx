import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Eye, Activity, ShieldCheck, Stethoscope, Users, PlusCircle, Search, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import '../styles/pages.css';

const Services = () => {
  const servicesList = [
    {
      title: 'Glasses checkup and dispensing of glasses',
      icon: <Search size={40} />,
      desc: 'Complete eye health check-up to ensure accurate prescription and best fit for glasses.',
      benefits: ['Accurate prescription', 'Wide selection of frames', 'Comfortable vision'],
      process: 'Visual acuity test, refraction, frame selection, and precise lens fitting.'
    },
    {
      title: 'Cataract Surgery',
      icon: <Eye size={40} />,
      desc: 'Advanced Micro-Incision Cataract Surgery (MICS) with the latest phacoemulsification technology.',
      benefits: ['Painless procedure', 'Quick recovery', 'Premium IOL options'],
      process: 'Detailed evaluation, precise mapping, safe removal of clouded lens, and IOL implantation.'
    },
    {
      title: 'Glaucoma screening and management',
      icon: <ShieldCheck size={40} />,
      desc: 'Early diagnosis and advanced management to prevent optic nerve damage.',
      benefits: ['Preserves side vision', 'Prevents blindness', 'Tailored treatment plans'],
      process: 'Intraocular pressure check, visual field testing, followed by medical or surgical management.'
    },
    {
      title: 'Computer vision syndrome management and counseling',
      icon: <Activity size={40} />,
      desc: 'Expert care for digital eye strain and related symptoms.',
      benefits: ['Relieves eye fatigue', 'Improves focus', 'Ergonomic advice'],
      process: 'Symptom evaluation, dry eye assessment, customized glasses, and counseling on digital habits.'
    },
    {
      title: 'Diabetic eye screening',
      icon: <Stethoscope size={40} />,
      desc: 'Specialized screening to detect and manage diabetic retinopathy early.',
      benefits: ['Prevents severe vision loss', 'Early detection', 'Timely treatment'],
      process: 'Dilated fundus exam, detailed retinal evaluation, and targeted therapy if needed.'
    }
  ];

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Helmet>
        <title>Our Services | Sree Varahi Eye Clinic</title>
        <meta name="description" content="Explore our comprehensive eye care services including Glasses Checkup, Cataract Surgery, Glaucoma Management, Computer Vision Syndrome Counseling, and Diabetic Eye Screening." />
      </Helmet>

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="h1 slide-up">Our Services</h1>
          <div className="breadcrumb slide-up delay-100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header slide-up">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title h2">Advanced Eye Care Solutions</h2>
            <p className="p-large">Delivering state-of-the-art treatments with precision and compassion.</p>
          </div>

          <div className="services-grid">
            {servicesList.map((service, index) => (
              <div key={index} className={`card slide-up delay-${(index % 4) * 100}`} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="service-icon" style={{ background: 'var(--color-primary)', color: 'white' }}>{service.icon}</div>
                <h3 className="h3 text-primary" style={{ marginBottom: '1rem' }}>{service.title}</h3>
                <p className="p-small" style={{ marginBottom: '1.5rem' }}>{service.desc}</p>

                <div>
                  <h5 className="h4" style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Key Benefits</h5>
                  <ul className="p-small" style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {service.benefits.map((benefit, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <PlusCircle size={14} className="text-secondary" /> {benefit}
                      </li>
                    ))}
                  </ul>

                  <h5 className="h4" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Process</h5>
                  <p className="p-small" style={{ fontStyle: 'italic' }}>{service.process}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Optical Store Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="slide-up">
              <span className="section-subtitle">In-House Optical</span>
              <h2 className="section-title h2">Premium Optical Store</h2>
              <p className="p-large" style={{ marginBottom: '1rem' }}>
                Complete your eye care journey with our in-house optical store. We offer a wide
                selection of premium frames, lenses, and contact lenses to suit every style and budget.
              </p>
              <ul className="p-large" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 className="text-secondary" /> Latest Designer Frames</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 className="text-secondary" /> Blue-cut & Anti-glare Lenses</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 className="text-secondary" /> Branded Contact Lenses</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 className="text-secondary" /> Computer Vision Glasses</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Visit Our Store</Link>
            </div>
            <div className="slide-up delay-200">
              {/* TODO: Replace with Optical store image */}
              <img
                src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=800&q=80"
                alt="Optical Store"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
