/**
 * Admin Content Service
 * 
 * This service handles all content management operations for the admin panel.
 * It provides CRUD operations for all content types.
 */

import { supabase } from '../supabaseClient';

// Hero Sections
export const getHeroSections = async () => {
  const { data, error } = await supabase
    .schema('admin')
    .from('hero_sections')
    .select('*')
    .order('display_order');
  
  if (error) throw error;
  return data;
};

export const createHeroSection = async (heroData) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('hero_sections')
    .insert(heroData)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const updateHeroSection = async (id, heroData) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('hero_sections')
    .update(heroData)
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const deleteHeroSection = async (id) => {
  const { error } = await supabase
    .schema('admin')
    .from('hero_sections')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
};

// FAQ Items
export const getFaqItems = async () => {
  const { data, error } = await supabase
    .schema('admin')
    .from('faq_items')
    .select('*')
    .order('display_order');
  
  if (error) throw error;
  return data;
};

export const createFaqItem = async (faqData) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('faq_items')
    .insert(faqData)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const updateFaqItem = async (id, faqData) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('faq_items')
    .update(faqData)
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const deleteFaqItem = async (id) => {
  const { error } = await supabase
    .schema('admin')
    .from('faq_items')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
};

// Team Members
export const getTeamMembers = async () => {
  const { data, error } = await supabase
    .schema('admin')
    .from('team_members')
    .select('*')
    .order('display_order');
  
  if (error) throw error;
  return data;
};

export const createTeamMember = async (memberData) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('team_members')
    .insert(memberData)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const updateTeamMember = async (id, memberData) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('team_members')
    .update(memberData)
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const deleteTeamMember = async (id) => {
  const { error } = await supabase
    .schema('admin')
    .from('team_members')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
};

// Medical Facilities
export const getMedicalFacilities = async () => {
  const { data, error } = await supabase
    .schema('admin')
    .from('medical_facilities')
    .select('*')
    .order('display_order');
  
  if (error) throw error;
  return data;
};

export const createMedicalFacility = async (facilityData) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('medical_facilities')
    .insert(facilityData)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const updateMedicalFacility = async (id, facilityData) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('medical_facilities')
    .update(facilityData)
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const deleteMedicalFacility = async (id) => {
  const { error } = await supabase
    .schema('admin')
    .from('medical_facilities')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
};

// Page Content
export const getPageContent = async (pageSlug = null) => {
  let query = supabase
    .schema('admin')
    .from('page_content')
    .select('*');
  
  if (pageSlug) {
    query = query.eq('page_slug', pageSlug);
  }
  
  const { data, error } = await query.order('page_slug, display_order');
  
  if (error) throw error;
  return data;
};

export const createPageContent = async (contentData) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('page_content')
    .insert(contentData)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const updatePageContent = async (id, contentData) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('page_content')
    .update(contentData)
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const deletePageContent = async (id) => {
  const { error } = await supabase
    .schema('admin')
    .from('page_content')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
};

// Site Features
export const getSiteFeatures = async () => {
  const { data, error } = await supabase
    .schema('admin')
    .from('site_features')
    .select('*')
    .order('display_order');
  
  if (error) throw error;
  return data;
};

export const createSiteFeature = async (featureData) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('site_features')
    .insert(featureData)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const updateSiteFeature = async (id, featureData) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('site_features')
    .update(featureData)
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const deleteSiteFeature = async (id) => {
  const { error } = await supabase
    .schema('admin')
    .from('site_features')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
};

// Site Settings
export const getSiteSettings = async () => {
  const { data, error } = await supabase
    .schema('admin')
    .from('settings')
    .select('*')
    .order('key');
  
  if (error) throw error;
  return data;
};

export const updateSiteSetting = async (key, value, description = null) => {
  const { data, error } = await supabase
    .schema('admin')
    .from('settings')
    .upsert({
      key,
      value,
      description,
      updated_at: new Date().toISOString()
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export default {
  // Hero Sections
  getHeroSections,
  createHeroSection,
  updateHeroSection,
  deleteHeroSection,

  // FAQ Items
  getFaqItems,
  createFaqItem,
  updateFaqItem,
  deleteFaqItem,

  // Team Members
  getTeamMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,

  // Medical Facilities
  getMedicalFacilities,
  createMedicalFacility,
  updateMedicalFacility,
  deleteMedicalFacility,

  // Page Content
  getPageContent,
  createPageContent,
  updatePageContent,
  deletePageContent,

  // Site Features
  getSiteFeatures,
  createSiteFeature,
  updateSiteFeature,
  deleteSiteFeature,

  // Site Settings
  getSiteSettings,
  updateSiteSetting
};
