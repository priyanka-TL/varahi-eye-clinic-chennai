import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Quote, Star } from 'lucide-react';
import '../styles/pages.css';

const TestimonialCard = ({ testimonial, index }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.text.length > 180;

  return (
    <div className={`card testimonial-card slide-up delay-${(index % 3) * 100}`}>
      <Quote size={48} className="quote-icon" />
      <div className="google-review-header">
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill={i < testimonial.rating ? 'currentColor' : 'none'} color={i < testimonial.rating ? 'currentColor' : 'var(--color-text-lighter)'} />
          ))}
        </div>
        <span className="google-review-text">Google &bull; {testimonial.timeAgo}</span>
      </div>

      <div className="testimonial-content-wrapper">
        <p className={`testimonial-text ${expanded ? '' : 'line-clamp-5'}`}>
          "{testimonial.text}"
        </p>
        {isLong && (
          <button
            className="read-more-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      <div className="testimonial-author">
        <div className="author-avatar">{testimonial.initial}</div>
        <div className="author-info">
          <h4>{testimonial.name}</h4>
          <span>{testimonial.procedure}</span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sankarasubramanian V',
      procedure: 'Cataract Surgery',
      text: 'Dr Jayalakshmi Govindan performed cataract surgery on both eyes for my wife. She is very thorough in her approach, explains the procedure clearly and keeps the patient relaxed. Her patience and treatment is reassuring and professional. My wife is well on her road to recovery. You can approach her for any eye related issues knowing fully well that you are in safe hands. Thank you Doctor',
      rating: 5,
      initial: 'S',
      timeAgo: '2 months ago'
    },
    {
      id: 2,
      name: 'KMS Bhuvana',
      procedure: 'Eye Treatment',
      text: 'Sree Varshi Eye Clinic is excellent. Treatment is very nice. Doctor is taking good care of the patient. We have very good experience in treating our eye problem.',
      rating: 5,
      initial: 'K',
      timeAgo: '3 months ago'
    },
    {
      id: 3,
      name: 'Subashri Sankarasubramanian',
      procedure: 'Comprehensive Exam',
      text: 'I had a wonderful experience at this clinic. Dr. Jayashri was very kind, thoughtful and thorough in her approach. My mother and father also got their eyes checked and she patiently explained everything to us and advised us about next steps. Highly recommend her.',
      rating: 5,
      initial: 'S',
      timeAgo: '4 months ago'
    },
    {
      id: 4,
      name: 'Dr M Uma maheshwaran',
      procedure: 'Refractive Checkup',
      text: 'Had been there recently for my regular refractive checkup. I had a fantastic experience with Dr.Jeyalakshmi Govindhan and the Zeiss lens executive. Reception and Ambience was simply warm, professional, and efficient. Dr.Jeyalakshmi was very caring throughout the examination, explained everything clearly, and made me feel comfortable throughout the visit.',
      rating: 5,
      initial: 'D',
      timeAgo: '1 month ago'
    },
    {
      id: 5,
      name: 'soundaram natarajan',
      procedure: 'Eye Check-up & Optical',
      text: 'Had a really good experience at Sree Varahi Eye Clinic. Everything was very smooth—from the eye check-up to getting my new glasses. Extremely professional and well-equipped. Highly recommend this if you’re looking for a reliable eye clinic.',
      rating: 5,
      initial: 'S',
      timeAgo: '2 months ago'
    },
    {
      id: 6,
      name: 'radhakrishnan muthukumar',
      procedure: 'Eye Checkup & Specs',
      text: 'Had a great experience with my eye checkup and specs. The doctor was very professional, kind, and explained everything in detail. Excellent service and highly recommended!',
      rating: 5,
      initial: 'R',
      timeAgo: '3 weeks ago'
    }
  ];

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Helmet>
        <title>Patient Testimonials | Sree Varahi Eye Clinic</title>
        <meta name="description" content="Read reviews and testimonials from our happy patients at Sree Varahi Eye Clinic, T.Nagar." />
      </Helmet>

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="h1 slide-up">Patient Testimonials</h1>
          <div className="breadcrumb slide-up delay-100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Testimonials</span>
          </div>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header slide-up">
            <span className="section-subtitle">Real Stories</span>
            <h2 className="section-title h2">What Our Patients Say</h2>
            <p className="p-large">We take pride in providing exceptional care and achieving the best outcomes for our patients.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <a href="https://www.google.com/maps/place/Sree+Varahi+Eye+Clinic+-+T.Nagar/@13.0436908,80.2429514,15z/data=!4m17!1m8!3m7!1s0x3a52678c3aea44ab:0xf439b6039ebec50c!2sSree+Varahi+Eye+Clinic+-+T.Nagar!8m2!3d13.0435465!4d80.2429266!10e5!16s%2Fg%2F11lyvkzbr1!3m7!1s0x3a52678c3aea44ab:0xf439b6039ebec50c!8m2!3d13.0435465!4d80.2429266!9m1!1b1!16s%2Fg%2F11lyvkzbr1?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
