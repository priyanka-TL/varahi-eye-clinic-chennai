import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const PrivacyPolicy = () => {
  return (
    <div className="page-transition-enter page-transition-enter-active">
      <Helmet>
        <title>Privacy Policy | Sree Varahi Eye Clinic</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="page-header" style={{padding: '100px 0 40px'}}>
        <div className="container">
          <h1 className="h1 slide-up">Privacy Policy</h1>
          <div className="breadcrumb slide-up delay-100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{maxWidth: '800px'}}>
          <div className="card slide-up">
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <p className="p-large text-secondary">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h3 className="h3">1. Introduction</h3>
              <p className="p-small">
                Welcome to Sree Varahi Eye Clinic. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you as to how we look after your personal data when you visit our website 
                and tell you about your privacy rights.
              </p>

              <h3 className="h3">2. Data We Collect</h3>
              <p className="p-small">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                <br/><br/>
                • <strong>Identity Data</strong> includes first name, last name, username or similar identifier.<br/>
                • <strong>Contact Data</strong> includes medical records, billing address, email address and telephone numbers.<br/>
                • <strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.
              </p>

              <h3 className="h3">3. How We Use Your Data</h3>
              <p className="p-small">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                <br/><br/>
                • To schedule appointments and provide medical services.<br/>
                • To manage payments and insurance claims.<br/>
                • To improve our website, products/services, marketing, or customer relationships.
              </p>

              <h3 className="h3">4. Data Security</h3>
              <p className="p-small">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                used or accessed in an unauthorised way, altered or disclosed. Medical records are maintained with the strictest confidentiality.
              </p>

              <h3 className="h3">5. Contact Us</h3>
              <p className="p-small">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:<br/><br/>
                <strong>Sree Varahi Eye Clinic</strong><br/>
                T.Nagar, Chennai<br/>
                Email: info@sreevarahieyeclinic.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
