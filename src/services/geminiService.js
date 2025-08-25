/**
 * Gemini AI Service
 *
 * This service provides functions to interact with the Gemini 2.5 Pro model via local backend.
 * It handles API requests for text generation, chat completions, and other AI capabilities.
 * Updated to use local Gemini CLI integration instead of OpenRouter.
 */

// Backend API configuration
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

// Use Supabase Edge Functions in production, local backend in development
const isProduction = import.meta.env.PROD;
const API_BASE_URL = isProduction
  ? `${SUPABASE_URL}/functions/v1`
  : `${BACKEND_URL}/api/gemini`;

// Fallback to OpenRouter if backend is not available
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.5-pro';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

/**
 * Generate a response from Gemini AI via local backend
 *
 * @param {Array} messages - Array of message objects with role and content
 * @param {Object} options - Additional options for the API request
 * @returns {Promise} - The response from the API
 */
export const generateChatCompletion = async (messages, options = {}) => {
  try {
    const endpoint = isProduction
      ? `${API_BASE_URL}/gemini-chat`
      : `${API_BASE_URL}/chat`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: messages,
        options: options
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to generate response');
    }

    return await response.json();
  } catch (error) {
    console.error('Error generating AI response:', error);

    // Fallback error message
    if (error.message.includes('fetch')) {
      throw new Error('Unable to connect to AI service. Please make sure the backend server is running.');
    }

    throw error;
  }
};

/**
 * Generate a health consultation response via local backend
 *
 * @param {string} query - User's health-related query
 * @returns {Promise} - The AI response focused on health consultation
 */
export const generateHealthConsultation = async (query) => {
  try {
    const endpoint = isProduction
      ? `${API_BASE_URL}/health-consultation`
      : `${API_BASE_URL}/health-consultation`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to generate health consultation');
    }

    return await response.json();
  } catch (error) {
    console.error('Error generating health consultation:', error);

    // Fallback error message
    if (error.message.includes('fetch')) {
      throw new Error('Unable to connect to AI service. Please make sure the backend server is running.');
    }

    throw error;
  }
};

/**
 * Generate a treatment recommendation via local backend
 *
 * @param {Object} userInfo - Information about the user's medical needs
 * @returns {Promise} - The AI response with treatment recommendations
 */
export const generateTreatmentRecommendation = async (userInfo) => {
  try {
    const response = await fetch(`${API_BASE_URL}/treatment-recommendation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userInfo: userInfo
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to generate treatment recommendation');
    }

    return await response.json();
  } catch (error) {
    console.error('Error generating treatment recommendation:', error);

    // Fallback error message
    if (error.message.includes('fetch')) {
      throw new Error('Unable to connect to AI service. Please make sure the backend server is running.');
    }

    throw error;
  }
};

export default {
  generateChatCompletion,
  generateHealthConsultation,
  generateTreatmentRecommendation
};
