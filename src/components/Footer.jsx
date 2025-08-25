import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutral-darkest text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <i className="bi bi-heart-pulse text-2xl mr-2 text-primary"></i>
              <h3 className="font-serif text-xl font-bold">Health Luxury Hub</h3>
            </div>
            <p className="mb-6 text-neutral-dark">
              Premium medical tourism in Istanbul, Turkey. World-class treatments combined with unique cultural experiences.
            </p>
            <div className="flex">
              <a href="#" className="text-2xl mr-4 hover:text-primary transition-colors" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-2xl mr-4 hover:text-primary transition-colors" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-2xl mr-4 hover:text-primary transition-colors" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-2xl hover:text-primary transition-colors" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul>
              <li className="mb-3">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li className="mb-3">
                <Link to="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
              </li>
              <li className="mb-3">
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li className="mb-3">
                <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-xl font-bold mb-6">Treatments</h4>
            <ul>
              <li className="mb-3">
                <Link to="/treatments/limb-lengthening" className="hover:text-primary transition-colors">Limb Lengthening</Link>
              </li>
              <li className="mb-3">
                <Link to="/treatments/obesity-surgery" className="hover:text-primary transition-colors">Obesity Surgery</Link>
              </li>
              <li className="mb-3">
                <Link to="/treatments/dental-surgery" className="hover:text-primary transition-colors">Dental & Jaw Surgery</Link>
              </li>
              <li className="mb-3">
                <Link to="/treatments/hair-transplant" className="hover:text-primary transition-colors">Hair Transplant</Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-primary transition-colors">View All Treatments</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul>
              <li className="flex items-start mb-4">
                <i className="bi bi-geo-alt text-primary mt-1 mr-3"></i>
                <span>Levent, Beşiktaş, Istanbul, Turkey</span>
              </li>
              <li className="flex items-start mb-4">
                <i className="bi bi-telephone text-primary mt-1 mr-3"></i>
                <span>+90 500 000 0000</span>
              </li>
              <li className="flex items-start mb-4">
                <i className="bi bi-envelope text-primary mt-1 mr-3"></i>
                <span>info@healthluxuryhub.com</span>
              </li>
              <li className="flex items-start">
                <i className="bi bi-clock text-primary mt-1 mr-3"></i>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-dark my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-dark text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Health Luxury Hub. All rights reserved.
          </p>
          <div className="flex items-center">
            <img src="https://placehold.co/40x25/4fc3f7/ffffff?text=VISA" alt="Visa" className="h-6 mr-2" />
            <img src="https://placehold.co/40x25/4fc3f7/ffffff?text=MC" alt="Mastercard" className="h-6 mr-2" />
            <img src="https://placehold.co/40x25/4fc3f7/ffffff?text=AMEX" alt="American Express" className="h-6 mr-2" />
            <img src="https://placehold.co/40x25/4fc3f7/ffffff?text=PP" alt="PayPal" className="h-6" />
          </div>
        </div>
        
        <div className="text-center mt-8 text-xs text-neutral-dark">
          <p>Designed by WebSparks AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
