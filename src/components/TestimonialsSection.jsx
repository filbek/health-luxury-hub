import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getPublishedTestimonials } from '../services/publicDataService';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getPublishedTestimonials({ featured: true });
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        // Fallback to static data if needed
        setTestimonials([
          {
            id: 1,
            name: 'Sarah Johnson',
            location: 'United Kingdom',
            image_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
            testimonial_text: 'My limb lengthening surgery in Istanbul was life-changing. The medical care was exceptional, and exploring the city during my recovery was an unexpected bonus. The Bosphorus cruise was magical!',
            treatment: 'Limb Lengthening Surgery',
            rating: 5
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">Loading testimonials...</div>
          </div>
        </div>
      </section>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title font-serif text-neutral-darkest">Patient Success Stories</h2>
        <p className="section-subtitle">
          Hear from our patients who experienced our premium medical care and Istanbul's cultural treasures
        </p>
        
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3 pb-6">
              <div className="testimonial-card h-full flex flex-col">
                <div className="testimonial-header">
                  <img
                    src={testimonial.image_url || "https://placehold.co/100x100/4fc3f7/ffffff?text=Patient"}
                    alt={testimonial.name}
                    className="testimonial-image"
                    crossOrigin="anonymous"
                  />
                  <div>
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-location">{testimonial.location}</p>
                    <p className="text-primary text-sm">{testimonial.treatment}</p>
                  </div>
                </div>
                <div className="mt-4 mb-2">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-yellow-400"></i>
                  ))}
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  <i className="bi bi-star-fill text-yellow-400"></i>
                </div>
                <p className="testimonial-content flex-grow">"{testimonial.testimonial_text || testimonial.text}"</p>
              </div>
            </div>
          ))}
        </Slider>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn btn-primary">
            View Before & After Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
