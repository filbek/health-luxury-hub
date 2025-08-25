import React, { useState } from 'react';

const DataTable = ({ 
  columns, 
  data, 
  pagination, 
  onPageChange, 
  onRowClick,
  isLoading = false,
  emptyMessage = 'No data found'
}) => {
  const [selectedRow, setSelectedRow] = useState(null);
  
  const handleRowClick = (row, index) => {
    setSelectedRow(index);
    if (onRowClick) {
      onRowClick(row);
    }
  };
  
  // Render loading state
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          <span className="ml-3 text-neutral-dark">Loading data...</span>
        </div>
      </div>
    );
  }
  
  // Render empty state
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 text-center">
          <i className="bi bi-inbox text-4xl text-neutral-dark"></i>
          <p className="mt-2 text-neutral-dark">{emptyMessage}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral">
          <thead className="bg-neutral-light">
            <tr>
              {columns.map((column, index) => (
                <th 
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-darkest uppercase tracking-wider"
                  style={{ width: column.width || 'auto' }}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral">
            {data.map((row, rowIndex) => (
              <tr 
                key={rowIndex} 
                className={`hover:bg-neutral-lightest cursor-pointer ${selectedRow === rowIndex ? 'bg-primary-light' : ''}`}
                onClick={() => handleRowClick(row, rowIndex)}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                    {column.cell ? column.cell(row) : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {pagination && (
        <div className="px-6 py-4 border-t border-neutral flex items-center justify-between">
          <div className="text-sm text-neutral-dark">
            Showing {pagination.page * pagination.limit - pagination.limit + 1} to {Math.min(pagination.page * pagination.limit, pagination.count)} of {pagination.count} entries
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onPageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
              className="px-3 py-1 rounded border border-neutral text-neutral-darkest disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            
            {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
              // Calculate page numbers to show
              let pageNum;
              if (pagination.totalPages <= 5) {
                pageNum = i + 1;
              } else if (pagination.page <= 3) {
                pageNum = i + 1;
              } else if (pagination.page >= pagination.totalPages - 2) {
                pageNum = pagination.totalPages - 4 + i;
              } else {
                pageNum = pagination.page - 2 + i;
              }
              
              return (
                <button
                  key={i}
                  onClick={() => onPageChange(pageNum)}
                  className={`px-3 py-1 rounded ${
                    pagination.page === pageNum
                      ? 'bg-primary text-white'
                      : 'border border-neutral text-neutral-darkest'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button
              onClick={() => onPageChange(pagination.page + 1)}
              disabled={pagination.page === pagination.totalPages}
              className="px-3 py-1 rounded border border-neutral text-neutral-darkest disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
