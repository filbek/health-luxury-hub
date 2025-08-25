import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPublishedTreatments } from '../services/publicDataService';

const TreatmentsSection = () => {
  const [featuredTreatments, setFeaturedTreatments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const data = await getPublishedTreatments({ featured: true, limit: 4 });
        setFeaturedTreatments(data);
      } catch (error) {
        console.error('Error fetching treatments:', error);
        setFeaturedTreatments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTreatments();
  }, []);
  
  if (loading) {
    return (
      <section className="py-20 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">Loading treatments...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <h2 className="section-title font-serif text-neutral-darkest">Our Premium Medical Treatments</h2>
        <p className="section-subtitle">
          Discover our world-class medical treatments combined with luxury Istanbul experiences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTreatments.map((treatment) => (
            <div key={treatment.id} className="treatment-card group">
              <div className="relative overflow-hidden">
                <img
                  src={treatment.image_url || treatment.image || "https://placehold.co/600x400/4fc3f7/ffffff?text=Treatment"}
                  alt={treatment.title}
                  className="treatment-image transition-transform duration-500 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-bold">{treatment.title}</p>
                    <p className="text-sm">{treatment.short_description || treatment.shortDescription}</p>
                  </div>
                </div>
              </div>
              <div className="treatment-content">
                <h3 className="treatment-title">{treatment.title}</h3>
                <p className="text-neutral-dark mb-3">{treatment.short_description || treatment.shortDescription}</p>
                <p className="treatment-price">
                  {treatment.price === 'Price on Request' || !treatment.price
                    ? 'Price on Request'
                    : `Starting from $${Number(treatment.price).toLocaleString()}`
                  }
                </p>
                <div className="treatment-features">
                  <div className="treatment-feature">
                    <i className="bi bi-calendar-check"></i>
                    <span>{treatment.duration} Stay</span>
                  </div>
                  <div className="treatment-feature">
                    <i className="bi bi-airplane"></i>
                    <span>Istanbul Tour Included</span>
                  </div>
                </div>
                <Link
                  to={`/treatments/${treatment.slug || treatment.id}`}
                  className="btn btn-primary w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/treatments" className="btn btn-primary">
            View All Treatments
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
