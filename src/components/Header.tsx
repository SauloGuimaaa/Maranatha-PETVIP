
import maracaoImage from '../assets/images/MARACAO.png';
const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Fundo com degradê suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#063c8f] to-[#1A5AA9] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Conteúdo de texto */}
        <div className="text-center md:text-left order-2 md:order-1">
          <span className="inline-block bg-[#cf0707] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse">
            EXCLUSIVO PARA PET LOVERS!
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Todo mês uma <span className="text-[#cf0707]">surpresa</span> para seu pet!
          </h1>
            
            <p className="text-lg md:text-xl text-white mb-8 max-w-lg mx-auto md:mx-0">
              Caixas temáticas mensais com produtos premium selecionados especialmente para o seu animal de estimação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#cf0707] hover:bg-[#b30606] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
                Quero Assinar Agora!
              </button>
              <button className="
              bg-white 
              border-2 border-[#cf0707] 
              text-[#cf0707] 
              hover:bg-[#f5eee6] 
              hover:border-[#b30606] 
              hover:text-[#b30606] 
              active:scale-95 
              transform 
              font-semibold 
              py-3 px-8 
              rounded-full 
              transition-all 
              duration-200
              shadow-sm
            ">
              Conheça os Planos
            </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center md:justify-start gap-2 text-sm text-white">
              <svg className="w-5 h-5 text-[#cf0707]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Produtos de alta qualidade</span>
            </div>
          </div>
          
          {/* Imagem do produto */}
            <div className="relative order-1 md:order-2">
              <div className="relative w-full h-80 md:h-96 lg:h-[500px]">
                <img src={maracaoImage} alt="Caixa surpresa para pets" className="absolute w-full h-full object-contain object-center animate-float" />
                <div className="absolute -bottom-6 -right-6 bg-[#e8d9c5] rounded-full w-32 h-32 z-0 opacity-30"></div>
                <div className="absolute -top-6 -left-6 bg-[#f5eee6] rounded-full w-24 h-24 z-0 opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;