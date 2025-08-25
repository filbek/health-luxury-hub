import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <i className={`bi bi-heart-pulse text-2xl mr-2 ${isScrolled ? 'text-primary' : 'text-white'}`}></i>
            <span className={`font-serif text-xl font-bold ${isScrolled ? 'text-neutral-darkest' : 'text-white'}`}>
              Health Luxury Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`${isScrolled ? 'text-neutral-darkest' : 'text-white'} hover:text-primary transition-colors`}>
              Home
            </Link>
            <Link to="/treatments" className={`${isScrolled ? 'text-neutral-darkest' : 'text-white'} hover:text-primary transition-colors`}>
              Treatments
            </Link>
            <Link to="/about" className={`${isScrolled ? 'text-neutral-darkest' : 'text-white'} hover:text-primary transition-colors`}>
              About
            </Link>
            <Link to="/blog" className={`${isScrolled ? 'text-neutral-darkest' : 'text-white'} hover:text-primary transition-colors`}>
              Blog
            </Link>
            <Link to="/contact" className={`${isScrolled ? 'text-neutral-darkest' : 'text-white'} hover:text-primary transition-colors`}>
              Contact
            </Link>
            <Link to="/ai-assistant" className={`${isScrolled ? 'text-neutral-darkest' : 'text-white'} hover:text-primary transition-colors flex items-center`}>
              <i className="bi bi-robot mr-1"></i> AI Assistant
            </Link>
            <LanguageSelector isScrolled={isScrolled} />
            <Link to="/contact" className={`btn ${isScrolled ? 'btn-primary' : 'btn-outline'}`}>
              Get Free Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <LanguageSelector isScrolled={isScrolled} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`ml-4 ${isScrolled ? 'text-neutral-darkest' : 'text-white'}`}
            >
              <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg">
            <Link to="/" className="block py-2 px-4 text-neutral-darkest hover:bg-primary-light rounded-md">
              Home
            </Link>
            <Link to="/treatments" className="block py-2 px-4 text-neutral-darkest hover:bg-primary-light rounded-md">
              Treatments
            </Link>
            <Link to="/about" className="block py-2 px-4 text-neutral-darkest hover:bg-primary-light rounded-md">
              About
            </Link>
            <Link to="/blog" className="block py-2 px-4 text-neutral-darkest hover:bg-primary-light rounded-md">
              Blog
            </Link>
            <Link to="/contact" className="block py-2 px-4 text-neutral-darkest hover:bg-primary-light rounded-md">
              Contact
            </Link>
            <Link to="/ai-assistant" className="block py-2 px-4 text-neutral-darkest hover:bg-primary-light rounded-md flex items-center">
              <i className="bi bi-robot mr-1"></i> AI Assistant
            </Link>
            <Link to="/contact" className="block mt-4 btn btn-primary text-center">
              Get Free Consultation
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
