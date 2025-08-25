import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { generateHealthConsultation } from '../../services/geminiService';

/**
 * ChatContainer component that manages the chat interface and interactions
 * 
 * @returns {JSX.Element} - The rendered component
 */
const ChatContainer = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your Health Luxury Hub assistant. How can I help you with your medical tourism questions about Istanbul?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (content) => {
    // Add user message to chat
    const userMessage = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    
    // Show loading state
    setIsLoading(true);
    
    try {
      // Get AI response
      const response = await generateHealthConsultation(content);
      const assistantMessage = { 
        role: 'assistant', 
        content: response.choices[0].message.content 
      };
      
      // Add AI response to chat
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      // Add error message
      setMessages(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: 'I apologize, but I encountered an error processing your request. Please try again later.' 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="bg-primary text-white p-4">
        <h3 className="text-xl font-bold font-serif flex items-center">
          <i className="bi bi-robot mr-2"></i>
          Health Luxury Hub Assistant
        </h3>
        <p className="text-sm opacity-80">Powered by Gemini 2.5 Pro</p>
      </div>
      
      <div className="p-4 h-96 overflow-y-auto bg-neutral-lightest">
        {messages.map((message, index) => (
          <ChatMessage 
            key={index} 
            role={message.role} 
            content={message.content} 
          />
        ))}
        
        {isLoading && (
          <ChatMessage 
            role="assistant" 
            content="" 
            isLoading={true} 
          />
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-neutral">
        <ChatInput 
          onSendMessage={handleSendMessage} 
          isLoading={isLoading} 
        />
      </div>
    </motion.div>
  );
};

export default ChatContainer;
