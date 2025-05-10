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
      {/* Header com botão de login no canto superior direito */}
      <header className="fixed top-0 right-0 p-4 z-50">
        {!user && (
          <Link 
            to="/login" 
            className="bg-[#cf0707] text-white px-6 py-2 rounded-md font-medium hover:bg-[#a00606] transition-colors shadow-md"
          >
            Login
          </Link>
        )}
      </header>

      {/* Conteúdo principal com margin-top para evitar sobreposição */}
      <div className="mt-16">
        {/* 1. Como Funciona */}
        <section id="how-it-works" className="py-12 bg-white">
          <HowItWorks />
        </section>

        {/* 2. Nossos Produtos */}
        <section id="products" className="py-12 bg-gray-50">
          <Products />
        </section>

        {/* 3. Benefícios */}
        <section id="benefits" className="py-12 bg-white">
          <Benefits />
        </section>

        {/* 4. Planos */}
        <section id="planos" className="py-12 bg-gray-50">
          <Planos />
        </section>
      </div>
    </main>
  );
}