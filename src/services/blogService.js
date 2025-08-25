/**
 * Blog Service
 * 
 * This service provides functions for managing blog posts.
 */

import { supabase } from '../supabaseClient';
import adminService from './adminService';

/**
 * Get all blog posts
 * 
 * @param {Object} options - Query options
 * @returns {Promise<Array>} - Array of blog posts
 */
export const getAllBlogPosts = async (options = {}) => {
  const { 
    page = 1, 
    limit = 10, 
    orderBy = 'created_at', 
    orderDirection = 'desc',
    filter = {}
  } = options;
  
  let query = supabase
    .from('admin.blog_posts')
    .select('*, author:author_id(first_name, last_name)', { count: 'exact' });
  
  // Apply filters
  if (filter.category) {
    query = query.eq('category', filter.category);
  }
  
  if (filter.published !== undefined) {
    query = query.eq('published', filter.published);
  }
  
  if (filter.search) {
    query = query.or(`title.ilike.%${filter.search}%,content.ilike.%${filter.search}%,excerpt.ilike.%${filter.search}%`);
  }
  
  // Apply pagination
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  
  // Apply ordering
  query = query.order(orderBy, { ascending: orderDirection === 'asc' });
  
  // Execute query with pagination
  const { data, error, count } = await query.range(from, to);
  
  if (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
  
  return {
    data: data || [],
    count: count || 0,
    page,
    limit,
    totalPages: Math.ceil((count || 0) / limit)
  };
};

/**
 * Get a blog post by ID
 * 
 * @param {string} id - Blog post ID
 * @returns {Promise<Object>} - Blog post data
 */
export const getBlogPostById = async (id) => {
  const { data, error } = await supabase
    .from('admin.blog_posts')
    .select('*, author:author_id(first_name, last_name)')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
  
  return data;
};

/**
 * Get a blog post by slug
 * 
 * @param {string} slug - Blog post slug
 * @returns {Promise<Object>} - Blog post data
 */
export const getBlogPostBySlug = async (slug) => {
  const { data, error } = await supabase
    .from('admin.blog_posts')
    .select('*, author:author_id(first_name, last_name)')
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error('Error fetching blog post by slug:', error);
    throw error;
  }
  
  return data;
};

/**
 * Create a new blog post
 * 
 * @param {Object} postData - Blog post data
 * @returns {Promise<Object>} - Created blog post
 */
export const createBlogPost = async (postData) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Unauthorized: User not authenticated');
  }
  
  const { data, error } = await supabase
    .from('admin.blog_posts')
    .insert({
      ...postData,
      author_id: user.id,
      published_at: postData.published ? new Date().toISOString() : null
    })
    .select()
    .single();
  
  if (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
  
  // Log activity
  await adminService.logActivity('create', 'blog_post', data.id, { title: data.title });
  
  return data;
};

/**
 * Update a blog post
 * 
 * @param {string} id - Blog post ID
 * @param {Object} postData - Blog post data to update
 * @returns {Promise<Object>} - Updated blog post
 */
export const updateBlogPost = async (id, postData) => {
  // Check if published status is changing from false to true
  const currentPost = await getBlogPostById(id);
  const publishedChanged = !currentPost.published && postData.published;
  
  const { data, error } = await supabase
    .from('admin.blog_posts')
    .update({
      ...postData,
      published_at: publishedChanged ? new Date().toISOString() : currentPost.published_at,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
  
  // Log activity
  await adminService.logActivity('update', 'blog_post', id, { title: data.title });
  
  return data;
};

/**
 * Delete a blog post
 * 
 * @param {string} id - Blog post ID
 * @returns {Promise<boolean>} - Success status
 */
export const deleteBlogPost = async (id) => {
  // Get blog post data for logging
  const post = await getBlogPostById(id);
  
  const { error } = await supabase
    .from('admin.blog_posts')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
  
  // Log activity
  await adminService.logActivity('delete', 'blog_post', id, { title: post.title });
  
  return true;
};

export default {
  getAllBlogPosts,
  getBlogPostById,
  getBlogPostBySlug,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost
};
