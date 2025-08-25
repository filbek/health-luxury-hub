import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getSiteSettings, updateSiteSetting } from '../../services/adminContentService';

const SiteSettingsManager = () => {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const data = await getSiteSettings();
      
      // Convert array to object for easier access
      const settingsObj = {};
      data.forEach(setting => {
        settingsObj[setting.key] = setting.value;
      });
      
      setSettings(settingsObj);
    } catch (error) {
      console.error('Error fetching settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSettingUpdate = async (key, value, description = null) => {
    try {
      setSaving(true);
      await updateSiteSetting(key, value, description);
      
      // Update local state
      setSettings(prev => ({
        ...prev,
        [key]: value
      }));
      
      alert('Settings updated successfully!');
    } catch (error) {
      console.error('Error updating setting:', error);
      alert('Error updating settings. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleFormSubmit = async (e, settingKey) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    
    await handleSettingUpdate(settingKey, value);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: 'bi-gear' },
    { id: 'contact', label: 'Contact Info', icon: 'bi-telephone' },
    { id: 'social', label: 'Social Media', icon: 'bi-share' },
    { id: 'seo', label: 'SEO', icon: 'bi-search' },
    { id: 'booking', label: 'Booking', icon: 'bi-calendar' },
    { id: 'whatsapp', label: 'WhatsApp', icon: 'bi-whatsapp' },
    { id: 'ai', label: 'AI Assistant', icon: 'bi-robot' }
  ];

  if (loading) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 rounded w-64"></div>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="site-settings-manager">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Site Settings</h3>
        {saving && (
          <div className="flex items-center text-blue-600">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
            Saving...
          </div>
        )}
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <i className={`${tab.icon} mr-2`}></i>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'general' && (
          <GeneralSettings 
            settings={settings.site_info || {}} 
            onUpdate={(value) => handleSettingUpdate('site_info', value)}
          />
        )}
        
        {activeTab === 'contact' && (
          <ContactSettings 
            settings={settings.contact_info || {}} 
            onUpdate={(value) => handleSettingUpdate('contact_info', value)}
          />
        )}
        
        {activeTab === 'social' && (
          <SocialMediaSettings 
            settings={settings.social_media || {}} 
            onUpdate={(value) => handleSettingUpdate('social_media', value)}
          />
        )}
        
        {activeTab === 'seo' && (
          <SEOSettings 
            settings={settings.seo || {}} 
            onUpdate={(value) => handleSettingUpdate('seo', value)}
          />
        )}
        
        {activeTab === 'booking' && (
          <BookingSettings 
            settings={settings.booking_settings || {}} 
            onUpdate={(value) => handleSettingUpdate('booking_settings', value)}
          />
        )}
        
        {activeTab === 'whatsapp' && (
          <WhatsAppSettings 
            settings={settings.whatsapp_settings || {}} 
            onUpdate={(value) => handleSettingUpdate('whatsapp_settings', value)}
          />
        )}
        
        {activeTab === 'ai' && (
          <AIAssistantSettings 
            settings={settings.ai_assistant_settings || {}} 
            onUpdate={(value) => handleSettingUpdate('ai_assistant_settings', value)}
          />
        )}
      </motion.div>
    </div>
  );
};

// Individual settings components
const GeneralSettings = ({ settings, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: settings.name || '',
    tagline: settings.tagline || '',
    contact_email: settings.contact_email || '',
    contact_phone: settings.contact_phone || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Site Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="form-input"
            placeholder="Health Luxury Hub"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tagline
          </label>
          <input
            type="text"
            value={formData.tagline}
            onChange={(e) => setFormData(prev => ({ ...prev, tagline: e.target.value }))}
            className="form-input"
            placeholder="Premium Medical Tourism in Istanbul"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Email
          </label>
          <input
            type="email"
            value={formData.contact_email}
            onChange={(e) => setFormData(prev => ({ ...prev, contact_email: e.target.value }))}
            className="form-input"
            placeholder="info@healthluxuryhub.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Phone
          </label>
          <input
            type="tel"
            value={formData.contact_phone}
            onChange={(e) => setFormData(prev => ({ ...prev, contact_phone: e.target.value }))}
            className="form-input"
            placeholder="+90 500 000 0000"
          />
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary">
        Save General Settings
      </button>
    </form>
  );
};

// Placeholder components for other settings tabs
const ContactSettings = ({ settings, onUpdate }) => (
  <div className="text-gray-500">Contact settings form will be implemented here.</div>
);

const SocialMediaSettings = ({ settings, onUpdate }) => (
  <div className="text-gray-500">Social media settings form will be implemented here.</div>
);

const SEOSettings = ({ settings, onUpdate }) => (
  <div className="text-gray-500">SEO settings form will be implemented here.</div>
);

const BookingSettings = ({ settings, onUpdate }) => (
  <div className="text-gray-500">Booking settings form will be implemented here.</div>
);

const WhatsAppSettings = ({ settings, onUpdate }) => (
  <div className="text-gray-500">WhatsApp settings form will be implemented here.</div>
);

const AIAssistantSettings = ({ settings, onUpdate }) => (
  <div className="text-gray-500">AI Assistant settings form will be implemented here.</div>
);

export default SiteSettingsManager;
