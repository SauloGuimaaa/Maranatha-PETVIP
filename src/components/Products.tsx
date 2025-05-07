
const BoxContents = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#063c8f] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            CONTEÚDO SURPRESA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que vem na sua <span className="text-[#cf0707]">caixa PETVIP</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todo mês itens diferentes e exclusivos selecionados com carinho para o seu pet
          </p>
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Item 1 - Brinquedo */}
          <div className="bg-[#f5eee6] rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all transform hover:-translate-y-1">
            <div className="mb-4 w-full h-40 bg-white rounded-lg flex items-center justify-center p-4 shadow-sm border border-gray-100">
              <img 
                src="/assets/images/products/toy.png" 
                alt="Brinquedo para pet" 
                className="h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Brinquedo Exclusivo</h3>
            <p className="text-sm text-gray-600">Diversão garantida todo mês</p>
          </div>

          {/* Item 2 - Petisco */}
          <div className="bg-[#f5eee6] rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all transform hover:-translate-y-1">
            <div className="mb-4 w-full h-40 bg-white rounded-lg flex items-center justify-center p-4 shadow-sm border border-gray-100">
              <img 
                src="/assets/images/products/treat.png" 
                alt="Petisco saudável" 
                className="h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Petisco Premium</h3>
            <p className="text-sm text-gray-600">Saudável e delicioso</p>
          </div>

          {/* Item 3 - Acessório */}
          <div className="bg-[#f5eee6] rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all transform hover:-translate-y-1">
            <div className="mb-4 w-full h-40 bg-white rounded-lg flex items-center justify-center p-4 shadow-sm border border-gray-100">
              <img 
                src="/assets/images/products/accessory.png" 
                alt="Acessório para pet" 
                className="h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Acessório</h3>
            <p className="text-sm text-gray-600">Coleiras, bandanas e mais</p>
          </div>

          {/* Item 4 - Surpresa */}
          <div className="bg-[#f5eee6] rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all transform hover:-translate-y-1">
            <div className="mb-4 w-full h-40 bg-white rounded-lg flex items-center justify-center p-4 shadow-sm border border-gray-100">
              <img 
                src="/assets/images/products/surprise.png" 
                alt="Item surpresa" 
                className="h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Item Surpresa</h3>
            <p className="text-sm text-gray-600">Todo mês uma novidade</p>
          </div>
        </div>

        {/* Destaque de variedade */}
        <div className="mt-16 bg-[#f5eee6] rounded-xl p-8 md:p-10 border border-[#e8d9c5]">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Temas mensais diferentes para seu pet nunca enjoar!
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-5 h-5 text-[#cf0707] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Caixa temática todo mês (praia, inverno, festas, etc)</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-5 h-5 text-[#cf0707] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Itens personalizados por tamanho e tipo de pet</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-5 h-5 text-[#cf0707] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Produtos sazonais e exclusivos</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="/assets/images/theme-examples.png" 
                alt="Exemplos de temas mensais" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxContents;