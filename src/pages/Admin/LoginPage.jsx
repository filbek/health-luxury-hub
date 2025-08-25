import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentAdmin } from '../../services/adminAuthService';
import LoginForm from '../../components/Admin/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const adminData = await getCurrentAdmin();
        if (adminData) {
          // Eğer zaten giriş yapmış bir admin varsa, dashboard'a yönlendir
          console.log('Already logged in:', adminData);
          navigate('/admin/dashboard'); // AdminRoutes.jsx'e göre bu yol değişebilir
        }
      } catch (error) {
        // Oturum yoksa veya hata oluşursa (örn. token süresi dolmuşsa) login sayfasında kalır.
        // Burada özel bir hata mesajı göstermeye gerek yok, çünkü zaten login formunu görecek.
        console.info('No active session or error checking auth:', error);
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-neutral-lightest flex items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <a href="/" className="flex items-center text-neutral-darkest hover:text-primary transition-colors">
          <i className="bi bi-arrow-left mr-2"></i>
          Back to Website
        </a>
      </div>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
