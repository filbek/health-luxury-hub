import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AIAssistantSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-neutral-darkest">
                Meet Your AI Health Assistant
              </h2>
              <p className="text-lg mb-6 text-neutral-dark">
                Get instant answers to all your questions about medical treatments, recovery processes, and exploring Istanbul during your medical journey.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mt-1 mr-3"></i>
                  <span>24/7 availability for your medical tourism questions</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mt-1 mr-3"></i>
                  <span>Detailed information about treatments and procedures</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mt-1 mr-3"></i>
                  <span>Personalized recommendations based on your needs</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mt-1 mr-3"></i>
                  <span>Powered by advanced Gemini 2.5 Pro AI technology</span>
                </li>
              </ul>
              <Link to="/ai-assistant" className="btn btn-primary">
                <i className="bi bi-robot mr-2"></i>
                Chat with AI Assistant
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-primary text-white p-3 rounded-lg mb-4 inline-block">
                  <i className="bi bi-robot mr-2"></i>
                  AI Assistant
                </div>
                <div className="bg-neutral-light p-4 rounded-lg mb-4">
                  <p className="text-neutral-darkest">Hello! I'm your Health Luxury Hub assistant. How can I help you with your medical tourism questions about Istanbul?</p>
                </div>
                <div className="bg-primary-light p-4 rounded-lg mb-4 text-right">
                  <p className="text-neutral-darkest">I'm interested in hair transplant procedures. What should I know about recovery time?</p>
                </div>
                <div className="bg-neutral-light p-4 rounded-lg">
                  <p className="text-neutral-darkest">For hair transplant procedures in Istanbul, the typical recovery timeline is:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-neutral-darkest">
                    <li>Days 1-3: Initial healing with some swelling</li>
                    <li>Days 4-7: Scabs form and begin to fall off</li>
                    <li>Days 8-14: Most visible signs of surgery fade</li>
                    <li>2-3 weeks: Return to normal activities</li>
                  </ul>
                  <p className="mt-2 text-neutral-darkest">Would you like more specific information about the procedure itself?</p>
                </div>
                <div className="mt-4 text-center">
                  <Link to="/ai-assistant" className="text-primary hover:text-primary-dark font-medium">
                    Continue this conversation <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-light rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-light rounded-full -z-10"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAssistantSection;
