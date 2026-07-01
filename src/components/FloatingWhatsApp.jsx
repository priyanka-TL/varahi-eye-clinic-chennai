import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const phoneNumber = "919360041641"; // Replaced with actual number
  const message = encodeURIComponent("Hello, I would like to book an appointment at Sree Varahi Eye Clinic.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default FloatingWhatsApp;
