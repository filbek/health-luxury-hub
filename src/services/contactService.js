/**
 * Contact Service
 * 
 * This service provides functions for managing contact messages.
 */

import { supabase } from '../supabaseClient';
import adminService from './adminService';

/**
 * Get all contact messages
 * 
 * @param {Object} options - Query options
 * @returns {Promise<Array>} - Array of contact messages
 */
export const getAllContactMessages = async (options = {}) => {
  const { 
    page = 1, 
    limit = 10, 
    orderBy = 'created_at', 
    orderDirection = 'desc',
    filter = {}
  } = options;
  
  let query = supabase
    .from('admin.contact_messages')
    .select('*, assigned_to(first_name, last_name)', { count: 'exact' });
  
  // Apply filters
  if (filter.status) {
    query = query.eq('status', filter.status);
  }
  
  if (filter.treatment) {
    query = query.eq('treatment', filter.treatment);
  }
  
  if (filter.search) {
    query = query.or(`name.ilike.%${filter.search}%,email.ilike.%${filter.search}%,message.ilike.%${filter.search}%`);
  }
  
  // Apply pagination
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  
  // Apply ordering
  query = query.order(orderBy, { ascending: orderDirection === 'asc' });
  
  // Execute query with pagination
  const { data, error, count } = await query.range(from, to);
  
  if (error) {
    console.error('Error fetching contact messages:', error);
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
 * Get a contact message by ID
 * 
 * @param {string} id - Contact message ID
 * @returns {Promise<Object>} - Contact message data
 */
export const getContactMessageById = async (id) => {
  const { data, error } = await supabase
    .from('admin.contact_messages')
    .select('*, assigned_to(first_name, last_name)')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching contact message:', error);
    throw error;
  }
  
  return data;
};

/**
 * Create a new contact message (public endpoint)
 * 
 * @param {Object} messageData - Contact message data
 * @returns {Promise<Object>} - Created contact message
 */
export const createContactMessage = async (messageData) => {
  const { data, error } = await supabase
    .from('admin.contact_messages')
    .insert(messageData)
    .select()
    .single();
  
  if (error) {
    console.error('Error creating contact message:', error);
    throw error;
  }
  
  return data;
};

/**
 * Update a contact message
 * 
 * @param {string} id - Contact message ID
 * @param {Object} messageData - Contact message data to update
 * @returns {Promise<Object>} - Updated contact message
 */
export const updateContactMessage = async (id, messageData) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Unauthorized: User not authenticated');
  }
  
  const { data, error } = await supabase
    .from('admin.contact_messages')
    .update({
      ...messageData,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error('Error updating contact message:', error);
    throw error;
  }
  
  // Log activity
  await adminService.logActivity('update', 'contact_message', id, { 
    name: data.name,
    status: data.status 
  });
  
  return data;
};

/**
 * Assign a contact message to an admin user
 * 
 * @param {string} id - Contact message ID
 * @param {string} userId - Admin user ID
 * @returns {Promise<Object>} - Updated contact message
 */
export const assignContactMessage = async (id, userId) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Unauthorized: User not authenticated');
  }
  
  const { data, error } = await supabase
    .from('admin.contact_messages')
    .update({
      assigned_to: userId,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select('*, assigned_to(first_name, last_name)')
    .single();
  
  if (error) {
    console.error('Error assigning contact message:', error);
    throw error;
  }
  
  // Log activity
  await adminService.logActivity('assign', 'contact_message', id, { 
    assigned_to: userId 
  });
  
  return data;
};

/**
 * Update contact message status
 * 
 * @param {string} id - Contact message ID
 * @param {string} status - New status
 * @returns {Promise<Object>} - Updated contact message
 */
export const updateContactMessageStatus = async (id, status) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Unauthorized: User not authenticated');
  }
  
  const { data, error } = await supabase
    .from('admin.contact_messages')
    .update({
      status,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error('Error updating contact message status:', error);
    throw error;
  }
  
  // Log activity
  await adminService.logActivity('update_status', 'contact_message', id, { 
    status 
  });
  
  return data;
};

/**
 * Delete a contact message
 * 
 * @param {string} id - Contact message ID
 * @returns {Promise<boolean>} - Success status
 */
export const deleteContactMessage = async (id) => {
  const { error } = await supabase
    .from('admin.contact_messages')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting contact message:', error);
    throw error;
  }
  
  // Log activity
  await adminService.logActivity('delete', 'contact_message', id);
  
  return true;
};

export default {
  getAllContactMessages,
  getContactMessageById,
  createContactMessage,
  updateContactMessage,
  assignContactMessage,
  updateContactMessageStatus,
  deleteContactMessage
};
