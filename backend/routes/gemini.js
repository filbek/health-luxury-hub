import express from 'express';
import { execGeminiCLI } from '../services/geminiService.js';

const router = express.Router();

/**
 * POST /api/gemini/chat
 * Generate a chat completion using Gemini CLI
 */
router.post('/chat', async (req, res) => {
  try {
    const { messages, options = {} } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Messages array is required and must not be empty'
      });
    }

    // Convert messages to a single prompt for CLI
    const prompt = messages.map(msg => {
      if (msg.role === 'system') {
        return `System: ${msg.content}`;
      } else if (msg.role === 'user') {
        return `User: ${msg.content}`;
      } else if (msg.role === 'assistant') {
        return `Assistant: ${msg.content}`;
      }
      return msg.content;
    }).join('\n\n');

    const response = await execGeminiCLI(prompt, options);

    res.json({
      choices: [{
        message: {
          role: 'assistant',
          content: response
        }
      }],
      usage: {
        prompt_tokens: prompt.length,
        completion_tokens: response.length,
        total_tokens: prompt.length + response.length
      }
    });

  } catch (error) {
    console.error('Error in /api/gemini/chat:', error);
    res.status(500).json({
      error: 'Failed to generate response',
      message: error.message
    });
  }
});

/**
 * POST /api/gemini/health-consultation
 * Generate a health consultation response
 */
router.post('/health-consultation', async (req, res) => {
  try {
    const { query } = req.body;

    if (!query || typeof query !== 'string') {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Query string is required'
      });
    }

    const systemPrompt = `You are a helpful AI assistant for Health Luxury Hub, a premium medical tourism service in Istanbul, Turkey. 
    Provide informative and helpful responses about medical treatments, procedures, recovery, and tourism in Istanbul. 
    Always clarify that you're providing general information and not medical advice, and recommend consulting with a healthcare professional for personalized advice.
    Focus on being helpful, accurate, and supportive to potential medical tourists.`;

    const fullPrompt = `${systemPrompt}\n\nUser: ${query}`;

    const response = await execGeminiCLI(fullPrompt, { temperature: 0.5 });

    res.json({
      choices: [{
        message: {
          role: 'assistant',
          content: response
        }
      }]
    });

  } catch (error) {
    console.error('Error in /api/gemini/health-consultation:', error);
    res.status(500).json({
      error: 'Failed to generate health consultation',
      message: error.message
    });
  }
});

/**
 * POST /api/gemini/treatment-recommendation
 * Generate treatment recommendations
 */
router.post('/treatment-recommendation', async (req, res) => {
  try {
    const { userInfo } = req.body;

    if (!userInfo || typeof userInfo !== 'object') {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'User info object is required'
      });
    }

    const { medicalCondition, preferences, budget, timeframe } = userInfo;

    const systemPrompt = `You are a helpful AI assistant for Health Luxury Hub, a premium medical tourism service in Istanbul, Turkey.
    Your task is to provide personalized treatment recommendations based on the user's medical condition, preferences, budget, and timeframe.
    Focus on treatments available in Istanbul, Turkey. Always clarify that you're providing general information and not medical advice.`;

    const userPrompt = `I'm interested in medical treatment for ${medicalCondition}. 
    My preferences: ${preferences}. 
    My budget is around ${budget}. 
    I'm planning to travel within ${timeframe}.
    What treatments would you recommend?`;

    const fullPrompt = `${systemPrompt}\n\nUser: ${userPrompt}`;

    const response = await execGeminiCLI(fullPrompt, { temperature: 0.7 });

    res.json({
      choices: [{
        message: {
          role: 'assistant',
          content: response
        }
      }]
    });

  } catch (error) {
    console.error('Error in /api/gemini/treatment-recommendation:', error);
    res.status(500).json({
      error: 'Failed to generate treatment recommendation',
      message: error.message
    });
  }
});

export default router;
