import React from 'react';

const HowItWorks = () => {
  return (
    <section className="relative py-16 md:py-24 bg-beige-50 overflow-hidden">
      {/* Decoração de fundo sutil */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-100 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            SIMPLES E FÁCIL
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como funciona o <span className="text-orange-600">PETVIP</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Em poucos passos você proporciona momentos incríveis para seu pet todo mês!
          </p>
        </div>
        
        {/* Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Passo 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-orange-50 flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-orange-100 rounded-full text-orange-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Escolha o plano</h3>
            <p className="text-gray-600">
              Selecione o plano ideal para o tamanho e necessidades do seu pet.
            </p>
          </div>
          
          {/* Passo 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-orange-50 flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-orange-100 rounded-full text-orange-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Receba em casa</h3>
            <p className="text-gray-600">
              Todo mês entregamos na sua porta uma caixa surpresa com produtos selecionados.
            </p>
          </div>
          
          {/* Passo 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-orange-50 flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-orange-100 rounded-full text-orange-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Pet feliz todo mês</h3>
            <p className="text-gray-600">
              Seu pet vai adorar as surpresas e você economiza tempo e dinheiro.
            </p>
          </div>
        </div>
        
        {/* Nota adicional */}
        <div className="mt-16 text-center bg-orange-50 p-6 rounded-lg border border-orange-100 max-w-3xl mx-auto">
          <p className="text-orange-800 font-medium">
            <span className="font-bold">Bônus:</span> Todos os planos incluem frete grátis e um brinde surpresa no primeiro mês!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;