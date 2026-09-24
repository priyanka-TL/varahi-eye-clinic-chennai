import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn } from 'lucide-react';
import '../styles/pages.css';
import Seo from '../components/Seo';
import { buildBreadcrumbSchema } from '../config/seoHelpers';
import dscreening2Img from '../assets/images/ds/dscreening2.png';

// ── Categorized image imports ──────────────────────────────────────────────
const tnagarClinicModules = import.meta.glob('../assets/images/clinic/tnagar-*.{jpeg,jpg,png,webp}', { eager: true });
const kilpaukClinicModules = import.meta.glob('../assets/images/clinic/kilpauk-*.{jpeg,jpg,png,webp}', { eager: true });
const patientModules = import.meta.glob('../assets/images/patients/*.{jpeg,jpg,png,webp}', { eager: true });
const spectaclesModules = import.meta.glob('../assets/images/spectacles/*.{jpeg,jpg,png,webp}', { eager: true });
const equipmentModules = import.meta.glob('../assets/images/equipment/*.{jpeg,jpg,png,webp}', { eager: true });
const eventModules = import.meta.glob('../assets/images/events/*.{jpeg,jpg,png,webp}', { eager: true });
const awardsModules = import.meta.glob('../assets/images/awards/*.{jpeg,jpg,png,webp}', { eager: true });

// Helper: derive a readable subtitle from filename
const titleFromFile = (path) => {
  const name = path.split('/').pop().replace(/\.\w+$/, '');
  return name
    .replace(/^(tnagar|kilpauk)-/, '')
    .replace(/^\d+-/, '')
    .replace(/-\d+$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
};

const buildImages = (modules, category, label) =>
  Object.entries(modules).map(([path, mod]) => ({
    id: path.replace(/^.*\//, '').replace(/\.\w+$/, ''), // filename without extension — always unique
    src: mod.default,
    category,
    title: label,
    subtitle: titleFromFile(path),
  }));

import img1 from '../assets/images/clinic/tnagar-00-doctor-at-desk.jpeg';
import img2 from '../assets/images/events/tnagar-inauguration-ribbon-cutting-01.jpeg';
import img3 from '../assets/images/ds/dscreening2.png';

const allBuiltImages = [
  ...buildImages(tnagarClinicModules, 't-nagar', 'T. Nagar Branch'),
  ...buildImages(kilpaukClinicModules, 'kilpauk', 'Kilpauk Branch'),
  ...buildImages(patientModules, 'patients', 'Patients & Consultations'),
  ...buildImages(spectaclesModules, 'spectacles', 'Spectacles & Eyewear'),
  ...buildImages(equipmentModules, 'kilpauk', 'Kilpauk Branch'),
  {
    id: 'screening-0',
    src: dscreening2Img,
    category: 'screening',
    title: 'Diabetic Eye Screening',
    subtitle: 'Screening',
  },
  ...buildImages(eventModules, 'events', 'Events & Inauguration'),
  ...buildImages(awardsModules, 'awards', 'Awards & Recognition'),
];

const topImagesSrc = [img1, img2, img3];
const topImages = topImagesSrc.map(src => allBuiltImages.find(img => img.src === src)).filter(Boolean);
const otherImages = allBuiltImages.filter(img => !topImagesSrc.includes(img.src));

const images = [...topImages, ...otherImages];

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 't-nagar', label: 'T. Nagar' },
  { key: 'kilpauk', label: 'Kilpauk' },
  { key: 'patients', label: 'Patients' },
  { key: 'spectacles', label: 'Spectacles' },
  { key: 'screening', label: 'Screening' },
  { key: 'events', label: 'Events' },
  { key: 'awards', label: 'Awards' },
];


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1200) setColumns(4);
      else if (window.innerWidth >= 768) setColumns(3);
      else if (window.innerWidth >= 480) setColumns(2);
      else setColumns(1);
    };
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const filteredImages = filter === 'all'
    ? images
    : images.filter(img => img.category === filter);

  // Distribute images into column arrays
  const columnWrappers = Array.from({ length: columns }, () => []);
  filteredImages.forEach((img, index) => {
    columnWrappers[index % columns].push(img);
  });

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Seo
        title="Photo Gallery | Sree Varahi Eye Clinic, T. Nagar & Kilpauk, Chennai"
        description="See inside Sree Varahi Eye Clinic — our T. Nagar and Kilpauk branches, diagnostic equipment, spectacle collections, patient care, community eye camps, and awards."
        path="/gallery"
        jsonLd={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }])}
      />

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="h1 slide-up">Our Gallery</h1>
          <div className="breadcrumb slide-up delay-100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* Filter Buttons */}
          <div className="text-center slide-up" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              {CATEGORIES.map(({ key, label }) => (
                <button
                  key={key}
                  className={`btn ${filter === key ? 'btn-primary' : 'btn-outline'} btn-sm`}
                  onClick={() => setFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Image Count */}
          <p className="slide-up" style={{ textAlign: 'center', color: 'var(--color-text-light)', marginBottom: '2rem', fontSize: '0.9rem' }}>
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
            {filter !== 'all' && ` · ${CATEGORIES.find(c => c.key === filter)?.label}`}
          </p>

          {/* Masonry Grid — React-based for perfect distribution */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            {columnWrappers.map((col, colIndex) => (
              <div key={colIndex} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, minWidth: 0 }}>
                {col.map((img, index) => (
                  <div
                    key={img.id}
                    className={`gallery-item slide-up delay-${(index % 4) * 100}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img.src} alt={img.subtitle || img.title} className="gallery-img" loading="lazy" />
                    <div className="gallery-overlay">
                      <ZoomIn size={48} color="white" style={{ position: 'absolute' }} opacity={0.5} />
                      <span>{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-light)' }}>
              No photos in this category yet.
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 9999, display: 'flex',
            alignItems: 'center', justifyContent: 'center', padding: '2rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            style={{ position: 'absolute', top: '20px', right: '20px', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setSelectedImage(null)}
          >
            <X size={36} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.subtitle || selectedImage.title}
            style={{ maxHeight: '90vh', maxWidth: '100%', objectFit: 'contain', borderRadius: '8px' }}
            onClick={(e) => e.stopPropagation()}
          />
          <div style={{ position: 'absolute', bottom: '20px', color: 'white', textAlign: 'center' }}>
            <h3 className="h3" style={{ marginBottom: '0.25rem' }}>{selectedImage.title}</h3>
            {selectedImage.subtitle && (
              <p style={{ fontSize: '0.9rem', opacity: 0.75 }}>{selectedImage.subtitle}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
