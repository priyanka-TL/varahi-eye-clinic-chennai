import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import '../styles/pages.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment by calling us directly at +91 93600 41641, using the WhatsApp button on our website, or filling out the contact form on our Contact Us page.'
    },
    {
      question: 'What are your clinic timings?',
      answer: 'Our clinic is open from Monday to Saturday, 9:00 AM to 8:00 PM. We are available on Sundays by prior appointment only. For emergencies, please call our emergency contact number.'
    },
    {
      question: 'Do you accept health insurance?',
      answer: 'Yes, we have tie-ups with all major TPAs and health insurance providers for cashless treatment. Please bring your insurance card and a valid ID proof during your visit.'
    },
    {
      question: 'Is LASIK surgery painful?',
      answer: 'No, LASIK is generally a painless procedure. We use anesthetic eye drops before the surgery to numb the eyes. You might feel a slight pressure during the procedure, which takes only about 10-15 minutes for both eyes.'
    },
    {
      question: 'How long does cataract surgery take?',
      answer: 'The actual cataract surgery takes about 15-20 minutes. However, you should expect to spend around 2-3 hours at the clinic on the day of surgery for pre-operative preparation and post-operative observation.'
    },
    {
      question: 'At what age should a child have their first eye exam?',
      answer: 'We recommend a comprehensive eye exam for children at 6 months of age, then again at 3 years, and just before starting school (around age 5 or 6). After that, eye exams should be done every 1-2 years.'
    },
    {
      question: 'Where is the clinic located?',
      answer: 'We are located at Aikiya health care, Flat GB, Swathi court, 43/2, Vijayaraghava Rd, T. Nagar. You can find the Google Maps directions on our Contact page.'
    },
    {
      question: 'Do you have an optical store in the clinic?',
      answer: 'Yes, we have a fully equipped in-house optical store offering a wide range of designer frames, prescription lenses, computer glasses, and contact lenses.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Helmet>
        <title>FAQ | Sree Varahi Eye Clinic</title>
        <meta name="description" content="Frequently Asked Questions about Sree Varahi Eye Clinic, appointment booking, treatments, and insurance." />
      </Helmet>

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="h1 slide-up">Frequently Asked Questions</h1>
          <div className="breadcrumb slide-up delay-100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>FAQ</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="faq-list slide-up">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  {faq.question}
                  <ChevronDown className="faq-icon" size={20} />
                </button>
                <div className="faq-answer">
                  <p className="p-large" style={{marginBottom: 0}}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center slide-up delay-200" style={{marginTop: '3rem'}}>
            <p className="p-large" style={{marginBottom: '1rem'}}>Still have questions?</p>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
