// context/AuthProvider.tsx
import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';  
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Inicia como true para verificação inicial
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const clearError = () => setError(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleAuthError = (error: unknown, type: 'signUp' | 'signIn') => {
    const defaultMessages = {
      signUp: 'Erro ao criar conta. Por favor, tente novamente.',
      signIn: 'Email ou senha incorretos. Por favor, verifique suas credenciais.'
    };

    let errorMessage = defaultMessages[type];
    
    if (error instanceof Error) {
      switch (error.message) {
        case 'Firebase: Error (auth/email-already-in-use).':
          errorMessage = 'Este email já está em uso.';
          break;
        case 'Firebase: Error (auth/invalid-email).':
          errorMessage = 'Email inválido.';
          break;
        case 'Firebase: Error (auth/weak-password).':
          errorMessage = 'Senha muito fraca (mínimo 6 caracteres).';
          break;
        case 'Firebase: Error (auth/user-not-found).':
          errorMessage = 'Usuário não encontrado.';
          break;
        case 'Firebase: Error (auth/wrong-password).':
          errorMessage = 'Senha incorreta.';
          break;
        case 'Firebase: Error (auth/too-many-requests).':
          errorMessage = 'Muitas tentativas. Tente novamente mais tarde.';
          break;
      }
    }
    
    setError(errorMessage);
    console.error(`Error ${type === 'signUp' ? 'signing up' : 'signing in'}:`, error);
  };

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      clearError();
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      handleAuthError(error, 'signUp');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      clearError();
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      handleAuthError(error, 'signIn');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      setError('Erro ao fazer logout. Por favor, tente novamente.');
      console.error('Error logging out:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    signUp,
    signIn,
    logOut,
    loading,
    error,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : (
        <div className="flex justify-center items-center min-h-screen">
          Carregando...
        </div>
      )}
    </AuthContext.Provider>
  );
}