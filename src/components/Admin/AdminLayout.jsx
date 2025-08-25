import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCurrentAdmin, signOut } from '../../services/adminAuthService';

const AdminLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // TEST MODU: Kimlik doğrulama kontrolünü geçici olarak devre dışı bırakıyoruz
    // Gerçek uygulamada bu kodu aktif hale getirin
    /*
    const checkAuth = async () => {
      try {
        const adminData = await getCurrentAdmin();

        if (!adminData) {
          navigate('/admin/login');
          return;
        }

        setAdminUser(adminData.adminUser);
      } catch (error) {
        console.error('Error checking auth:', error);
        navigate('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
    */

    // Test için sahte admin kullanıcısı
    setAdminUser({
      first_name: 'Test',
      last_name: 'Admin',
      role: { name: 'super_admin' }
    });
    setLoading(false);
  }, [navigate]);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-lightest">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-lightest flex">
      {/* Sidebar - Desktop */}
      <div className="hidden md:flex md:flex-col md:w-64 bg-neutral-darkest text-white">
        <div className="p-4 border-b border-neutral-dark">
          <Link to="/admin" className="flex items-center">
            <i className="bi bi-heart-pulse text-2xl mr-2 text-primary"></i>
            <span className="font-serif text-xl font-bold">Admin Panel</span>
          </Link>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin"
                className={`flex items-center p-2 rounded-md hover:bg-neutral-dark transition-colors ${
                  location.pathname === '/admin' ? 'bg-neutral-dark' : ''
                }`}
              >
                <i className="bi bi-speedometer2 mr-3"></i>
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/treatments"
                className={`flex items-center p-2 rounded-md hover:bg-neutral-dark transition-colors ${
                  location.pathname.includes('/admin/treatments') ? 'bg-neutral-dark' : ''
                }`}
              >
                <i className="bi bi-clipboard2-pulse mr-3"></i>
                Treatments
              </Link>
            </li>
            <li>
              <Link
                to="/admin/blog"
                className={`flex items-center p-2 rounded-md hover:bg-neutral-dark transition-colors ${
                  location.pathname.includes('/admin/blog') ? 'bg-neutral-dark' : ''
                }`}
              >
                <i className="bi bi-file-earmark-text mr-3"></i>
                Blog Posts
              </Link>
            </li>
            <li>
              <Link
                to="/admin/messages"
                className={`flex items-center p-2 rounded-md hover:bg-neutral-dark transition-colors ${
                  location.pathname.includes('/admin/messages') ? 'bg-neutral-dark' : ''
                }`}
              >
                <i className="bi bi-chat-left-text mr-3"></i>
                Messages
              </Link>
            </li>
            <li>
              <Link
                to="/admin/ai-chats"
                className={`flex items-center p-2 rounded-md hover:bg-neutral-dark transition-colors ${
                  location.pathname.includes('/admin/ai-chats') ? 'bg-neutral-dark' : ''
                }`}
              >
                <i className="bi bi-robot mr-3"></i>
                AI Chat History
              </Link>
            </li>
            {adminUser?.role?.name === 'super_admin' && (
              <li>
                <Link
                  to="/admin/users"
                  className={`flex items-center p-2 rounded-md hover:bg-neutral-dark transition-colors ${
                    location.pathname.includes('/admin/users') ? 'bg-neutral-dark' : ''
                  }`}
                >
                  <i className="bi bi-people mr-3"></i>
                  Admin Users
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/admin/settings"
                className={`flex items-center p-2 rounded-md hover:bg-neutral-dark transition-colors ${
                  location.pathname.includes('/admin/settings') ? 'bg-neutral-dark' : ''
                }`}
              >
                <i className="bi bi-gear mr-3"></i>
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-neutral-dark">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              {adminUser?.first_name?.[0]}{adminUser?.last_name?.[0]}
            </div>
            <div className="ml-3">
              <p className="font-medium">{adminUser?.first_name} {adminUser?.last_name}</p>
              <p className="text-xs text-neutral">{adminUser?.role?.name}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center p-2 bg-neutral-dark rounded-md hover:bg-neutral transition-colors"
          >
            <i className="bi bi-box-arrow-right mr-2"></i>
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header - Mobile */}
        <header className="bg-white shadow-sm p-4 md:hidden">
          <div className="flex justify-between items-center">
            <Link to="/admin" className="flex items-center">
              <i className="bi bi-heart-pulse text-2xl mr-2 text-primary"></i>
              <span className="font-serif text-xl font-bold">Admin</span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-darkest text-2xl"
            >
              <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4"
            >
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/admin"
                    className={`flex items-center p-2 rounded-md hover:bg-neutral-light transition-colors ${
                      location.pathname === '/admin' ? 'bg-neutral-light' : ''
                    }`}
                  >
                    <i className="bi bi-speedometer2 mr-3"></i>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/treatments"
                    className={`flex items-center p-2 rounded-md hover:bg-neutral-light transition-colors ${
                      location.pathname.includes('/admin/treatments') ? 'bg-neutral-light' : ''
                    }`}
                  >
                    <i className="bi bi-clipboard2-pulse mr-3"></i>
                    Treatments
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/blog"
                    className={`flex items-center p-2 rounded-md hover:bg-neutral-light transition-colors ${
                      location.pathname.includes('/admin/blog') ? 'bg-neutral-light' : ''
                    }`}
                  >
                    <i className="bi bi-file-earmark-text mr-3"></i>
                    Blog Posts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/messages"
                    className={`flex items-center p-2 rounded-md hover:bg-neutral-light transition-colors ${
                      location.pathname.includes('/admin/messages') ? 'bg-neutral-light' : ''
                    }`}
                  >
                    <i className="bi bi-chat-left-text mr-3"></i>
                    Messages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/ai-chats"
                    className={`flex items-center p-2 rounded-md hover:bg-neutral-light transition-colors ${
                      location.pathname.includes('/admin/ai-chats') ? 'bg-neutral-light' : ''
                    }`}
                  >
                    <i className="bi bi-robot mr-3"></i>
                    AI Chat History
                  </Link>
                </li>
                {adminUser?.role?.name === 'super_admin' && (
                  <li>
                    <Link
                      to="/admin/users"
                      className={`flex items-center p-2 rounded-md hover:bg-neutral-light transition-colors ${
                        location.pathname.includes('/admin/users') ? 'bg-neutral-light' : ''
                      }`}
                    >
                      <i className="bi bi-people mr-3"></i>
                      Admin Users
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    to="/admin/settings"
                    className={`flex items-center p-2 rounded-md hover:bg-neutral-light transition-colors ${
                      location.pathname.includes('/admin/settings') ? 'bg-neutral-light' : ''
                    }`}
                  >
                    <i className="bi bi-gear mr-3"></i>
                    Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center p-2 rounded-md hover:bg-neutral-light transition-colors"
                  >
                    <i className="bi bi-box-arrow-right mr-3"></i>
                    Sign Out
                  </button>
                </li>
              </ul>
            </motion.nav>
          )}
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
