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

  // Quadruple the array to ensure it fills ultra-wide screens seamlessly without breaking the loop
  const scrollItems = [...services, ...services, ...services, ...services];

  return (
    <section style={{ background: '#0a2e5c', color: '#ffffff', padding: '16px 0', overflow: 'hidden', borderTop: '2px solid var(--color-secondary)', borderBottom: '2px solid var(--color-secondary)' }}>
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>

        {/* Subtle fade overlays tailored for the dark background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '60px', height: '100%', background: 'linear-gradient(to right, #0a2e5c, transparent)', zIndex: 2 }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '60px', height: '100%', background: 'linear-gradient(to left, #0a2e5c, transparent)', zIndex: 2 }}></div>

        <div className="animate-marquee" style={{ display: 'flex', width: 'fit-content', gap: '3rem', alignItems: 'center' }}>
          {scrollItems.map((service, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '3rem',
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap'
              }}
            >
              <span>{service}</span>
              {/* Elegant separator star */}
              <span style={{ color: 'var(--color-secondary)', fontSize: '1.2rem', opacity: 0.8 }}>✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMarquee;
