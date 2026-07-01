import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { X, ZoomIn } from 'lucide-react';
import '../styles/pages.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'clinic', 'equipment', 'reception', 'ot'];

  // TODO: Replace with real clinic images
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', category: 'clinic', title: 'Clinic Exterior', className: 'wide' },
    { id: 2, src: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80', category: 'equipment', title: 'Diagnostic Room', className: '' },
    { id: 3, src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80', category: 'reception', title: 'Waiting Lounge', className: 'tall' },
    { id: 4, src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', category: 'ot', title: 'Operation Theatre', className: '' },
    { id: 5, src: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=800&q=80', category: 'clinic', title: 'Optical Store', className: 'wide' },
    { id: 6, src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80', category: 'equipment', title: 'Advanced Microscope', className: '' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Helmet>
        <title>Gallery | Sree Varahi Eye Clinic</title>
        <meta name="description" content="Take a virtual tour of Sree Varahi Eye Clinic. View our state-of-the-art facilities, operation theatres, and advanced equipment." />
      </Helmet>

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
          
          {/* Filters */}
          <div className="text-center slide-up" style={{marginBottom: '3rem'}}>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem'}}>
              {categories.map((cat) => (
                <button 
                  key={cat}
                  className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'} btn-sm`}
                  onClick={() => setFilter(cat)}
                  style={{textTransform: 'capitalize'}}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="gallery-grid">
            {filteredImages.map((img, index) => (
              <div 
                key={img.id} 
                className={`gallery-item ${img.className} slide-up delay-${(index % 4) * 100}`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img.src} alt={img.title} className="gallery-img" loading="lazy" />
                <div className="gallery-overlay">
                  <ZoomIn size={48} color="white" style={{position: 'absolute'}} opacity={0.5} />
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex',
            alignItems: 'center', justifyContent: 'center', padding: '2rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            style={{position: 'absolute', top: '20px', right: '20px', color: 'white', background: 'none', border: 'none', cursor: 'pointer'}}
            onClick={() => setSelectedImage(null)}
          >
            <X size={36} />
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.title} 
            style={{maxHeight: '90vh', maxWidth: '100%', objectFit: 'contain', borderRadius: '8px'}} 
            onClick={(e) => e.stopPropagation()}
          />
          <div style={{position: 'absolute', bottom: '20px', color: 'white', textAlign: 'center'}}>
            <h3 className="h3">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
