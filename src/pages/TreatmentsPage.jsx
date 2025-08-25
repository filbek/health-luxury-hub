import React, { useState } from 'react';
import treatmentsData from '../data/treatmentsData';
import TreatmentCard from '../components/TreatmentCard';

const TreatmentsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All Treatments' },
    { id: 'cosmetic', name: 'Cosmetic & Aesthetic' },
    { id: 'orthopedic', name: 'Orthopedic' },
    { id: 'bariatric', name: 'Weight Loss' },
    { id: 'dental', name: 'Dental' },
    { id: 'other', name: 'Other Specialties' }
  ];
  
  // Filter treatments based on active filter
  // In a real app, you would have proper categories in your data
  const filteredTreatments = treatmentsData.filter(treatment => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'cosmetic') return ['plastic-surgery', 'hair-transplant'].includes(treatment.id);
    if (activeFilter === 'orthopedic') return ['limb-lengthening'].includes(treatment.id);
    if (activeFilter === 'bariatric') return ['obesity-surgery'].includes(treatment.id);
    if (activeFilter === 'dental') return ['dental-surgery'].includes(treatment.id);
    if (activeFilter === 'other') return ['organ-cancer-treatments', 'cardiovascular-surgeries', 'eye-surgeries'].includes(treatment.id);
    return true;
  });

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-primary-light py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center font-serif">Medical Treatments</h1>
          <p className="text-xl text-neutral-dark text-center max-w-3xl mx-auto">
            Discover our premium medical treatments combined with luxury Istanbul experiences
          </p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="bg-white py-6 shadow-md sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-neutral-light text-neutral-darkest hover:bg-neutral'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Treatments Grid */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTreatments.map(treatment => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
          
          {filteredTreatments.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">No treatments found</h3>
              <p className="text-neutral-dark">Please try a different filter or contact us for custom treatment options.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6 font-serif">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We offer many more specialized treatments and can create custom packages tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn bg-white text-primary hover:bg-neutral-light">
              Request Custom Treatment
            </a>
            <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="btn bg-green-500 hover:bg-green-600 text-white">
              <i className="bi bi-whatsapp mr-2"></i>
              Chat with a Specialist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentsPage;
