import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            VANTAGENS EXCLUSIVAS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que assinar o <span className="text-orange-600">PETVIP</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tudo que seu pet precisa, com a comodidade que você merece
          </p>
        </div>

        {/* Grid de benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefício 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-orange-50">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mais economia</h3>
            <p className="text-gray-600">
              Até 30% mais barato que comprar os produtos separadamente, com a mesma qualidade premium.
            </p>
          </div>

          {/* Benefício 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-orange-50">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">100% seguro</h3>
            <p className="text-gray-600">
              Todos os produtos são testados e aprovados por veterinários. Seu pet só consome o que é saudável.
            </p>
          </div>

          {/* Benefício 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-orange-50">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Diversão garantida</h3>
            <p className="text-gray-600">
              Brinquedos interativos e estimulantes todo mês para manter seu pet ativo e feliz.
            </p>
          </div>

          {/* Benefício 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-orange-50">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Frete grátis</h3>
            <p className="text-gray-600">
              Entrega rápida e gratuita para todo o Brasil. Sem custos adicionais, direto na sua porta.
            </p>
          </div>

          {/* Benefício 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-orange-50">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Surpresa mensal</h3>
            <p className="text-gray-600">
              Temas diferentes todo mês para seu pet nunca enjoar. A emoção de receber uma novidade!
            </p>
          </div>

          {/* Benefício 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-orange-50">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Personalizado</h3>
            <p className="text-gray-600">
              Caixas adaptadas para o tamanho, idade e necessidades específicas do seu pet.
            </p>
          </div>
        </div>

        {/* Destaque final */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            <span className="font-bold text-orange-600">+500 pets felizes</span> em todo o Brasil já desfrutam dos benefícios do PETVIP. Não deixe o seu de fora!
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg">
            Quero Assinar Agora!
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;