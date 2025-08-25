/**
 * Treatment Service
 * 
 * This service provides functions for managing treatments.
 */

import { supabase } from '../supabaseClient';
import adminService from './adminService';

/**
 * Get all treatments
 * 
 * @param {Object} options - Query options
 * @returns {Promise<Array>} - Array of treatments
 */
export const getAllTreatments = async (options = {}) => {
  const { 
    page = 1, 
    limit = 10, 
    orderBy = 'created_at', 
    orderDirection = 'desc',
    filter = {}
  } = options;
  
  let query = supabase
    .schema('admin')
    .from('treatments')
    .select('*', { count: 'exact' });
  
  // Apply filters
  if (filter.category) {
    query = query.eq('category', filter.category);
  }
  
  if (filter.featured !== undefined) {
    query = query.eq('featured', filter.featured);
  }
  
  if (filter.published !== undefined) {
    query = query.eq('published', filter.published);
  }
  
  if (filter.search) {
    query = query.or(`title.ilike.%${filter.search}%,description.ilike.%${filter.search}%`);
  }
  
  // Apply pagination
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  
  // Apply ordering
  query = query.order(orderBy, { ascending: orderDirection === 'asc' });
  
  // Execute query with pagination
  const { data, error, count } = await query.range(from, to);
  
  if (error) {
    console.error('Error fetching treatments:', error);
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
 * Get a treatment by ID
 * 
 * @param {string} id - Treatment ID
 * @returns {Promise<Object>} - Treatment data
 */
export const getTreatmentById = async (id) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('treatments')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching treatment:', error);
    throw error;
  }
  
  return data;
};

/**
 * Get a treatment by slug
 * 
 * @param {string} slug - Treatment slug
 * @returns {Promise<Object>} - Treatment data
 */
export const getTreatmentBySlug = async (slug) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('treatments')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error('Error fetching treatment by slug:', error);
    throw error;
  }
  
  return data;
};

/**
 * Create a new treatment
 * 
 * @param {Object} treatmentData - Treatment data
 * @returns {Promise<Object>} - Created treatment
 */
export const createTreatment = async (treatmentData) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Unauthorized: User not authenticated');
  }
  
  const { data, error } = await supabase
    .schema('admin')
    .from('treatments')
    .insert({
      ...treatmentData,
      created_by: user.id,
      updated_by: user.id
    })
    .select()
    .single();
  
  if (error) {
    console.error('Error creating treatment:', error);
    throw error;
  }
  
  // Log activity
  await adminService.logActivity('create', 'treatment', data.id, { title: data.title });
  
  return data;
};

/**
 * Update a treatment
 * 
 * @param {string} id - Treatment ID
 * @param {Object} treatmentData - Treatment data to update
 * @returns {Promise<Object>} - Updated treatment
 */
export const updateTreatment = async (id, treatmentData) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Unauthorized: User not authenticated');
  }
  
  const { data, error } = await supabase
    .schema('admin')
    .from('treatments')
    .update({
      ...treatmentData,
      updated_by: user.id,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error('Error updating treatment:', error);
    throw error;
  }
  
  // Log activity
  await adminService.logActivity('update', 'treatment', id, { title: data.title });
  
  return data;
};

/**
 * Delete a treatment
 * 
 * @param {string} id - Treatment ID
 * @returns {Promise<boolean>} - Success status
 */
export const deleteTreatment = async (id) => {
  // Get treatment data for logging
  const treatment = await getTreatmentById(id);
  
  const { error } = await supabase
    .schema('admin')
    .from('treatments')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting treatment:', error);
    throw error;
  }
  
  // Log activity
  await adminService.logActivity('delete', 'treatment', id, { title: treatment.title });
  
  return true;
};

export default {
  getAllTreatments,
  getTreatmentById,
  getTreatmentBySlug,
  createTreatment,
  updateTreatment,
  deleteTreatment
};
