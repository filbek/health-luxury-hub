import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, subtitle, actionButton, backLink }) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          {backLink && (
            <Link 
              to={backLink.to} 
              className="text-neutral-dark hover:text-primary mb-2 inline-flex items-center"
            >
              <i className="bi bi-arrow-left mr-1"></i> {backLink.label}
            </Link>
          )}
          <h1 className="text-2xl font-bold font-serif">{title}</h1>
          {subtitle && <p className="text-neutral-dark mt-1">{subtitle}</p>}
        </div>
        
        {actionButton && (
          <div className="mt-4 md:mt-0">
            {actionButton.to ? (
              <Link 
                to={actionButton.to} 
                className="btn btn-primary inline-flex items-center"
              >
                {actionButton.icon && <i className={`bi ${actionButton.icon} mr-2`}></i>}
                {actionButton.label}
              </Link>
            ) : (
              <button 
                onClick={actionButton.onClick} 
                className="btn btn-primary inline-flex items-center"
                disabled={actionButton.disabled}
              >
                {actionButton.icon && <i className={`bi ${actionButton.icon} mr-2`}></i>}
                {actionButton.label}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
