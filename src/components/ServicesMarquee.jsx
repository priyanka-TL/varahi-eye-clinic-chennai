import React from 'react';
import '../styles/animations.css';

const ServicesMarquee = () => {
  const services = [
    "Cataract Surgery",
    "Glaucoma Treatment",
    "Pediatric Ophthalmology",
    "Diabetic Retinopathy",
    "Computer Vision Care",
    "Cornea & Refractive Services",
    "Spectacle Dispensing"
  ];

  const pastelColors = [
    '#ffe4d6', // Peach
    '#e0f2f1', // Teal
    '#e3ebff', // Soft Blue
    '#fff0f3', // Rose
    '#fff3e0', // Light Orange
    '#e8f5e9', // Mint
    '#f3e5f5'  // Lavender
  ];

  // Double the arrays so it scrolls seamlessly
  const scrollItems = [...services, ...services];
  const scrollColors = [...pastelColors, ...pastelColors];

  return (
    <section className="section-alt padding-y-small" style={{ overflow: 'hidden', background: '#ffffff', borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="section-subtitle" style={{ fontSize: '0.9rem', color: 'var(--color-primary)', letterSpacing: '0.15em', fontWeight: '700' }}>SPECIALIZED EYE CARE SERVICES</span>
      </div>

      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Left and Right Fade Overlays for seamless blending */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '120px', height: '100%', background: 'linear-gradient(to right, #ffffff, transparent)', zIndex: 2 }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '100%', background: 'linear-gradient(to left, #ffffff, transparent)', zIndex: 2 }}></div>

        <div className="animate-marquee" style={{ display: 'flex', width: 'fit-content', gap: '3rem', padding: '0.5rem 0' }}>
          {scrollItems.map((service, index) => (
            <div
              key={index}
              style={{
                background: scrollColors[index],
                padding: '1.25rem 2.5rem',
                borderRadius: '50px',
                border: 'none',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                fontWeight: '700',
                color: '#0a2e5c',
                fontSize: '1.05rem',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '220px',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMarquee;
