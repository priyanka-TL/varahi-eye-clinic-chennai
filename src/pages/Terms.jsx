import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const Terms = () => {
  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Helmet>
        <title>Terms & Conditions | Sree Varahi Eye Clinic</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="page-header" style={{padding: '100px 0 40px'}}>
        <div className="container">
          <h1 className="h1 slide-up">Terms & Conditions</h1>
          <div className="breadcrumb slide-up delay-100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{maxWidth: '800px'}}>
          <div className="card slide-up">
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              
              <h3 className="h3">1. Medical Disclaimer</h3>
              <p className="p-small">
                The content on this website is provided for general informational purposes only and is not intended as, 
                nor should it be considered a substitute for, professional medical advice, diagnosis, or treatment. 
                Always seek the advice of a qualified healthcare provider regarding any medical condition.
              </p>

              <h3 className="h3">2. Appointments</h3>
              <p className="p-small">
                While we strive to adhere strictly to appointment times, medical emergencies may cause unforeseen delays. 
                We appreciate your understanding in such situations. Online appointment requests are subject to confirmation by our staff.
              </p>

              <h3 className="h3">3. Use of Website</h3>
              <p className="p-small">
                By accessing this website, you agree to these Terms and Conditions. You agree not to use the website for 
                any unlawful purpose or in any way that could interrupt, damage, or impair the service.
              </p>

              <h3 className="h3">4. Intellectual Property</h3>
              <p className="p-small">
                The content, logos, graphics, and structure of this website are the property of Sree Varahi Eye Clinic 
                and are protected by copyright and intellectual property laws. Unauthorized use or reproduction is prohibited.
              </p>

              <h3 className="h3">5. Modifications</h3>
              <p className="p-small">
                Sree Varahi Eye Clinic reserves the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on the website. Continued use of the website constitutes acceptance of the modified terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
