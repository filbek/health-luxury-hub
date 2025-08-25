/**
 * Chat Storage Service
 * 
 * This service provides functions to interact with Supabase for storing and retrieving chat data.
 * It handles chat sessions, messages, and user preferences.
 */

import { supabase } from '../supabaseClient';

/**
 * Create a new chat session
 * 
 * @param {string} title - The title of the chat session
 * @returns {Promise<Object>} - The created chat session
 */
export const createChatSession = async (title = 'New Chat') => {
  const { data: user } = await supabase.auth.getUser();
  
  if (!user?.id) {
    // For anonymous users, we'll just return a session object without saving to DB
    return {
      id: crypto.randomUUID(),
      title,
      created_at: new Date().toISOString(),
      isAnonymous: true
    };
  }
  
  const { data, error } = await supabase
    .rpc('ai.create_chat_session', {
      p_user_id: user.id,
      p_title: title
    });
    
  if (error) {
    console.error('Error creating chat session:', error);
    throw error;
  }
  
  return data;
};

/**
 * Get all chat sessions for the current user
 * 
 * @returns {Promise<Array>} - Array of chat sessions
 */
export const getChatSessions = async () => {
  const { data: user } = await supabase.auth.getUser();
  
  if (!user?.id) {
    return [];
  }
  
  const { data, error } = await supabase
    .from('ai.chat_sessions')
    .select('*')
    .order('updated_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching chat sessions:', error);
    throw error;
  }
  
  return data || [];
};

/**
 * Get messages for a specific chat session
 * 
 * @param {string} sessionId - The ID of the chat session
 * @returns {Promise<Array>} - Array of chat messages
 */
export const getChatMessages = async (sessionId) => {
  const { data, error } = await supabase
    .from('ai.chat_messages')
    .select('*')
    .eq('session_id', sessionId)
    .order('created_at', { ascending: true });
    
  if (error) {
    console.error('Error fetching chat messages:', error);
    throw error;
  }
  
  return data || [];
};

/**
 * Add a message to a chat session
 * 
 * @param {string} sessionId - The ID of the chat session
 * @param {string} role - The role of the message sender (user, assistant, system)
 * @param {string} content - The content of the message
 * @returns {Promise<Object>} - The created message
 */
export const addChatMessage = async (sessionId, role, content) => {
  const { data: user } = await supabase.auth.getUser();
  
  if (!user?.id) {
    // For anonymous users, we'll just return a message object without saving to DB
    return {
      id: crypto.randomUUID(),
      session_id: sessionId,
      role,
      content,
      created_at: new Date().toISOString(),
      isAnonymous: true
    };
  }
  
  const { data, error } = await supabase
    .rpc('ai.add_chat_message', {
      p_session_id: sessionId,
      p_role: role,
      p_content: content
    });
    
  if (error) {
    console.error('Error adding chat message:', error);
    throw error;
  }
  
  return data;
};

/**
 * Delete a chat session and all its messages
 * 
 * @param {string} sessionId - The ID of the chat session to delete
 * @returns {Promise<void>}
 */
export const deleteChatSession = async (sessionId) => {
  const { error } = await supabase
    .from('ai.chat_sessions')
    .delete()
    .eq('id', sessionId);
    
  if (error) {
    console.error('Error deleting chat session:', error);
    throw error;
  }
};

/**
 * Get user preferences
 * 
 * @returns {Promise<Object>} - User preferences
 */
export const getUserPreferences = async () => {
  const { data: user } = await supabase.auth.getUser();
  
  if (!user?.id) {
    return {
      language: 'en',
      theme: 'light',
      notification_enabled: true,
      preferences: {}
    };
  }
  
  const { data, error } = await supabase
    .from('ai.user_preferences')
    .select('*')
    .eq('user_id', user.id)
    .single();
    
  if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned" error
    console.error('Error fetching user preferences:', error);
    throw error;
  }
  
  return data || {
    language: 'en',
    theme: 'light',
    notification_enabled: true,
    preferences: {}
  };
};

/**
 * Update user preferences
 * 
 * @param {Object} preferences - The preferences to update
 * @returns {Promise<Object>} - Updated user preferences
 */
export const updateUserPreferences = async (preferences) => {
  const { data: user } = await supabase.auth.getUser();
  
  if (!user?.id) {
    return preferences;
  }
  
  const { data, error } = await supabase
    .from('ai.user_preferences')
    .upsert({
      user_id: user.id,
      ...preferences,
      updated_at: new Date().toISOString()
    })
    .select()
    .single();
    
  if (error) {
    console.error('Error updating user preferences:', error);
    throw error;
  }
  
  return data;
};

export default {
  createChatSession,
  getChatSessions,
  getChatMessages,
  addChatMessage,
  deleteChatSession,
  getUserPreferences,
  updateUserPreferences
};
