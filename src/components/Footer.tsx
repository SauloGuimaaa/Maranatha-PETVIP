import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { FaPix } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grade de conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1 - Logo e sobre */}
          <div>
            <img 
              src="public/assets/images/Maranatha-logo.png" 
              alt="Petshop Maranatha" 
              className="h-24 mb-6"
            />
            <p className="text-gray-400 mb-4 italic">
              Cuidando do seu pet com amor desde 1999
            </p>
            <p className="text-gray-400 text-sm">
              CNPJ: 03.064.701/0001-82
            </p>
          </div>

          {/* Coluna 2 - PETVIP Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#f5eee6]">PETVIP</h3>
            <ul className="space-y-3">
              <li><a href="#planos" className="text-gray-400 hover:text-[#cf0707] transition-colors">Planos</a></li>
              <li><a href="#beneficios" className="text-gray-400 hover:text-[#cf0707] transition-colors">Benefícios</a></li>
              <li><a href="#como-funciona" className="text-gray-400 hover:text-[#cf0707] transition-colors">Como funciona</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-[#cf0707] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Institucional */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#f5eee6]">Institucional</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#cf0707] transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#cf0707] transition-colors">Nossas lojas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#cf0707] transition-colors">Trabalhe conosco</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#cf0707] transition-colors">Política de privacidade</a></li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#f5eee6]">Atendimento</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FaPhoneAlt className="flex-shrink-0 w-5 h-5 text-[#cf0707] mr-2 mt-0.5" />
                <span>(67) 4042-4262</span>
              </li>
              <li className="flex items-start">
                <a 
                  href="mailto:lojavirtual@maranathapetshop.com.br?subject=Contato%20via%20Site%20PETVIP" 
                  className="hover:text-[#cf0707] transition-colors flex items-start"
                >
                  <FaEnvelope className="flex-shrink-0 w-5 h-5 text-[#cf0707] mr-2 mt-0.5" />
                  <span>lojavirtual@maranathapetshop.com.br</span>
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="flex-shrink-0 w-5 h-5 text-[#cf0707] mr-2 mt-0.5" />
                <span>Avenida Capibaribe, 822 - Campo Grande/MS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes sociais e pagamentos */}
        <div className="flex flex-col items-center gap-8">
          {/* Redes sociais */}
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/maranathapetshopp" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white bg-gray-800 hover:bg-[#cf0707] w-12 h-12 rounded-full inline-flex items-center justify-center transition-all transform hover:-translate-y-1"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a 
              href="https://www.instagram.com/maranathapetshop/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white bg-gray-800 hover:bg-[#cf0707] w-12 h-12 rounded-full inline-flex items-center justify-center transition-all transform hover:-translate-y-1"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=556740424262&text=Oi%2C%20tudo%20bem%3F%20Preciso%20de%20ajuda%20com%20meu%20pedido" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white bg-gray-800 hover:bg-[#cf0707] w-12 h-12 rounded-full inline-flex items-center justify-center transition-all transform hover:-translate-y-1"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>

          {/* Formas de pagamento */}
          <div className="flex gap-4 text-gray-400">
            <FaCcVisa className="text-2xl" />
            <FaCcMastercard className="text-2xl" />
            <FaPix className="text-2xl" />
          </div>
        </div>

        {/* Direitos reservados */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Petshop Maranatha. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;