/**
 * Media Service
 * 
 * This service handles file uploads and media management using Supabase Storage.
 */

import { supabase } from '../supabaseClient';

/**
 * Upload a file to Supabase Storage
 * 
 * @param {File} file - The file to upload
 * @param {string} bucket - Storage bucket name
 * @param {string} path - File path in storage
 * @returns {Promise<Object>} - Upload result with public URL
 */
export const uploadFile = async (file, bucket = 'media', path = null) => {
  try {
    // Generate unique filename if path not provided
    if (!path) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      path = `uploads/${fileName}`;
    }

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      throw error;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(path);

    return {
      path: data.path,
      publicUrl,
      fullPath: data.fullPath
    };
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

/**
 * Delete a file from Supabase Storage
 * 
 * @param {string} path - File path in storage
 * @param {string} bucket - Storage bucket name
 * @returns {Promise<void>}
 */
export const deleteFile = async (path, bucket = 'media') => {
  try {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
};

/**
 * List files in a storage bucket
 * 
 * @param {string} bucket - Storage bucket name
 * @param {string} folder - Folder path (optional)
 * @returns {Promise<Array>} - Array of file objects
 */
export const listFiles = async (bucket = 'media', folder = '') => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .list(folder, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'created_at', order: 'desc' }
      });

    if (error) {
      throw error;
    }

    // Add public URLs to file objects
    const filesWithUrls = data.map(file => {
      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(`${folder}${folder ? '/' : ''}${file.name}`);
      
      return {
        ...file,
        publicUrl,
        fullPath: `${folder}${folder ? '/' : ''}${file.name}`
      };
    });

    return filesWithUrls;
  } catch (error) {
    console.error('Error listing files:', error);
    throw error;
  }
};

/**
 * Create storage bucket if it doesn't exist
 * 
 * @param {string} bucketName - Bucket name
 * @param {boolean} isPublic - Whether bucket should be public
 * @returns {Promise<void>}
 */
export const createBucket = async (bucketName, isPublic = true) => {
  try {
    const { data, error } = await supabase.storage
      .createBucket(bucketName, {
        public: isPublic,
        allowedMimeTypes: [
          'image/jpeg',
          'image/png',
          'image/gif',
          'image/webp',
          'image/svg+xml',
          'video/mp4',
          'video/webm',
          'application/pdf',
          'text/plain'
        ],
        fileSizeLimit: 52428800 // 50MB
      });

    if (error && error.message !== 'Bucket already exists') {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error creating bucket:', error);
    throw error;
  }
};

/**
 * Get file info from storage
 * 
 * @param {string} path - File path
 * @param {string} bucket - Storage bucket name
 * @returns {Promise<Object>} - File info
 */
export const getFileInfo = async (path, bucket = 'media') => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .list('', {
        search: path
      });

    if (error) {
      throw error;
    }

    const file = data.find(f => f.name === path.split('/').pop());
    
    if (file) {
      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(path);
      
      return {
        ...file,
        publicUrl,
        fullPath: path
      };
    }

    return null;
  } catch (error) {
    console.error('Error getting file info:', error);
    throw error;
  }
};

/**
 * Upload image with automatic optimization
 * 
 * @param {File} file - Image file
 * @param {Object} options - Upload options
 * @returns {Promise<Object>} - Upload result
 */
export const uploadImage = async (file, options = {}) => {
  const {
    bucket = 'media',
    folder = 'images',
    maxWidth = 1920,
    quality = 0.8
  } = options;

  try {
    // Create canvas for image optimization
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    return new Promise((resolve, reject) => {
      img.onload = async () => {
        // Calculate new dimensions
        const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
        const newWidth = img.width * ratio;
        const newHeight = img.height * ratio;

        // Set canvas size
        canvas.width = newWidth;
        canvas.height = newHeight;

        // Draw and compress image
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        
        canvas.toBlob(async (blob) => {
          try {
            const optimizedFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now()
            });

            const result = await uploadFile(optimizedFile, bucket, `${folder}/${file.name}`);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 'image/jpeg', quality);
      };

      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export default {
  uploadFile,
  deleteFile,
  listFiles,
  createBucket,
  getFileInfo,
  uploadImage
};
