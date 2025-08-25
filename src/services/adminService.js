/**
 * Admin Service
 * 
 * This service provides functions for admin panel data management.
 */

import { supabase } from '../supabaseClient';

/**
 * Log admin activity
 * 
 * @param {string} action - Action performed
 * @param {string} entityType - Type of entity
 * @param {string} entityId - ID of entity
 * @param {Object} details - Additional details
 * @returns {Promise<Object>} - Created log entry
 */
export const logActivity = async (action, entityType, entityId = null, details = {}) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return null;
  
  const { data, error } = await supabase
    .from('admin.activity_log')
    .insert({
      user_id: user.id,
      action,
      entity_type: entityType,
      entity_id: entityId,
      details,
      ip_address: window.clientInformation?.userAgentData?.platform || 'unknown'
    })
    .select()
    .single();
  
  if (error) {
    console.error('Error logging activity:', error);
    return null;
  }
  
  return data;
};

/**
 * Get admin dashboard stats
 * 
 * @returns {Promise<Object>} - Dashboard stats
 */
export const getDashboardStats = async () => {
  // Get treatments count
  const { count: treatmentsCount, error: treatmentsError } = await supabase
    .from('admin.treatments')
    .select('*', { count: 'exact', head: true });
  
  // Get published treatments count
  const { count: publishedTreatmentsCount, error: publishedTreatmentsError } = await supabase
    .from('admin.treatments')
    .select('*', { count: 'exact', head: true })
    .eq('published', true);
  
  // Get blog posts count
  const { count: blogPostsCount, error: blogPostsError } = await supabase
    .from('admin.blog_posts')
    .select('*', { count: 'exact', head: true });
  
  // Get published blog posts count
  const { count: publishedBlogPostsCount, error: publishedBlogPostsError } = await supabase
    .from('admin.blog_posts')
    .select('*', { count: 'exact', head: true })
    .eq('published', true);
  
  // Get new messages count
  const { count: newMessagesCount, error: newMessagesError } = await supabase
    .from('admin.contact_messages')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'new');
  
  // Get total messages count
  const { count: totalMessagesCount, error: totalMessagesError } = await supabase
    .from('admin.contact_messages')
    .select('*', { count: 'exact', head: true });
  
  // Get recent activity
  const { data: recentActivity, error: recentActivityError } = await supabase
    .from('admin.activity_log')
    .select('*, user:user_id(first_name, last_name)')
    .order('created_at', { ascending: false })
    .limit(10);
  
  if (treatmentsError || publishedTreatmentsError || blogPostsError || 
      publishedBlogPostsError || newMessagesError || totalMessagesError || 
      recentActivityError) {
    console.error('Error fetching dashboard stats');
    return null;
  }
  
  return {
    treatments: {
      total: treatmentsCount || 0,
      published: publishedTreatmentsCount || 0
    },
    blogPosts: {
      total: blogPostsCount || 0,
      published: publishedBlogPostsCount || 0
    },
    messages: {
      total: totalMessagesCount || 0,
      new: newMessagesCount || 0
    },
    recentActivity: recentActivity || []
  };
};

/**
 * Get site settings
 * 
 * @returns {Promise<Object>} - Site settings
 */
export const getSiteSettings = async () => {
  const { data, error } = await supabase
    .from('admin.settings')
    .select('*');
  
  if (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
  
  // Convert array to object with key as the key
  const settings = {};
  data.forEach(setting => {
    settings[setting.key] = setting.value;
  });
  
  return settings;
};

/**
 * Update site settings
 * 
 * @param {string} key - Setting key
 * @param {Object} value - Setting value
 * @returns {Promise<Object>} - Updated setting
 */
export const updateSiteSettings = async (key, value) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return null;
  
  const { data, error } = await supabase
    .from('admin.settings')
    .update({
      value,
      updated_at: new Date().toISOString(),
      updated_by: user.id
    })
    .eq('key', key)
    .select()
    .single();
  
  if (error) {
    console.error('Error updating site settings:', error);
    throw error;
  }
  
  // Log activity
  await logActivity('update', 'settings', key, { key, value });
  
  return data;
};

export default {
  logActivity,
  getDashboardStats,
  getSiteSettings,
  updateSiteSettings
};
