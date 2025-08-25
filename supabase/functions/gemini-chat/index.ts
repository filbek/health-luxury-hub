import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { messages, options = {} } = await req.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({
          error: 'Invalid request',
          message: 'Messages array is required and must not be empty'
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
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

    // For now, we'll use a simple response since we can't run Gemini CLI in Edge Functions
    // In production, you would integrate with Gemini API directly
    const response = `I'm a health consultation AI assistant for Health Luxury Hub. I understand you're asking: "${messages[messages.length - 1].content}". 

As a premium medical tourism service in Istanbul, Turkey, I can provide information about our treatments, procedures, and services. However, please note that this is general information and not medical advice. For personalized medical consultation, please contact our medical team directly.

How can I help you with your medical tourism journey to Istanbul?`;

    return new Response(
      JSON.stringify({
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
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('Error in gemini-chat function:', error)
    return new Response(
      JSON.stringify({
        error: 'Failed to generate response',
        message: error.message
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
