// pages/NotFoundPage.tsx
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function NotFoundPage() {
  const navigate = useNavigate();

  // Opcional: Redirecionamento automático após alguns segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000); // 10 segundos

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-lg shadow-md">
        {/* Ícone/Ilustração */}
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
          <svg
            className="h-6 w-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Título e mensagem */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">404 - Página não encontrada</h1>
        <p className="text-gray-600 mb-6">
          Oops! A página que você está procurando não existe ou foi movida.
        </p>

        {/* Botão de ação */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-center"
          >
            Voltar para a página inicial
          </Link>
          
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Voltar à página anterior
          </button>
        </div>

        {/* Contador para redirecionamento automático (opcional) */}
        <p className="mt-6 text-sm text-gray-500">
          Você será redirecionado automaticamente em 10 segundos...
        </p>
      </div>
    </div>
  );
}