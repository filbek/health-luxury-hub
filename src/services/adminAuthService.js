/**
 * Admin Authentication Service
 * 
 * This service provides functions for admin authentication and authorization.
 */

import { supabase } from '../supabaseClient';

/**
 * Sign in with email and password
 * 
 * @param {string} email - Admin email
 * @param {string} password - Admin password
 * @returns {Promise<Object>} - Auth response
 */
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  
  if (error) throw error;
  
  // Check if user is an admin
  const { data: adminUser, error: adminError } = await supabase
    .from('admin.users')
    .select('*, role:role_id(name)')
    .eq('id', data.user.id)
    .single();
  
  if (adminError || !adminUser) {
    // Sign out if not an admin
    await supabase.auth.signOut();
    throw new Error('Unauthorized: Not an admin user');
  }
  
  return {
    user: data.user,
    adminUser,
    session: data.session
  };
};

/**
 * Sign out the current user
 * 
 * @returns {Promise<void>}
 */
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

/**
 * Get the current admin user
 * 
 * @returns {Promise<Object|null>} - Admin user data or null
 */
export const getCurrentAdmin = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return null;
  
  const { data: adminUser, error } = await supabase
    .from('admin.users')
    .select('*, role:role_id(name)')
    .eq('id', user.id)
    .single();
  
  if (error || !adminUser) return null;
  
  return {
    user,
    adminUser
  };
};

/**
 * Check if the current user has a specific role
 * 
 * @param {string} roleName - Role name to check
 * @returns {Promise<boolean>} - True if user has the role
 */
export const hasRole = async (roleName) => {
  const adminData = await getCurrentAdmin();
  
  if (!adminData) return false;
  
  return adminData.adminUser.role.name === roleName;
};

/**
 * Check if the current user is a super admin
 * 
 * @returns {Promise<boolean>} - True if user is a super admin
 */
export const isSuperAdmin = async () => {
  return hasRole('super_admin');
};

/**
 * Create a new admin user
 * 
 * @param {Object} userData - User data
 * @returns {Promise<Object>} - Created user
 */
export const createAdminUser = async (userData) => {
  const { email, password, firstName, lastName, roleId } = userData;
  
  // Check if current user is super admin
  const isSuper = await isSuperAdmin();
  if (!isSuper) {
    throw new Error('Unauthorized: Only super admins can create admin users');
  }
  
  // Create auth user
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true
  });
  
  if (authError) throw authError;
  
  // Create admin user
  const { data: adminUser, error: adminError } = await supabase
    .from('admin.users')
    .insert({
      id: authData.user.id,
      email,
      first_name: firstName,
      last_name: lastName,
      role_id: roleId
    })
    .select()
    .single();
  
  if (adminError) {
    // Rollback auth user creation
    await supabase.auth.admin.deleteUser(authData.user.id);
    throw adminError;
  }
  
  return adminUser;
};

/**
 * Update an admin user
 * 
 * @param {string} userId - User ID to update
 * @param {Object} userData - User data to update
 * @returns {Promise<Object>} - Updated user
 */
export const updateAdminUser = async (userId, userData) => {
  const { firstName, lastName, roleId, isActive } = userData;
  
  // Check if current user is super admin
  const isSuper = await isSuperAdmin();
  if (!isSuper) {
    throw new Error('Unauthorized: Only super admins can update admin users');
  }
  
  const { data, error } = await supabase
    .from('admin.users')
    .update({
      first_name: firstName,
      last_name: lastName,
      role_id: roleId,
      is_active: isActive,
      updated_at: new Date().toISOString()
    })
    .eq('id', userId)
    .select()
    .single();
  
  if (error) throw error;
  
  return data;
};

export default {
  signIn,
  signOut,
  getCurrentAdmin,
  hasRole,
  isSuperAdmin,
  createAdminUser,
  updateAdminUser
};
