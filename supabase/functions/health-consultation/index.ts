import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

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
    const { query } = await req.json()

    if (!query || typeof query !== 'string') {
      return new Response(
        JSON.stringify({
          error: 'Invalid request',
          message: 'Query string is required'
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Generate a health consultation response
    const systemPrompt = `You are a helpful AI assistant for Health Luxury Hub, a premium medical tourism service in Istanbul, Turkey. 
    Provide informative and helpful responses about medical treatments, procedures, recovery, and tourism in Istanbul. 
    Always clarify that you're providing general information and not medical advice, and recommend consulting with a healthcare professional for personalized advice.
    Focus on being helpful, accurate, and supportive to potential medical tourists.`;

    // For now, provide a template response
    const response = `Thank you for your question about "${query}".

As Health Luxury Hub's AI assistant, I'm here to provide general information about medical tourism in Istanbul. 

**Important Disclaimer:** The information I provide is for general educational purposes only and should not be considered medical advice. For personalized medical consultation and treatment recommendations, please consult with our qualified medical professionals.

**About Health Luxury Hub:**
- Premium medical tourism services in Istanbul, Turkey
- World-class medical facilities and internationally trained surgeons
- Comprehensive packages including treatment, accommodation, and tourism experiences
- Specializing in limb lengthening, cosmetic surgery, hair transplants, and more

**Next Steps:**
1. Schedule a consultation with our medical team
2. Review our treatment packages and options
3. Plan your medical tourism journey to Istanbul

Would you like specific information about any of our treatments or services? I'm here to help guide you through your medical tourism journey.

**Contact Information:**
- Email: info@healthluxuryhub.com
- Phone: +90 500 000 0000

Please feel free to ask any specific questions about our services, treatments, or Istanbul as a medical tourism destination.`;

    return new Response(
      JSON.stringify({
        choices: [{
          message: {
            role: 'assistant',
            content: response
          }
        }]
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('Error in health-consultation function:', error)
    return new Response(
      JSON.stringify({
        error: 'Failed to generate health consultation',
        message: error.message
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
