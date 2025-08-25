import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getSiteFeatures } from '../services/publicDataService';

const WhyChooseUsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const data = await getSiteFeatures('why-choose-us');
        setFeatures(data);
      } catch (error) {
        console.error('Error fetching features:', error);
        // Fallback to static data
        setFeatures([
          {
            icon: 'bi-award',
            title: 'World-Class Medical Expertise',
            description: 'Our network includes internationally accredited hospitals and JCI-certified facilities with top specialists.'
          },
          {
            icon: 'bi-globe',
            title: 'Cultural Experience',
            description: 'Combine your medical treatment with unforgettable cultural experiences in historic Istanbul.'
          },
          {
            icon: 'bi-translate',
            title: 'Multilingual Support',
            description: 'Our team provides support in English, Arabic, Russian, and Spanish throughout your journey.'
          },
          {
            icon: 'bi-currency-dollar',
            title: 'Cost-Effective Solutions',
            description: 'Premium healthcare at a fraction of the cost compared to Western countries without compromising quality.'
          },
          {
            icon: 'bi-heart',
            title: 'Comprehensive Care',
            description: 'From initial consultation to post-treatment follow-up, we provide complete medical care and support.'
          },
          {
            icon: 'bi-star',
            title: 'Personalized Care',
            description: 'Customized treatment plans and dedicated personal assistants throughout your stay.'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg animate-pulse">
                <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title font-serif text-neutral-darkest">Why Choose Health Luxury Hub</h2>
        <p className="section-subtitle">
          We combine medical excellence with luxury experiences to ensure your journey to health is comfortable and memorable
        </p>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div 
              key={feature.id || index}
              className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6">
                <i className={`bi ${feature.icon_class || feature.icon} text-2xl text-primary-dark`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-neutral-dark">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
