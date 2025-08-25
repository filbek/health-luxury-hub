import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-primary-light py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center font-serif">Contact Us</h1>
          <p className="text-xl text-neutral-dark text-center max-w-3xl mx-auto">
            Get in touch with our medical tourism specialists for personalized consultations and information
          </p>
        </div>
      </div>
      
      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Get in Touch</h2>
              <p className="text-lg mb-8">
                Our medical consultants are available to answer your questions and provide personalized treatment recommendations. 
                Fill out the form or contact us directly through one of the methods below.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4">
                    <i className="bi bi-geo-alt text-xl text-primary-dark"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Our Location</h3>
                    <p className="text-neutral-dark">Levent, Beşiktaş, Istanbul, Turkey</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4">
                    <i className="bi bi-telephone text-xl text-primary-dark"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone Number</h3>
                    <p className="text-neutral-dark">+90 500 000 0000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4">
                    <i className="bi bi-envelope text-xl text-primary-dark"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email Address</h3>
                    <p className="text-neutral-dark">info@healthluxuryhub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4">
                    <i className="bi bi-clock text-xl text-primary-dark"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Working Hours</h3>
                    <p className="text-neutral-dark">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-neutral-dark">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Request a Free Consultation</h2>
              <p className="text-lg mb-8">
                Fill out the form below to request a free consultation with our medical specialists. 
                We'll contact you within 24 hours to discuss your treatment options.
              </p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center font-serif">Our Location</h2>
          <p className="text-lg text-neutral-dark text-center max-w-3xl mx-auto mb-8">
            Our main office is located in the prestigious Levent district of Istanbul, easily accessible from all parts of the city
          </p>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12036.459083637307!2d29.00381271541928!3d41.08139079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab63f6f8f8f33%3A0xe014e6b95e44f60!2sLevent%2C%20Be%C5%9Fikta%C5%9F%2FIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1636550000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center font-serif">Frequently Asked Questions</h2>
          <p className="text-lg text-neutral-dark text-center max-w-3xl mx-auto mb-12">
            Find answers to common questions about our medical tourism services
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-neutral-lightest rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-bold">How do I start the process for medical treatment in Istanbul?</h3>
                    <span className="transition-transform group-open:rotate-180">
                      <i className="bi bi-chevron-down text-primary"></i>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-neutral-dark">
                      Begin by scheduling a free online consultation through our website. Our medical team will review your case, 
                      recommend treatment options, and provide a personalized treatment plan with pricing.
                    </p>
                  </div>
                </details>
              </div>
              
              <div className="bg-neutral-lightest rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-bold">How much deposit do I need to pay to secure my treatment?</h3>
                    <span className="transition-transform group-open:rotate-180">
                      <i className="bi bi-chevron-down text-primary"></i>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-neutral-dark">
                      We require only a 10% deposit to secure your treatment date and package. The remaining balance can be paid 
                      upon arrival in Istanbul. We accept credit cards, PayPal, and bank transfers.
                    </p>
                  </div>
                </details>
              </div>
              
              <div className="bg-neutral-lightest rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-bold">Do I need a visa to visit Turkey for medical treatment?</h3>
                    <span className="transition-transform group-open:rotate-180">
                      <i className="bi bi-chevron-down text-primary"></i>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-neutral-dark">
                      Visa requirements depend on your nationality. Many countries can obtain an e-visa online or visa on arrival. 
                      Our patient coordinators will assist you with the visa process and provide necessary medical documentation if required.
                    </p>
                  </div>
                </details>
              </div>
              
              <div className="bg-neutral-lightest rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-bold">What languages do your staff speak?</h3>
                    <span className="transition-transform group-open:rotate-180">
                      <i className="bi bi-chevron-down text-primary"></i>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-neutral-dark">
                      Our team provides services in English, Arabic, Russian, and Spanish. We also have interpreters available 
                      for other languages upon request to ensure clear communication throughout your treatment journey.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
