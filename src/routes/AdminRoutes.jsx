import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Admin Pages
import LoginPage from '../pages/Admin/LoginPage';
import DashboardPage from '../pages/Admin/DashboardPage';
import TreatmentsPage from '../pages/Admin/TreatmentsPage';
import ContentManagementPage from '../pages/Admin/ContentManagementPage';

// Placeholder components for routes not yet implemented
const TreatmentFormPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Treatment Form</h1>
    <p>This page is under construction.</p>
  </div>
);

const BlogPostsPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
    <p>This page is under construction.</p>
  </div>
);

const BlogPostFormPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Blog Post Form</h1>
    <p>This page is under construction.</p>
  </div>
);

const MessagesPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Messages</h1>
    <p>This page is under construction.</p>
  </div>
);

const MessageDetailPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Message Detail</h1>
    <p>This page is under construction.</p>
  </div>
);

const AIChatHistoryPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">AI Chat History</h1>
    <p>This page is under construction.</p>
  </div>
);

const AdminUsersPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Admin Users</h1>
    <p>This page is under construction.</p>
  </div>
);

const AdminUserFormPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Admin User Form</h1>
    <p>This page is under construction.</p>
  </div>
);

const SettingsPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Settings</h1>
    <p>This page is under construction.</p>
  </div>
);

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<DashboardPage />} />
      
      {/* Treatment Routes */}
      <Route path="/treatments" element={<TreatmentsPage />} />
      <Route path="/treatments/new" element={<TreatmentFormPage />} />
      <Route path="/treatments/:id" element={<TreatmentFormPage />} />
      
      {/* Blog Routes */}
      <Route path="/blog" element={<BlogPostsPage />} />
      <Route path="/blog/new" element={<BlogPostFormPage />} />
      <Route path="/blog/:id" element={<BlogPostFormPage />} />
      
      {/* Message Routes */}
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/messages/:id" element={<MessageDetailPage />} />
      
      {/* AI Chat Routes */}
      <Route path="/ai-chats" element={<AIChatHistoryPage />} />

      {/* Content Management Routes */}
      <Route path="/content" element={<ContentManagementPage />} />

      {/* Admin User Routes */}
      <Route path="/users" element={<AdminUsersPage />} />
      <Route path="/users/new" element={<AdminUserFormPage />} />
      <Route path="/users/:id" element={<AdminUserFormPage />} />
      
      {/* Settings Routes */}
      <Route path="/settings" element={<SettingsPage />} />
      
      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default AdminRoutes;
