import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import UserDashboard from './pages/UserDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import NotFoundPage from './pages/NotFoundPage'; // Adicione esta página

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Página Principal (pública) */}
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />

        {/* Páginas de Autenticação (acesso apenas para não autenticados) */}
        <Route path="/login" element={
          <ProtectedRoute authenticationType="public-only" redirectTo="/dashboard">
            <MainLayout>
              <LoginPage />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/register" element={
          <ProtectedRoute authenticationType="public-only" redirectTo="/dashboard">
            <MainLayout>
              <RegisterPage />
            </MainLayout>
          </ProtectedRoute>
        } />

        {/* Área do Usuário (protegida) */}
        <Route path="/dashboard" element={
          <ProtectedRoute authenticationType="protected">
            <MainLayout>
              <UserDashboard />
            </MainLayout>
          </ProtectedRoute>
        } />

        {/* Página 404 (acesso livre) */}
        <Route path="*" element={
          <ProtectedRoute authenticationType="both">
            <MainLayout>
              <NotFoundPage />
            </MainLayout>
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  );
}