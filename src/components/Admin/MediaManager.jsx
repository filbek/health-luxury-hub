import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { uploadFile, listFiles, deleteFile } from '../../services/mediaService';

const MediaManager = ({ onSelectFile, allowMultiple = false }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentFolder, setCurrentFolder] = useState('');

  useEffect(() => {
    fetchFiles();
  }, [currentFolder]);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const data = await listFiles('media', currentFolder);
      setFiles(data);
    } catch (error) {
      console.error('Error fetching files:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event) => {
    const uploadFiles = Array.from(event.target.files);
    if (uploadFiles.length === 0) return;

    setUploading(true);
    try {
      const uploadPromises = uploadFiles.map(file => 
        uploadFile(file, 'media', `${currentFolder}${currentFolder ? '/' : ''}${file.name}`)
      );
      
      await Promise.all(uploadPromises);
      await fetchFiles();
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleFileDelete = async (filePath) => {
    if (!confirm('Are you sure you want to delete this file?')) return;

    try {
      await deleteFile(filePath, 'media');
      await fetchFiles();
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('Error deleting file. Please try again.');
    }
  };

  const handleFileSelect = (file) => {
    if (allowMultiple) {
      const newSelection = selectedFiles.includes(file.publicUrl)
        ? selectedFiles.filter(url => url !== file.publicUrl)
        : [...selectedFiles, file.publicUrl];
      setSelectedFiles(newSelection);
      onSelectFile?.(newSelection);
    } else {
      setSelectedFiles([file.publicUrl]);
      onSelectFile?.(file.publicUrl);
    }
  };

  const isImage = (fileName) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    return imageExtensions.some(ext => fileName.toLowerCase().endsWith(ext));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="media-manager">
      {/* Upload Area */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Media Library</h3>
          <div className="flex items-center space-x-4">
            <label className="btn btn-primary cursor-pointer">
              <i className="bi bi-upload mr-2"></i>
              Upload Files
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileUpload}
                accept="image/*,video/*,.pdf,.doc,.docx"
              />
            </label>
          </div>
        </div>

        {uploading && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
              <span className="text-blue-700">Uploading files...</span>
            </div>
          </div>
        )}
      </div>

      {/* File Grid */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="aspect-square bg-gray-200 rounded-lg mb-2"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {files.map((file) => (
            <motion.div
              key={file.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`relative group cursor-pointer border-2 rounded-lg overflow-hidden transition-all ${
                selectedFiles.includes(file.publicUrl)
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleFileSelect(file)}
            >
              {/* File Preview */}
              <div className="aspect-square bg-gray-50 flex items-center justify-center">
                {isImage(file.name) ? (
                  <img
                    src={file.publicUrl}
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <i className="bi bi-file-earmark text-3xl text-gray-400 mb-2"></i>
                    <div className="text-xs text-gray-500 px-2">
                      {file.name.split('.').pop().toUpperCase()}
                    </div>
                  </div>
                )}
              </div>

              {/* File Info */}
              <div className="p-2 bg-white">
                <div className="text-xs font-medium truncate" title={file.name}>
                  {file.name}
                </div>
                <div className="text-xs text-gray-500">
                  {formatFileSize(file.metadata?.size || 0)}
                </div>
              </div>

              {/* Actions */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFileDelete(file.fullPath);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-full p-1 text-xs"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>

              {/* Selection Indicator */}
              {selectedFiles.includes(file.publicUrl) && (
                <div className="absolute top-2 left-2">
                  <div className="bg-primary text-white rounded-full p-1 text-xs">
                    <i className="bi bi-check"></i>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {files.length === 0 && !loading && (
        <div className="text-center py-12">
          <i className="bi bi-folder text-4xl text-gray-400 mb-4"></i>
          <p className="text-gray-500">No files found. Upload some files to get started.</p>
        </div>
      )}

      {/* Selected Files Info */}
      {selectedFiles.length > 0 && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="text-sm font-medium mb-2">
            Selected: {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''}
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedFiles.map((url, index) => (
              <div key={index} className="text-xs bg-white px-2 py-1 rounded border">
                {url.split('/').pop()}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaManager;
