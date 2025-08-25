import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHeroSection } from '../services/publicDataService';

const HeroSection = ({ pageSlug = 'home' }) => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await getHeroSection(pageSlug);
        setHeroData(data);
      } catch (error) {
        console.error('Error fetching hero data:', error);
        // Fallback to default data
        setHeroData({
          title: 'World-Class Medical Care in Beautiful Istanbul',
          description: 'Experience premium healthcare combined with the rich cultural heritage of Turkey',
          primary_button_text: 'Get Free Consultation',
          primary_button_link: '/contact',
          secondary_button_text: 'View Treatments',
          secondary_button_link: '/treatments',
          background_image_url: 'https://images.unsplash.com/photo-1596941248238-0d49dcaa4263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, [pageSlug]);

  if (loading) {
    return (
      <section className="hero-video-container">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="animate-pulse">
            <div className="h-16 bg-white/20 rounded mb-6"></div>
            <div className="h-6 bg-white/20 rounded mb-8"></div>
            <div className="flex space-x-4">
              <div className="h-12 w-48 bg-white/20 rounded"></div>
              <div className="h-12 w-48 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!heroData) {
    return null;
  }
  return (
    <section className="hero-video-container">
      {/* Background - Video or Image */}
      {heroData.background_video_url ? (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={heroData.background_image_url}
        >
          <source
            src={heroData.background_video_url}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="hero-video"
          style={{
            backgroundImage: `url(${heroData.background_image_url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      )}

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
          {heroData.title}
        </h1>
        {heroData.subtitle && (
          <h2 className="text-xl md:text-2xl mb-4 font-light">
            {heroData.subtitle}
          </h2>
        )}

        {heroData.description && (
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            {heroData.description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          {heroData.primary_button_text && heroData.primary_button_link && (
            <Link to={heroData.primary_button_link} className="btn btn-primary">
              <i className="bi bi-calendar-check mr-2"></i>
              {heroData.primary_button_text}
            </Link>
          )}
          <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="btn bg-green-500 hover:bg-green-600 text-white">
            <i className="bi bi-whatsapp mr-2"></i>
            Chat on WhatsApp
          </a>
          {heroData.secondary_button_text && heroData.secondary_button_link && (
            <Link to={heroData.secondary_button_link} className="btn btn-outline">
              <i className="bi bi-airplane mr-2"></i>
              {heroData.secondary_button_text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
