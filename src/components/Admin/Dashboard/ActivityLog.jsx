import React from 'react';
import { motion } from 'framer-motion';

const ActivityLog = ({ activities = [] }) => {
  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  // Function to get icon based on action
  const getActionIcon = (action) => {
    switch (action) {
      case 'create':
        return 'bi-plus-circle';
      case 'update':
        return 'bi-pencil';
      case 'delete':
        return 'bi-trash';
      case 'assign':
        return 'bi-person-check';
      case 'update_status':
        return 'bi-arrow-repeat';
      default:
        return 'bi-activity';
    }
  };
  
  // Function to get color based on action
  const getActionColor = (action) => {
    switch (action) {
      case 'create':
        return 'text-green-500';
      case 'update':
        return 'text-blue-500';
      case 'delete':
        return 'text-red-500';
      case 'assign':
        return 'text-purple-500';
      case 'update_status':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };
  
  // Function to get description based on action and entity
  const getActionDescription = (activity) => {
    const { action, entity_type, details } = activity;
    
    switch (action) {
      case 'create':
        return `Created a new ${entity_type.replace('_', ' ')}${details?.title ? `: ${details.title}` : ''}`;
      case 'update':
        return `Updated ${entity_type.replace('_', ' ')}${details?.title ? `: ${details.title}` : ''}`;
      case 'delete':
        return `Deleted ${entity_type.replace('_', ' ')}${details?.title ? `: ${details.title}` : ''}`;
      case 'assign':
        return `Assigned ${entity_type.replace('_', ' ')} to a user`;
      case 'update_status':
        return `Updated status of ${entity_type.replace('_', ' ')} to ${details?.status || ''}`;
      default:
        return `Performed ${action} on ${entity_type.replace('_', ' ')}`;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
      
      {activities.length === 0 ? (
        <p className="text-neutral-dark">No recent activity found.</p>
      ) : (
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActionColor(activity.action)} bg-opacity-10 mr-3`}>
                <i className={`bi ${getActionIcon(activity.action)}`}></i>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  {activity.user?.first_name} {activity.user?.last_name}
                </p>
                <p className="text-sm text-neutral-dark">
                  {getActionDescription(activity)}
                </p>
                <p className="text-xs text-neutral mt-1">
                  {formatDate(activity.created_at)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activities.length > 0 && (
        <div className="mt-4 text-center">
          <button className="text-primary hover:text-primary-dark text-sm font-medium">
            View All Activity
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ActivityLog;
