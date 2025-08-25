import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import PageHeader from '../../components/Admin/Common/PageHeader';
import StatCard from '../../components/Admin/Dashboard/StatCard';
import ActivityLog from '../../components/Admin/Dashboard/ActivityLog';
import { getDashboardStats } from '../../services/adminService';

const DashboardPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (err) {
        console.error('Error fetching dashboard stats:', err);
        setError('Failed to load dashboard data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);
  
  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }
  
  if (error) {
    return (
      <AdminLayout>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </AdminLayout>
    );
  }
  
  return (
    <AdminLayout>
      <PageHeader 
        title="Dashboard" 
        subtitle="Overview of your website's performance and activity"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Treatments" 
          value={stats?.treatments.total || 0}
          icon="bi-clipboard2-pulse"
          color="bg-blue-500"
          description={`${stats?.treatments.published || 0} published`}
        />
        
        <StatCard 
          title="Blog Posts" 
          value={stats?.blogPosts.total || 0}
          icon="bi-file-earmark-text"
          color="bg-green-500"
          description={`${stats?.blogPosts.published || 0} published`}
        />
        
        <StatCard 
          title="New Messages" 
          value={stats?.messages.new || 0}
          icon="bi-chat-left-text"
          color="bg-yellow-500"
          description={`${stats?.messages.total || 0} total messages`}
        />
        
        <StatCard 
          title="AI Chats" 
          value="--"
          icon="bi-robot"
          color="bg-purple-500"
          description="Coming soon"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityLog activities={stats?.recentActivity || []} />
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            
            <div className="space-y-3">
              <a href="/admin/treatments/new" className="flex items-center p-3 bg-neutral-lightest rounded-lg hover:bg-neutral-light transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                  <i className="bi bi-plus"></i>
                </div>
                <div>
                  <h4 className="font-medium">Add New Treatment</h4>
                  <p className="text-sm text-neutral-dark">Create a new medical treatment</p>
                </div>
              </a>
              
              <a href="/admin/blog/new" className="flex items-center p-3 bg-neutral-lightest rounded-lg hover:bg-neutral-light transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                  <i className="bi bi-pencil"></i>
                </div>
                <div>
                  <h4 className="font-medium">Write Blog Post</h4>
                  <p className="text-sm text-neutral-dark">Create new content for your blog</p>
                </div>
              </a>
              
              <a href="/admin/messages" className="flex items-center p-3 bg-neutral-lightest rounded-lg hover:bg-neutral-light transition-colors">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white mr-3">
                  <i className="bi bi-chat-left-text"></i>
                </div>
                <div>
                  <h4 className="font-medium">Check Messages</h4>
                  <p className="text-sm text-neutral-dark">Respond to customer inquiries</p>
                </div>
              </a>
              
              <a href="/admin/settings" className="flex items-center p-3 bg-neutral-lightest rounded-lg hover:bg-neutral-light transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white mr-3">
                  <i className="bi bi-gear"></i>
                </div>
                <div>
                  <h4 className="font-medium">Site Settings</h4>
                  <p className="text-sm text-neutral-dark">Update your website settings</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
