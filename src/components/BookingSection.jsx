import React from 'react';
import { Link } from 'react-router-dom';

const BookingSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Ready to Begin Your Health Journey?</h2>
          <p className="text-xl mb-8">
            Book your medical treatment package with just 10% deposit and experience world-class healthcare in beautiful Istanbul
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary hover:bg-neutral-light">
              <i className="bi bi-calendar-check mr-2"></i>
              Get Free Consultation
            </Link>
            <Link to="/treatments" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
              <i className="bi bi-credit-card mr-2"></i>
              Book with 10% Deposit
            </Link>
            <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="btn bg-green-500 hover:bg-green-600 text-white">
              <i className="bi bi-whatsapp mr-2"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
