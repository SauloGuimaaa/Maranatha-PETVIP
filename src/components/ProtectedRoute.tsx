// components/ProtectedRoute.tsx
import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/usAuth'; // Caminho corrigido
import Loading from './Loading';

interface ProtectedRouteProps {
  children: ReactNode;
  authenticationType: 'protected' | 'public-only' | 'both';
  redirectTo?: string;
  customLoading?: ReactNode;
}

export default function ProtectedRoute({
  children,
  authenticationType = 'protected',
  redirectTo,
  customLoading
}: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Estado de carregamento
  if (loading) {
    return customLoading ? <>{customLoading}</> : <Loading />;
  }

  // Lógica de proteção aprimorada
  let shouldRedirect = false;
  let defaultRedirect = '/login';

  switch (authenticationType) {
    case 'protected':
      shouldRedirect = !user;
      defaultRedirect = '/login';
      break;
    case 'public-only':
      shouldRedirect = !!user;
      defaultRedirect = '/dashboard';
      break;
    case 'both':
      // Permite qualquer acesso (útil para páginas de erro, etc.)
      return <>{children}</>;
  }

  // Redirecionamento com preservação do estado anterior
  if (shouldRedirect) {
    const redirectPath = redirectTo || defaultRedirect;
    const isAuthPage = ['/login', '/register'].includes(location.pathname);
    const redirectState = !isAuthPage ? { from: location } : undefined;

    return <Navigate to={redirectPath} replace state={redirectState} />;
  }

  return <>{children}</>;
}