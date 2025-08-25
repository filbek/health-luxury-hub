import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, icon, color, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-neutral-dark text-sm">{title}</p>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
          {description && (
            <p className="text-sm text-neutral-dark mt-2">{description}</p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
          <i className={`bi ${icon} text-white text-xl`}></i>
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
