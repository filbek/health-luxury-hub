import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '../../components/Admin/AdminLayout';
import PageHeader from '../../components/Admin/Common/PageHeader';
import MediaManager from '../../components/Admin/MediaManager';
import SiteSettingsManager from '../../components/Admin/SiteSettingsManager';

const ContentManagementPage = () => {
  const [activeTab, setActiveTab] = useState('hero');

  const contentTypes = [
    { id: 'hero', label: 'Hero Sections', icon: 'bi-image' },
    { id: 'pages', label: 'Page Content', icon: 'bi-file-text' },
    { id: 'features', label: 'Site Features', icon: 'bi-star' },
    { id: 'faq', label: 'FAQ Items', icon: 'bi-question-circle' },
    { id: 'team', label: 'Team Members', icon: 'bi-people' },
    { id: 'facilities', label: 'Medical Facilities', icon: 'bi-building' },
    { id: 'media', label: 'Media Library', icon: 'bi-images' },
    { id: 'settings', label: 'Site Settings', icon: 'bi-gear' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'hero':
        return <HeroSectionsTab />;
      case 'pages':
        return <PageContentTab />;
      case 'features':
        return <SiteFeaturesTab />;
      case 'faq':
        return <FaqItemsTab />;
      case 'team':
        return <TeamMembersTab />;
      case 'facilities':
        return <MedicalFacilitiesTab />;
      case 'media':
        return <MediaTab />;
      case 'settings':
        return <SiteSettingsTab />;
      default:
        return <HeroSectionsTab />;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <PageHeader
          title="Content Management"
          subtitle="Manage all website content from one place"
        />

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`${
                    activeTab === type.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                >
                  <i className={`${type.icon} mr-2`}></i>
                  {type.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderTabContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

// Placeholder components for each tab
const HeroSectionsTab = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-medium">Hero Sections</h3>
      <button className="btn btn-primary">
        <i className="bi bi-plus mr-2"></i>
        Add Hero Section
      </button>
    </div>
    <div className="text-gray-500">Hero sections management will be implemented here.</div>
  </div>
);

const PageContentTab = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-medium">Page Content</h3>
      <button className="btn btn-primary">
        <i className="bi bi-plus mr-2"></i>
        Add Page Content
      </button>
    </div>
    <div className="text-gray-500">Page content management will be implemented here.</div>
  </div>
);

const SiteFeaturesTab = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-medium">Site Features</h3>
      <button className="btn btn-primary">
        <i className="bi bi-plus mr-2"></i>
        Add Feature
      </button>
    </div>
    <div className="text-gray-500">Site features management will be implemented here.</div>
  </div>
);

const FaqItemsTab = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-medium">FAQ Items</h3>
      <button className="btn btn-primary">
        <i className="bi bi-plus mr-2"></i>
        Add FAQ Item
      </button>
    </div>
    <div className="text-gray-500">FAQ items management will be implemented here.</div>
  </div>
);

const TeamMembersTab = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-medium">Team Members</h3>
      <button className="btn btn-primary">
        <i className="bi bi-plus mr-2"></i>
        Add Team Member
      </button>
    </div>
    <div className="text-gray-500">Team members management will be implemented here.</div>
  </div>
);

const MedicalFacilitiesTab = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-medium">Medical Facilities</h3>
      <button className="btn btn-primary">
        <i className="bi bi-plus mr-2"></i>
        Add Facility
      </button>
    </div>
    <div className="text-gray-500">Medical facilities management will be implemented here.</div>
  </div>
);

const MediaTab = () => (
  <div>
    <MediaManager />
  </div>
);

const SiteSettingsTab = () => (
  <div>
    <SiteSettingsManager />
  </div>
);

export default ContentManagementPage;
