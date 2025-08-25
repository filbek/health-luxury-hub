import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../components/Admin/AdminLayout';
import PageHeader from '../../components/Admin/Common/PageHeader';
import DataTable from '../../components/Admin/Common/DataTable';
import { getAllTreatments } from '../../services/treatmentService';

const TreatmentsPage = () => {
  const [treatments, setTreatments] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    count: 0,
    totalPages: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({
    search: '',
    category: '',
    published: ''
  });
  
  const fetchTreatments = async (page = 1) => {
    setLoading(true);
    try {
      const result = await getAllTreatments({
        page,
        limit: pagination.limit,
        filter: {
          search: filter.search || undefined,
          category: filter.category || undefined,
          published: filter.published === '' ? undefined : filter.published === 'true'
        }
      });
      
      setTreatments(result.data);
      setPagination({
        page: result.page,
        limit: result.limit,
        count: result.count,
        totalPages: result.totalPages
      });
    } catch (err) {
      console.error('Error fetching treatments:', err);
      setError('Failed to load treatments. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchTreatments();
  }, [filter]); // Re-fetch when filter changes
  
  const handlePageChange = (page) => {
    fetchTreatments(page);
  };
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    fetchTreatments(1); // Reset to first page when searching
  };
  
  const handleClearFilters = () => {
    setFilter({
      search: '',
      category: '',
      published: ''
    });
  };
  
  const columns = [
    {
      header: 'Title',
      accessor: 'title',
      cell: (row) => (
        <div>
          <p className="font-medium">{row.title}</p>
          <p className="text-sm text-neutral-dark truncate max-w-xs">{row.short_description}</p>
        </div>
      )
    },
    {
      header: 'Category',
      accessor: 'category',
      cell: (row) => (
        <span className="px-2 py-1 bg-neutral-light rounded-full text-xs">
          {row.category}
        </span>
      )
    },
    {
      header: 'Price',
      accessor: 'price',
      cell: (row) => (
        <span>${row.price?.toLocaleString() || 'N/A'}</span>
      )
    },
    {
      header: 'Status',
      accessor: 'published',
      cell: (row) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          row.published 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {row.published ? 'Published' : 'Draft'}
        </span>
      )
    },
    {
      header: 'Featured',
      accessor: 'featured',
      cell: (row) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          row.featured 
            ? 'bg-purple-100 text-purple-800' 
            : 'bg-neutral-light text-neutral-dark'
        }`}>
          {row.featured ? 'Featured' : 'Standard'}
        </span>
      )
    },
    {
      header: 'Actions',
      accessor: 'actions',
      cell: (row) => (
        <div className="flex space-x-2">
          <Link 
            to={`/admin/treatments/${row.id}`}
            className="text-blue-500 hover:text-blue-700"
          >
            <i className="bi bi-pencil"></i>
          </Link>
          <Link 
            to={`/treatments/${row.slug}`}
            target="_blank"
            className="text-green-500 hover:text-green-700"
          >
            <i className="bi bi-eye"></i>
          </Link>
        </div>
      )
    }
  ];
  
  return (
    <AdminLayout>
      <PageHeader 
        title="Treatments" 
        subtitle="Manage your medical treatments"
        actionButton={{
          label: 'Add Treatment',
          icon: 'bi-plus',
          to: '/admin/treatments/new'
        }}
      />
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-neutral-dark mb-1">
              Search
            </label>
            <input
              type="text"
              id="search"
              name="search"
              value={filter.search}
              onChange={handleFilterChange}
              placeholder="Search treatments..."
              className="w-full px-3 py-2 border border-neutral rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-neutral-dark mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={filter.category}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-neutral rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">All Categories</option>
              <option value="cosmetic">Cosmetic & Aesthetic</option>
              <option value="orthopedic">Orthopedic</option>
              <option value="bariatric">Weight Loss</option>
              <option value="dental">Dental</option>
              <option value="other">Other Specialties</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="published" className="block text-sm font-medium text-neutral-dark mb-1">
              Status
            </label>
            <select
              id="published"
              name="published"
              value={filter.published}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-neutral rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">All Statuses</option>
              <option value="true">Published</option>
              <option value="false">Draft</option>
            </select>
          </div>
          
          <div className="flex items-end space-x-2">
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
            >
              <i className="bi bi-search mr-2"></i>
              Search
            </button>
            
            <button
              type="button"
              onClick={handleClearFilters}
              className="px-4 py-2 border border-neutral text-neutral-darkest rounded-md hover:bg-neutral-light"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
      
      <DataTable 
        columns={columns}
        data={treatments}
        pagination={pagination}
        onPageChange={handlePageChange}
        isLoading={loading}
        onRowClick={(row) => window.location.href = `/admin/treatments/${row.id}`}
        emptyMessage="No treatments found. Create your first treatment by clicking 'Add Treatment'."
      />
    </AdminLayout>
  );
};

export default TreatmentsPage;
