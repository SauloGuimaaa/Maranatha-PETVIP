import Header from './components/Header.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Products from './components/Products.tsx';
import Benefits from './components/Benefits.tsx';
import Planos from './components/Planos.tsx';
import Footer from './components/Footer.tsx';
export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <HowItWorks />
      <Products />
      <Benefits />
      <Planos />
      <Footer />
    </div>
  );
}