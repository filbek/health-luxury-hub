import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-primary-light py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center font-serif">About Health Luxury Hub</h1>
          <p className="text-xl text-neutral-dark text-center max-w-3xl mx-auto">
            Combining world-class medical expertise with luxury experiences in beautiful Istanbul
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Our Story</h2>
              <p className="text-lg mb-4">
                Health Luxury Hub was founded with a vision to transform medical tourism by combining world-class healthcare with exceptional cultural experiences. Our journey began when our founder, a prominent Turkish surgeon, recognized the potential to offer international patients access to Turkey's advanced medical facilities while experiencing the country's rich cultural heritage.
              </p>
              <p className="text-lg mb-4">
                Since our establishment, we have helped thousands of patients from over 50 countries receive high-quality medical care while enjoying the beauty and hospitality of Istanbul. Our commitment to excellence in both healthcare and hospitality has made us a leader in the premium medical tourism industry.
              </p>
              <p className="text-lg">
                Today, Health Luxury Hub partners with Istanbul's most prestigious hospitals and clinics, working with top specialists across all medical fields to provide comprehensive care in a luxurious environment.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Health Luxury Hub Story" 
                className="rounded-xl shadow-lg w-full h-auto"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Values */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-serif">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                To provide exceptional medical care combined with unforgettable cultural experiences, ensuring that our patients receive not just treatment, but a transformative journey that enhances both their health and their appreciation for Istanbul's unique heritage.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be the global leader in premium medical tourism, setting new standards for patient care, cultural integration, and luxury experiences that make health journeys memorable and rewarding.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-heart-pulse text-2xl text-primary-dark"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Excellence in Care</h4>
              <p className="text-neutral-dark">
                We partner only with internationally accredited hospitals and top specialists to ensure the highest standards of medical care.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-person-heart text-2xl text-primary-dark"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Patient-Centered Approach</h4>
              <p className="text-neutral-dark">
                Every aspect of our service is designed around patient needs, comfort, and satisfaction, with personalized care plans for each individual.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-globe text-2xl text-primary-dark"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Cultural Integration</h4>
              <p className="text-neutral-dark">
                We believe that experiencing Istanbul's rich heritage enhances the healing process and creates lasting memories beyond medical treatment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-stars text-2xl text-primary-dark"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Luxury Experience</h4>
              <p className="text-neutral-dark">
                From 5-star accommodations to VIP transfers and personalized service, we ensure every aspect of your journey is comfortable and premium.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-shield-check text-2xl text-primary-dark"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Transparency & Trust</h4>
              <p className="text-neutral-dark">
                We provide clear information about procedures, costs, and outcomes, building trust through honest communication and reliable service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-arrow-repeat text-2xl text-primary-dark"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Continuous Improvement</h4>
              <p className="text-neutral-dark">
                We constantly evaluate and enhance our services based on patient feedback and medical advancements to provide the best possible experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center font-serif">Our Leadership Team</h2>
          <p className="text-lg text-neutral-dark text-center max-w-3xl mx-auto mb-12">
            Meet the experienced professionals who lead Health Luxury Hub and ensure exceptional care for every patient
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Dr. Ahmet Yilmaz" 
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Dr. Ahmet Yilmaz</h3>
              <p className="text-primary font-medium mb-2">Founder & Medical Director</p>
              <p className="text-neutral-dark">
                Board-certified surgeon with over 20 years of experience in international healthcare management.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Dr. Sarah Johnson" 
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Dr. Sarah Johnson</h3>
              <p className="text-primary font-medium mb-2">International Patient Coordinator</p>
              <p className="text-neutral-dark">
                Specializes in creating personalized treatment plans for international patients from diverse backgrounds.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Mehmet Kaya" 
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Mehmet Kaya</h3>
              <p className="text-primary font-medium mb-2">Cultural Experience Director</p>
              <p className="text-neutral-dark">
                Expert in Turkish history and culture, creating unique experiences that complement medical treatments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Ayşe Demir" 
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Ayşe Demir</h3>
              <p className="text-primary font-medium mb-2">Patient Experience Manager</p>
              <p className="text-neutral-dark">
                Dedicated to ensuring every aspect of patient care exceeds expectations, from arrival to departure.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Partner Hospitals */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center font-serif">Our Partner Hospitals</h2>
          <p className="text-lg text-neutral-dark text-center max-w-3xl mx-auto mb-12">
            We collaborate with Istanbul's most prestigious medical facilities, all internationally accredited and equipped with cutting-edge technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Istanbul International Hospital" 
                className="w-full h-48 object-cover"
                crossOrigin="anonymous"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Istanbul International Hospital</h3>
                <p className="text-neutral-dark mb-4">
                  JCI-accredited facility specializing in orthopedics, cardiology, and oncology with state-of-the-art surgical suites.
                </p>
                <div className="flex items-center text-primary">
                  <i className="bi bi-award-fill mr-2"></i>
                  <span>JCI Accredited</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Bosphorus Medical Center" 
                className="w-full h-48 object-cover"
                crossOrigin="anonymous"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Bosphorus Medical Center</h3>
                <p className="text-neutral-dark mb-4">
                  Leading facility for plastic surgery, hair transplantation, and dental procedures with a focus on aesthetic excellence.
                </p>
                <div className="flex items-center text-primary">
                  <i className="bi bi-award-fill mr-2"></i>
                  <span>ISO 9001 Certified</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Anatolia Health Institute" 
                className="w-full h-48 object-cover"
                crossOrigin="anonymous"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Anatolia Health Institute</h3>
                <p className="text-neutral-dark mb-4">
                  Specialized in advanced orthopedic procedures including limb lengthening and complex reconstructive surgeries.
                </p>
                <div className="flex items-center text-primary">
                  <i className="bi bi-award-fill mr-2"></i>
                  <span>European Certification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center font-serif">What Our Patients Say</h2>
          <p className="text-lg text-neutral-dark text-center max-w-3xl mx-auto mb-12">
            Read about the experiences of patients who have trusted Health Luxury Hub for their medical journeys
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="Ahmed Al-Farsi" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  crossOrigin="anonymous"
                />
                <div>
                  <h4 className="font-bold">Ahmed Al-Farsi</h4>
                  <p className="text-neutral-dark">United Arab Emirates</p>
                </div>
              </div>
              <div className="mb-4">
                <i className="bi bi-star-fill text-yellow-400"></i>
                <i className="bi bi-star-fill text-yellow-400"></i>
                <i className="bi bi-star-fill text-yellow-400"></i>
                <i className="bi bi-star-fill text-yellow-400"></i>
                <i className="bi bi-star-fill text-yellow-400"></i>
              </div>
              <p className="italic text-neutral-dark mb-4">
                "My experience with Health Luxury Hub exceeded all expectations. The gastric sleeve procedure was seamless, and the results have been life-changing. Beyond the excellent medical care, the cultural tours of Istanbul made my recovery period enjoyable and memorable. I highly recommend their services to anyone considering medical treatment abroad."
              </p>
              <p className="text-primary font-medium">Obesity Surgery Patient</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="Sarah Johnson" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  crossOrigin="anonymous"
                />
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-neutral-dark">United Kingdom</p>
                </div>
              </div>
              <div className="mb-4">
                <i className="bi bi-star-fill text-yellow-400"></i>
                <i className="bi bi-star-fill text-yellow-400"></i>
                <i className="bi bi-star-fill text-yellow-400"></i>
                <i className="bi bi-star-fill text-yellow-400"></i>
                <i className="bi bi-star-fill text-yellow-400"></i>
              </div>
              <p className="italic text-neutral-dark mb-4">
                "After researching medical tourism options worldwide, I chose Health Luxury Hub for my limb lengthening surgery, and it was the best decision. The surgical team was world-class, and my recovery was carefully monitored. The 5-star accommodation and personalized care made a complex medical journey feel like a luxury experience. The Bosphorus dinner cruise during my recovery was magical!"
              </p>
              <p className="text-primary font-medium">Limb Lengthening Patient</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6 font-serif">Ready to Begin Your Health Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss your medical needs and discover how we can create a personalized treatment experience for you in Istanbul
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary hover:bg-neutral-light">
              <i className="bi bi-calendar-check mr-2"></i>
              Get Free Consultation
            </Link>
            <Link to="/treatments" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
              <i className="bi bi-search mr-2"></i>
              Explore Treatments
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
