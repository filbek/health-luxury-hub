import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { signIn } from '../../services/adminAuthService';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // adminAuthService'den gelen signIn fonksiyonunu kullan
      const { user, adminUser, session } = await signIn(email, password);
      console.log('Login successful:', { user, adminUser, session });
      // Başarılı giriş sonrası admin ana sayfasına yönlendir
      // Şimdilik /admin/dashboard varsayalım, AdminRoutes.jsx'e göre bu değişebilir
      navigate('/admin/dashboard'); 
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to sign in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
    >
      <div className="text-center mb-8">
        <i className="bi bi-heart-pulse text-4xl text-primary"></i>
        <h1 className="text-2xl font-bold mt-4 font-serif">Admin Login</h1>
        <p className="text-neutral-dark mt-2">Sign in to access the admin panel</p>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-neutral-darkest mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your email"
            disabled={loading}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-neutral-darkest mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your password"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></span>
              Signing in...
            </span>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-neutral-dark">
        <p>Forgot your password? Contact the super admin.</p>
      </div>
    </motion.div>
  );
};

export default LoginForm;
