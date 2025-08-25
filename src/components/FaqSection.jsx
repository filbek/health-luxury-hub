import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFaqItems } from '../services/publicDataService';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await getFaqItems();
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
        // Fallback to static data
        setFaqs([
          {
            question: 'How do I start the process for medical treatment in Istanbul?',
            answer: 'Begin by scheduling a free online consultation through our website. Our medical team will review your case, recommend treatment options, and provide a personalized treatment plan with pricing.'
          },
          {
            question: 'What is included in the treatment packages?',
            answer: 'Our all-inclusive packages typically include the medical procedure, accommodation in a 5-star hotel, airport and hospital transfers, interpreter services, and cultural tours of Istanbul. Each package is customized based on the treatment type and duration.'
          },
          {
            question: 'How much deposit do I need to pay to secure my treatment?',
            answer: 'We require only a 10% deposit to secure your treatment date and package. The remaining balance can be paid upon arrival in Istanbul. We accept credit cards, PayPal, and bank transfers.'
          },
          {
            question: 'Are the doctors and hospitals internationally accredited?',
            answer: 'Yes, all our partner hospitals are internationally accredited, with many holding JCI (Joint Commission International) certification. Our doctors are board-certified specialists with international training and experience.'
          },
          {
            question: 'Do I need a visa to visit Turkey for medical treatment?',
            answer: 'Visa requirements depend on your nationality. Many countries can obtain an e-visa online or visa on arrival. Our patient coordinators will assist you with the visa process and provide necessary medical documentation if required.'
          },
          {
            question: 'What languages do your staff speak?',
            answer: 'Our team provides services in English, Arabic, Russian, and Spanish. We also have interpreters available for other languages upon request to ensure clear communication throughout your treatment journey.'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title font-serif text-neutral-darkest">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find answers to common questions about our medical tourism services in Istanbul
        </p>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id || index}
              className="mb-4 border border-neutral rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-neutral-lightest hover:bg-neutral-light transition-colors duration-200 flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-neutral-darkest">{faq.question}</span>
                <i className={`bi ${activeIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'} text-primary`}></i>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-neutral-dark">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-dark mb-6">
            Still have questions? Our medical consultants are here to help.
          </p>
          <Link 
            to="/contact" 
            className="btn btn-primary"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
