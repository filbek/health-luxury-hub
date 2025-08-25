import React from 'react';
import HeroSection from '../components/HeroSection';
import TreatmentsSection from '../components/TreatmentsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import IstanbulExperienceSection from '../components/IstanbulExperienceSection';
import AIAssistantSection from '../components/AIAssistantSection';
import BookingSection from '../components/BookingSection';
import FaqSection from '../components/FaqSection';
import BlogPreviewSection from '../components/BlogPreviewSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TreatmentsSection />
      <WhyChooseUsSection />
      <IstanbulExperienceSection />
      <TestimonialsSection />
      <AIAssistantSection />
      <BookingSection />
      <FaqSection />
      <BlogPreviewSection />
    </>
  );
};

export default HomePage;
