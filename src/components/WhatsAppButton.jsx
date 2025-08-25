import React from 'react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/905000000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-40 hover:bg-green-600 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp text-2xl"></i>
    </a>
  );
};

export default WhatsAppButton;
