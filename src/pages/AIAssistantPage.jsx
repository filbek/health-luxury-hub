import React from 'react';
import { motion } from 'framer-motion';
import { ChatContainer } from '../components/AIChat';

const AIAssistantPage = () => {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-light py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-neutral-darkest">
              Your AI Health Assistant
            </h1>
            <p className="text-xl mb-8 text-neutral-dark">
              Get instant answers about medical treatments, recovery processes, and exploring Istanbul during your medical journey
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Chat Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ChatContainer />
            
            <div className="mt-8 bg-neutral-lightest p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 font-serif">How can our AI assistant help you?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mt-1 mr-3"></i>
                  <span>Get information about specific medical treatments and procedures</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mt-1 mr-3"></i>
                  <span>Learn about recovery processes and what to expect</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mt-1 mr-3"></i>
                  <span>Discover tourist attractions and activities in Istanbul</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mt-1 mr-3"></i>
                  <span>Get answers about accommodation and transportation</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mt-1 mr-3"></i>
                  <span>Understand the costs and financing options for treatments</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-neutral-dark italic">
                Note: Our AI assistant provides general information only and not medical advice. 
                For personalized medical advice, please consult with a healthcare professional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAssistantPage;
