import { Link } from 'react-router-dom';
import { useAuth } from '../context/usAuth';
import HowItWorks from '../components/HowItWorks';
import Products from '../components/Products';
import Benefits from '../components/Benefits';
import Planos from '../components/Planos';

export default function HomePage() {
  const { user } = useAuth();

  return (
    <main className="font-sans text-gray-800">
      {/* 2. Como Funciona */}
      <section id="how-it-works" className="py-12 bg-white">
        <HowItWorks />
      </section>

      {/* 3. Nossos Produtos */}
      <section id="products" className="py-12 bg-gray-50">
        <Products />
      </section>

      {/* 4. Benefícios */}
      <section id="benefits" className="py-12 bg-white">
        <Benefits />
      </section>

      {/* 5. Planos */}
      <section id="planos" className="py-12 bg-gray-50">
        <Planos />
      </section>

      {/* Seção de Login (apenas para usuários não logados) */}
      {!user && (
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Já é membro?</h2>
            <div className="flex justify-center gap-4">
              <Link 
                to="/login" 
                className="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                Cadastre-se
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}