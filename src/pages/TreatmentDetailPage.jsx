import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import treatmentsData from '../data/treatmentsData';

const TreatmentDetailPage = () => {
  const { id } = useParams();
  const [treatment, setTreatment] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Find the treatment by ID
    const foundTreatment = treatmentsData.find(t => t.id === id);
    setTreatment(foundTreatment);
    setLoading(false);
    
    // Scroll to top when treatment changes
    window.scrollTo(0, 0);
  }, [id]);
  
  if (loading) {
    return (
      <div className="pt-20 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!treatment) {
    return (
      <div className="pt-20 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Treatment Not Found</h1>
          <p className="mb-8">The treatment you're looking for doesn't exist or has been removed.</p>
          <Link to="/treatments" className="btn btn-primary">
            View All Treatments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-96">
        <img 
          src={treatment.image || "https://placehold.co/1920x800/4fc3f7/ffffff?text=Treatment"} 
          alt={treatment.title}
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <h1 className="text-4xl font-bold text-white mb-4 font-serif">{treatment.title}</h1>
            <p className="text-xl text-white max-w-3xl">{treatment.shortDescription}</p>
          </div>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="bg-white sticky top-16 z-30 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 no-scrollbar">
            <button 
              className={`px-4 py-2 mr-4 font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'overview' ? 'border-primary text-primary' : 'border-transparent text-neutral-dark hover:text-neutral-darkest'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-4 py-2 mr-4 font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'procedures' ? 'border-primary text-primary' : 'border-transparent text-neutral-dark hover:text-neutral-darkest'
              }`}
              onClick={() => setActiveTab('procedures')}
            >
              Procedures & Pricing
            </button>
            <button 
              className={`px-4 py-2 mr-4 font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'package' ? 'border-primary text-primary' : 'border-transparent text-neutral-dark hover:text-neutral-darkest'
              }`}
              onClick={() => setActiveTab('package')}
            >
              Package Details
            </button>
            <button 
              className={`px-4 py-2 mr-4 font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'faq' ? 'border-primary text-primary' : 'border-transparent text-neutral-dark hover:text-neutral-darkest'
              }`}
              onClick={() => setActiveTab('faq')}
            >
              FAQ
            </button>
          </div>
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="py-12 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 font-serif">About {treatment.title}</h2>
                <div className="prose max-w-none">
                  <p className="text-lg mb-6">{treatment.description}</p>
                  
                  <h3 className="text-2xl font-bold mb-4">Why Choose Health Luxury Hub for {treatment.title}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="bi bi-check-circle-fill text-secondary mt-1 mr-2"></i>
                      <span>Internationally accredited hospitals with state-of-the-art facilities</span>
                    </li>
                    <li className="flex items-start">
                      <i className="bi bi-check-circle-fill text-secondary mt-1 mr-2"></i>
                      <span>Board-certified specialists with extensive experience</span>
                    </li>
                    <li className="flex items-start">
                      <i className="bi bi-check-circle-fill text-secondary mt-1 mr-2"></i>
                      <span>All-inclusive packages with luxury accommodation</span>
                    </li>
                    <li className="flex items-start">
                      <i className="bi bi-check-circle-fill text-secondary mt-1 mr-2"></i>
                      <span>Personalized care with dedicated patient coordinators</span>
                    </li>
                    <li className="flex items-start">
                      <i className="bi bi-check-circle-fill text-secondary mt-1 mr-2"></i>
                      <span>Unique cultural experiences in beautiful Istanbul</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">The Procedure Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                          <span className="text-primary-dark font-bold text-xl">1</span>
                        </div>
                        <h4 className="text-lg font-bold mb-2">Consultation</h4>
                        <p className="text-neutral-dark">Initial evaluation and personalized treatment plan development</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                          <span className="text-primary-dark font-bold text-xl">2</span>
                        </div>
                        <h4 className="text-lg font-bold mb-2">Procedure</h4>
                        <p className="text-neutral-dark">Treatment performed by specialized medical professionals</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                          <span className="text-primary-dark font-bold text-xl">3</span>
                        </div>
                        <h4 className="text-lg font-bold mb-2">Recovery</h4>
                        <p className="text-neutral-dark">Comprehensive aftercare and cultural experiences during recovery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-32">
                  <div className="bg-primary p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Package Highlights</h3>
                    <p>{treatment.duration} Stay + {treatment.tourIncluded}</p>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg">Starting Price:</span>
                      <span className="text-2xl font-bold text-primary-dark">
                        {treatment.price === 'Price on Request' 
                          ? 'Price on Request' 
                          : `$${treatment.price.toLocaleString()}`
                        }
                      </span>
                    </div>
                    
                    <h4 className="font-bold mb-3">Package Includes:</h4>
                    <ul className="space-y-3 mb-6">
                      {treatment.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <i className="bi bi-check-circle-fill text-secondary mt-1 mr-2"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-3">
                      <a href="#" className="btn btn-primary w-full">
                        <i className="bi bi-calendar-check mr-2"></i>
                        Book with 10% Deposit
                      </a>
                      <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="btn bg-green-500 hover:bg-green-600 text-white w-full">
                        <i className="bi bi-whatsapp mr-2"></i>
                        Discuss on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Procedures Tab */}
          {activeTab === 'procedures' && (
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Procedures & Pricing</h2>
              <p className="text-lg mb-8">
                We offer various specialized procedures within our {treatment.title} program. 
                Each procedure is performed by expert specialists using the latest techniques and technology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {treatment.procedures.map((procedure, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">{procedure.name}</h3>
                      <p className="text-neutral-dark mb-4">{procedure.description}</p>
                      <div className="flex justify-between items-center pt-4 border-t border-neutral">
                        <span className="text-sm">Starting from:</span>
                        <span className="text-xl font-bold text-primary-dark">{procedure.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary-light p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Custom Procedures</h3>
                <p className="mb-4">
                  Need a specialized procedure not listed here? Our medical team can create custom treatment plans 
                  tailored to your specific needs and conditions.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Request Custom Procedure
                </Link>
              </div>
            </div>
          )}
          
          {/* Package Details Tab */}
          {activeTab === 'package' && (
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Package Details</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Medical Services</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <i className="bi bi-hospital text-primary text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Pre-Operative Consultation</h4>
                        <p className="text-neutral-dark">Comprehensive evaluation and personalized treatment planning</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <i className="bi bi-clipboard2-pulse text-primary text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Medical Procedure</h4>
                        <p className="text-neutral-dark">Performed by specialized medical professionals in accredited facilities</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <i className="bi bi-bandaid text-primary text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Post-Operative Care</h4>
                        <p className="text-neutral-dark">Follow-up appointments, medications, and recovery monitoring</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <i className="bi bi-translate text-primary text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Medical Interpreter</h4>
                        <p className="text-neutral-dark">Professional medical translation services throughout your treatment</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Accommodation & Experiences</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <i className="bi bi-building text-primary text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Luxury Accommodation</h4>
                        <p className="text-neutral-dark">{treatment.duration} stay in a 5-star hotel with breakfast included</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <i className="bi bi-airplane text-primary text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">VIP Transfers</h4>
                        <p className="text-neutral-dark">Airport, hotel, and hospital transfers in luxury vehicles</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <i className="bi bi-globe text-primary text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Cultural Experience</h4>
                        <p className="text-neutral-dark">{treatment.tourIncluded} with professional guide</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <i className="bi bi-person-check text-primary text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Personal Assistant</h4>
                        <p className="text-neutral-dark">Dedicated coordinator to assist with all aspects of your stay</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
                <h3 className="text-2xl font-bold mb-4">Booking Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="bi bi-chat-text text-2xl text-primary-dark"></i>
                    </div>
                    <h4 className="font-bold mb-2">Consultation</h4>
                    <p className="text-sm text-neutral-dark">Free online consultation with our medical team</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="bi bi-calendar-check text-2xl text-primary-dark"></i>
                    </div>
                    <h4 className="font-bold mb-2">Booking</h4>
                    <p className="text-sm text-neutral-dark">Secure your dates with 10% deposit payment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="bi bi-airplane-engines text-2xl text-primary-dark"></i>
                    </div>
                    <h4 className="font-bold mb-2">Arrival</h4>
                    <p className="text-sm text-neutral-dark">VIP airport pickup and hotel check-in</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="bi bi-hospital text-2xl text-primary-dark"></i>
                    </div>
                    <h4 className="font-bold mb-2">Treatment</h4>
                    <p className="text-sm text-neutral-dark">Medical procedure and recovery with cultural experiences</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a href="#" className="btn btn-primary">
                  <i className="bi bi-calendar-check mr-2"></i>
                  Book Your Package Now
                </a>
              </div>
            </div>
          )}
          
          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Frequently Asked Questions</h2>
              <p className="text-lg mb-8">
                Find answers to common questions about {treatment.title} at Health Luxury Hub
              </p>
              
              <div className="space-y-4 mb-12">
                {treatment.faq.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer">
                        <h3 className="text-lg font-bold">{item.question}</h3>
                        <span className="transition-transform group-open:rotate-180">
                          <i className="bi bi-chevron-down text-primary"></i>
                        </span>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-neutral-dark">{item.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary-light p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-3">Have More Questions?</h3>
                <p className="mb-4">
                  Our medical consultants are available to answer any questions you may have about {treatment.title}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/contact" className="btn btn-primary">
                    Contact Our Team
                  </Link>
                  <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="btn bg-green-500 hover:bg-green-600 text-white">
                    <i className="bi bi-whatsapp mr-2"></i>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Related Treatments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif">Related Treatments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentsData
              .filter(t => t.id !== treatment.id)
              .slice(0, 3)
              .map(relatedTreatment => (
                <div key={relatedTreatment.id} className="treatment-card">
                  <div className="relative overflow-hidden">
                    <img 
                      src={relatedTreatment.image || "https://placehold.co/600x400/4fc3f7/ffffff?text=Treatment"} 
                      alt={relatedTreatment.title}
                      className="treatment-image"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div className="treatment-content">
                    <h3 className="treatment-title">{relatedTreatment.title}</h3>
                    <p className="text-neutral-dark mb-3">{relatedTreatment.shortDescription}</p>
                    <Link 
                      to={`/treatments/${relatedTreatment.id}`} 
                      className="btn btn-primary w-full"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6 font-serif">Ready to Begin Your Health Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your {treatment.title} package with just 10% deposit and experience world-class healthcare in beautiful Istanbul
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="btn bg-white text-primary hover:bg-neutral-light">
              <i className="bi bi-calendar-check mr-2"></i>
              Book with 10% Deposit
            </a>
            <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="btn bg-green-500 hover:bg-green-600 text-white">
              <i className="bi bi-whatsapp mr-2"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentDetailPage;
