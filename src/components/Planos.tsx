
const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f5eee6]" id="planos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#063c8f] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            PLANOS QUE CABEM NO SEU BOLSO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha o melhor para seu <span className="text-[#cf0707]">pet</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todos os planos incluem frete grátis e brinde especial no primeiro mês
          </p>
        </div>

        {/* Grid de planos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plano Básico */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-[#063c8f] hover:shadow-md transition-all transform hover:-translate-y-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Essencial</h3>
              <p className="text-gray-600">Ideal para pets pequenos ou com menos necessidades</p>
            </div>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">R$ 59,90</span>
              <span className="text-gray-500">/mês</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 text-[#063c8f] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>1 Brinquedo premium</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 text-[#063c8f] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>2 Petiscos naturais</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 text-[#063c8f] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>1 Acessório surpresa</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 text-[#063c8f] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Frete grátis</span>
              </li>
            </ul>
            
            <button className="w-full bg-[#063c8f] hover:bg-[#063c8f] text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105">
              Assinar Plano Essencial
            </button>
          </div>

          {/* Plano Premium (Destaque) */}
          <div className="relative bg-white p-8 rounded-2xl shadow-md border-2 border-[#cf0707] hover:shadow-lg transition-all transform hover:-translate-y-1">
            {/* Selo de mais vendido */}
            <div className="absolute top-0 right-0 bg-[#cf0707] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              MAIS VENDIDO
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Premium</h3>
              <p className="text-gray-600">O mais completo para pets exigentes</p>
            </div>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">R$ 89,90</span>
              <span className="text-gray-500">/mês</span>
              <span className="block text-sm text-[#cf0707] mt-1">Economize 15%</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 text-[#cf0707] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>2 Brinquedos interativos premium</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 text-[#cf0707] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>3 Petiscos naturais gourmet</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 text-[#cf0707] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>2 Acessórios exclusivos</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 text-[#cf0707] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Kit higiene mensal</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 text-[#cf0707] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Frete grátis e prioridade</span>
              </li>
            </ul>
            
            <button className="w-full bg-[#cf0707] hover:bg-[#b30606] text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105">
              Assinar Plano Premium
            </button>
          </div>
        </div>

        {/* Garantia */}
        <div className="mt-16 text-center bg-white p-6 rounded-xl shadow-sm max-w-3xl mx-auto border border-[#e8d9c5]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex-shrink-0 bg-[#f5eee6] p-3 rounded-full">
              <svg className="w-8 h-8 text-[#cf0707]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-800 font-medium">
                <span className="font-bold text-[#cf0707]">Garantia PETVIP:</span> Se seu pet não amar os produtos, devolvemos seu dinheiro em até 7 dias!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;