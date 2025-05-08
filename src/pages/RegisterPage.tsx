import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/usAuth';
import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {
  const { signUp, loading, error: authError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [localError, setLocalError] = useState('');

  useEffect(() => {
    if (location.search.includes('from=subscribe')) {
      setLocalError('Por favor, cadastre-se para assinar o plano');
    }
  }, [location]);

  const handleRegister = async (email: string, password: string) => {
    try {
      setLocalError('');
      await signUp(email, password);
      if (location.search.includes('from=subscribe')) {
        navigate('/about#planos');
      } else {
        navigate('/');
      }
    } catch (err) {
      setLocalError('Erro ao criar conta. Tente novamente.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Criar nova conta
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {(authError || localError) && (
            <div className="mb-4 text-sm text-red-600">
              {authError || localError}
            </div>
          )}
          
          <RegisterForm onSubmit={handleRegister} loading={loading} />
          
          <div className="mt-6 text-center">
            <Link 
              to="/login" 
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Já tem uma conta? Faça login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}