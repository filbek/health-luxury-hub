/**
 * Public Data Service
 * 
 * This service handles fetching public data from Supabase for the frontend.
 * It provides functions to get treatments, testimonials, and other public content.
 */

import { supabase } from '../supabaseClient';

/**
 * Get all published treatments
 * 
 * @param {Object} options - Query options
 * @returns {Promise<Array>} - Array of treatments
 */
export const getPublishedTreatments = async (options = {}) => {
  try {
    let query = supabase
      .from('treatments_view')
      .select('*');

    // Apply filters
    if (options.featured) {
      query = query.eq('featured', true);
    }

    if (options.category) {
      query = query.eq('category', options.category);
    }

    if (options.limit) {
      query = query.limit(options.limit);
    }

    // Apply ordering
    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching treatments:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getPublishedTreatments:', error);
    throw error;
  }
};

/**
 * Get a single treatment by slug
 * 
 * @param {string} slug - Treatment slug
 * @returns {Promise<Object>} - Treatment object
 */
export const getTreatmentBySlug = async (slug) => {
  try {
    const { data, error } = await supabase
      .from('treatments_view')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching treatment:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in getTreatmentBySlug:', error);
    throw error;
  }
};

/**
 * Get all published testimonials
 * 
 * @param {Object} options - Query options
 * @returns {Promise<Array>} - Array of testimonials
 */
export const getPublishedTestimonials = async (options = {}) => {
  try {
    let query = supabase
      .from('testimonials_public')
      .select('*')
      .eq('published', true);

    // Apply filters
    if (options.featured) {
      query = query.eq('featured', true);
    }

    if (options.treatment) {
      query = query.eq('treatment', options.treatment);
    }

    if (options.limit) {
      query = query.limit(options.limit);
    }

    // Apply ordering
    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching testimonials:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getPublishedTestimonials:', error);
    throw error;
  }
};

/**
 * Get all published blog posts
 * 
 * @param {Object} options - Query options
 * @returns {Promise<Array>} - Array of blog posts
 */
export const getPublishedBlogPosts = async (options = {}) => {
  try {
    let query = supabase
      .from('blog_posts_view')
      .select('*');

    // Apply filters
    if (options.category) {
      query = query.eq('category', options.category);
    }

    if (options.limit) {
      query = query.limit(options.limit);
    }

    // Apply ordering
    query = query.order('published_at', { ascending: false });

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching blog posts:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getPublishedBlogPosts:', error);
    throw error;
  }
};

/**
 * Get a single blog post by slug
 * 
 * @param {string} slug - Blog post slug
 * @returns {Promise<Object>} - Blog post object
 */
export const getBlogPostBySlug = async (slug) => {
  try {
    const { data, error } = await supabase
      .from('blog_posts_view')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching blog post:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in getBlogPostBySlug:', error);
    throw error;
  }
};

/**
 * Submit a contact message
 * 
 * @param {Object} messageData - Contact message data
 * @returns {Promise<string>} - Message ID
 */
export const submitContactMessage = async (messageData) => {
  try {
    const { data, error } = await supabase.rpc('submit_contact_message', {
      p_name: messageData.name,
      p_email: messageData.email,
      p_subject: messageData.subject,
      p_message: messageData.message,
      p_phone: messageData.phone || null,
      p_treatment: messageData.treatment || null
    });

    if (error) {
      console.error('Error submitting contact message:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in submitContactMessage:', error);
    throw error;
  }
};

/**
 * Get hero section for a specific page
 *
 * @param {string} pageSlug - Page slug
 * @returns {Promise<Object>} - Hero section object
 */
export const getHeroSection = async (pageSlug) => {
  try {
    const { data, error } = await supabase
      .from('hero_sections_view')
      .select('*')
      .eq('page_slug', pageSlug)
      .single();

    if (error) {
      console.error('Error fetching hero section:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getHeroSection:', error);
    return null;
  }
};

/**
 * Get FAQ items by category
 *
 * @param {string} category - FAQ category (optional)
 * @returns {Promise<Array>} - Array of FAQ items
 */
export const getFaqItems = async (category = null) => {
  try {
    let query = supabase
      .from('faq_items_view')
      .select('*');

    if (category) {
      query = query.eq('category', category);
    }

    query = query.order('display_order');

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching FAQ items:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getFaqItems:', error);
    throw error;
  }
};

/**
 * Get team members
 *
 * @param {Object} options - Query options
 * @returns {Promise<Array>} - Array of team members
 */
export const getTeamMembers = async (options = {}) => {
  try {
    let query = supabase
      .from('team_members_view')
      .select('*');

    if (options.featured) {
      query = query.eq('is_featured', true);
    }

    if (options.department) {
      query = query.eq('department', options.department);
    }

    if (options.limit) {
      query = query.limit(options.limit);
    }

    query = query.order('display_order');

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching team members:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getTeamMembers:', error);
    throw error;
  }
};

/**
 * Get medical facilities
 *
 * @param {Object} options - Query options
 * @returns {Promise<Array>} - Array of medical facilities
 */
export const getMedicalFacilities = async (options = {}) => {
  try {
    let query = supabase
      .from('medical_facilities_view')
      .select('*');

    if (options.primary) {
      query = query.eq('is_primary', true);
    }

    if (options.limit) {
      query = query.limit(options.limit);
    }

    query = query.order('display_order');

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching medical facilities:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getMedicalFacilities:', error);
    throw error;
  }
};

/**
 * Get page content for a specific page
 *
 * @param {string} pageSlug - Page slug
 * @returns {Promise<Array>} - Array of page content sections
 */
export const getPageContent = async (pageSlug) => {
  try {
    const { data, error } = await supabase
      .from('page_content_view')
      .select('*')
      .eq('page_slug', pageSlug)
      .order('display_order');

    if (error) {
      console.error('Error fetching page content:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getPageContent:', error);
    throw error;
  }
};

/**
 * Get site features by category
 *
 * @param {string} category - Feature category (optional)
 * @returns {Promise<Array>} - Array of site features
 */
export const getSiteFeatures = async (category = null) => {
  try {
    let query = supabase
      .from('site_features_view')
      .select('*');

    if (category) {
      query = query.eq('category', category);
    }

    query = query.order('display_order');

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching site features:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getSiteFeatures:', error);
    throw error;
  }
};

/**
 * Get site settings
 *
 * @returns {Promise<Object>} - Site settings object
 */
export const getSiteSettings = async () => {
  try {
    const { data, error } = await supabase
      .schema('admin')
      .from('settings')
      .select('key, value');

    if (error) {
      console.error('Error fetching site settings:', error);
      throw error;
    }

    // Convert array to object for easier access
    const settings = {};
    data.forEach(setting => {
      settings[setting.key] = setting.value;
    });

    return settings;
  } catch (error) {
    console.error('Error in getSiteSettings:', error);
    throw error;
  }
};

export default {
  getPublishedTreatments,
  getTreatmentBySlug,
  getPublishedTestimonials,
  getPublishedBlogPosts,
  getBlogPostBySlug,
  submitContactMessage,
  getHeroSection,
  getFaqItems,
  getTeamMembers,
  getMedicalFacilities,
  getPageContent,
  getSiteFeatures,
  getSiteSettings
};
