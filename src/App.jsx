import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { supabase } from './supabaseClient';
import HomePage from './pages/HomePage';
import TreatmentsPage from './pages/TreatmentsPage';
import TreatmentDetailPage from './pages/TreatmentDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AIAssistantPage from './pages/AIAssistantPage';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  // useEffect(() => {
  //   const testSupabaseConnection = async () => {
  //     try {
  //       // Example: Fetching all tables in the public schema (requires appropriate permissions)
  //       // This is a meta-query and might not work if the anon key doesn't have schema introspection rights.
  //       // A more common test would be to try and select data from a specific, known public table.
  //       // For now, we'll try to get user to show the connection is working if RLS is not too restrictive.
  //       // If there's no public table to query without auth, this might return empty or an error.

  //       // --- SUPABASE TABLOLARI OLUŞTURULMADIĞI İÇİN BU TEST ŞİMDİLİK DEVRE DIŞI BIRAKILDI ---
  //       // console.log('Testing Supabase connection...');
  //       // const { data: tables, error } = await supabase
  //       //   .from('your_table_name_here') // Gerçek bir tablo adı gerektiğinde burayı güncelleyin
  //       //   .select('*')
  //       //   .limit(1);

  //       // if (error) {
  //       //   console.error('Supabase connection test error:', error);
  //       //   alert('Supabase bağlantı testi başarısız oldu. Konsolu kontrol edin.');
  //       // } else {
  //       //   console.log('Supabase connection test successful. Fetched data (or empty if table is empty/inaccessible):', tables);
  //       //   alert('Supabase bağlantısı başarılı! Konsolu kontrol edin.');
  //       // }
  //     } catch (err) {
  //       console.error('Error during Supabase test:', err);
  //       alert('Supabase bağlantı testi sırasında bir hata oluştu. Konsolu kontrol edin.');
  //     }
  //   };

  //   testSupabaseConnection();
  // }, []);

  return (
    <>
      {isAdminRoute ? (
        // Admin Routes
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      ) : (
        // Public Routes
        <>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/treatments" element={<TreatmentsPage />} />
              <Route path="/treatments/:id" element={<TreatmentDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/ai-assistant" element={<AIAssistantPage />} />
            </Routes>
          </main>
          <WhatsAppButton />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
