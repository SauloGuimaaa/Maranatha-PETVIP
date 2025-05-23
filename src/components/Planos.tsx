import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type Kit = {
  id: string;
  nome: string;
  preco: number;
  icon: string;
  descricao: string;
  imagem: string;
};

type PlanoImagem = {
  id: string;
  imagem: string;
};

export default function PlanoPetshopMaranatha() {
  const [kitExtras, setKitExtras] = useState<string[]>([]);
  const [total, setTotal] = useState(79.9);
  const [activeTab, setActiveTab] = useState('mensal');
  const [petType, setPetType] = useState('cachorro');
  const [petSize, setPetSize] = useState('pequeno');
  const [isNeutered, setIsNeutered] = useState('sim');
  const [kitPreview, setKitPreview] = useState<string | null>(null);
  const [planoImagemSelecionada, setPlanoImagemSelecionada] = useState<string>('plano1');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate();

  const imagensPlanos: PlanoImagem[] = [
    { id: 'plano1', imagem: 'assets/images/CACHORRO.KIT.png' },
    { id: 'plano2', imagem: 'assets/images/GATO.ADULTO.png' },
    { id: 'plano3', imagem: 'assets/images/GATO.FILHOTE.png' },
    { id: 'plano4', imagem: 'assets/images/caixa.surpresa.png' },
  ];

  const kitsDisponiveis: Kit[] = [
    { 
      id: 'kit_dental', 
      nome: 'Kit Dental', 
      preco: 19.9, 
      icon: '🦷',
      descricao: 'Inclui escova dental especial e pasta para pets',
      imagem: '/assets/kit-dental.png'
    },
    { 
      id: 'kit_petiscos', 
      nome: 'Kit Petiscos', 
      preco: 24.9, 
      icon: '🍖',
      descricao: 'Seleção de petiscos naturais e saudáveis',
      imagem: '/assets/kit-petiscos.png'
    },
    { 
      id: 'kit_brinquedos', 
      nome: 'Kit Brinquedos', 
      preco: 29.9, 
      icon: '🎾',
      descricao: 'Brinquedos resistentes para diversão prolongada',
      imagem: '/assets/kit-brinquedos.png'
    },
    { 
      id: 'kit_higiene', 
      nome: 'Kit Higiene', 
      preco: 34.9, 
      icon: '🧼',
      descricao: 'Produtos de limpeza e cuidados especiais',
      imagem: '/assets/kit-higiene.png'
    },
  ];

  const handleKitChange = (id: string) => {
    setKitExtras(prev => {
      const newKits = prev.includes(id) 
        ? prev.filter(k => k !== id) 
        : [...prev, id];
      
      const newTotal = (activeTab === 'anual' ? 69.9 : 79.9) + 
        newKits.reduce((acc, kitId) => {
          const kit = kitsDisponiveis.find(k => k.id === kitId);
          return acc + (kit ? kit.preco : 0);
        }, 0);
      
      setTotal(parseFloat(newTotal.toFixed(2)));
      return newKits;
    });
  };

  const handlePlanChange = (plan: string) => {
    setActiveTab(plan);
    const basePrice = plan === 'anual' ? 69.9 : 79.9;
    const kitsTotal = kitExtras.reduce((acc, kitId) => {
      const kit = kitsDisponiveis.find(k => k.id === kitId);
      return acc + (kit ? kit.preco : 0);
    }, 0);
    setTotal(basePrice + kitsTotal);
  };

  const handleSubscribe = () => {
    navigate('/login?from=subscribe');
  };

  const showKitPreview = (id: string) => {
    setKitPreview(id);
  };

  const hideKitPreview = () => {
    setKitPreview(null);
  };

  const nextCarousel = () => {
    setCarouselIndex(prev => Math.min(prev + 2, imagensPlanos.length - 2));
  };

  const prevCarousel = () => {
    setCarouselIndex(prev => Math.max(prev - 2, 0));
  };

  return (
    <section id="planos" className="max-w-6xl mx-auto px-4 py-8" style={{ backgroundColor: '#f5eee6' }}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-[#063c8f] mb-2">Planos Maranatha Pet</h2>
        <p className="text-gray-700">Cuidamos do seu pet com todo amor e profissionalismo</p>
      </div>

      {/* Layout para mobile */}
      <div className="md:hidden">
        {/* Imagem principal */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
          <img
            src={imagensPlanos.find(p => p.id === planoImagemSelecionada)?.imagem || '/assets/plano-premium.jpg'}
            alt="Plano selecionado"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Carrossel de miniaturas */}
        <div className="relative mb-6">
          <div className="flex overflow-hidden">
            {imagensPlanos.slice(carouselIndex, carouselIndex + 2).map((plano) => (
              <div
                key={plano.id}
                onClick={() => setPlanoImagemSelecionada(plano.id)}
                className={`flex-shrink-0 w-1/2 p-1 cursor-pointer transition-all ${planoImagemSelecionada === plano.id ? 'opacity-100' : 'opacity-70'}`}
              >
                <div 
                  className="border-2 rounded-lg overflow-hidden aspect-square"
                  style={{ borderColor: planoImagemSelecionada === plano.id ? '#063c8f' : 'transparent' }}
                >
                  <img 
                    src={plano.imagem} 
                    alt="Plano visual"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Controles do carrossel */}
          {carouselIndex > 0 && (
            <button 
              onClick={prevCarousel}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            >
              <FiChevronLeft className="text-gray-700" />
            </button>
          )}
          {carouselIndex < imagensPlanos.length - 2 && (
            <button 
              onClick={nextCarousel}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            >
              <FiChevronRight className="text-gray-700" />
            </button>
          )}
        </div>
      </div>

      {/* Layout para desktop */}
      <div className="hidden md:grid md:grid-cols-[150px_1fr_350px] gap-8">
        {/* Miniaturas laterais */}
        <div className="flex flex-col space-y-4">
          {imagensPlanos.map((plano) => (
            <div
              key={plano.id}
              onClick={() => setPlanoImagemSelecionada(plano.id)}
              className={`cursor-pointer transition-all border-2 rounded-lg overflow-hidden aspect-square ${
                planoImagemSelecionada === plano.id 
                  ? 'border-[#063c8f]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img 
                src={plano.imagem} 
                alt="Plano visual"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Imagem principal */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: '600px' }}>
          <img
            src={imagensPlanos.find(p => p.id === planoImagemSelecionada)?.imagem || '/assets/plano-premium.jpg'}
            alt="Plano selecionado"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formulário de personalização */}
        <div className="bg-white rounded-xl shadow-lg border border-[#e8d9c5] relative" style={{ height: '600px' }}>
          <div className="p-6 h-full flex flex-col overflow-hidden">
            <div className="overflow-y-auto flex-1">
              <h3 className="text-xl font-bold text-[#063c8f] mb-6">Personalize seu Plano</h3>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-3">Tipo do Pet</label>
                <div className="grid grid-cols-2 gap-3">
                  {['cachorro', 'gato'].map(type => (
                    <button
                      key={type}
                      onClick={() => setPetType(type)}
                      className={`py-2 px-4 rounded-lg border transition-all ${petType === type ? 'border-[#063c8f] bg-[#f5eee6] text-[#063c8f]' : 'border-gray-300 hover:border-[#063c8f]'}`}
                    >
                      {type === 'cachorro' ? '🐶 Cachorro' : '🐱 Gato'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-3">Porte do Pet</label>
                <div className="grid grid-cols-3 gap-3">
                  {['pequeno', 'medio', 'grande'].map(size => (
                    <button
                      key={size}
                      onClick={() => setPetSize(size)}
                      className={`py-2 px-2 rounded-lg border transition-all text-sm ${petSize === size ? 'border-[#063c8f] bg-[#f5eee6] text-[#063c8f]' : 'border-gray-300 hover:border-[#063c8f]'}`}
                    >
                      {size === 'pequeno' ? 'Pequeno' : size === 'medio' ? 'Médio' : 'Grande'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-3">Pet Castrado?</label>
                <div className="grid grid-cols-2 gap-3">
                  {['sim', 'nao'].map(option => (
                    <button
                      key={option}
                      onClick={() => setIsNeutered(option)}
                      className={`py-2 px-4 rounded-lg border transition-all ${isNeutered === option ? 'border-[#063c8f] bg-[#f5eee6] text-[#063c8f]' : 'border-gray-300 hover:border-[#063c8f]'}`}
                    >
                      {option === 'sim' ? 'Sim' : 'Não'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-3">Kits Extras</label>
                <div className="grid grid-cols-2 gap-3">
                  {kitsDisponiveis.map(kit => (
                    <div
                      key={kit.id}
                      onMouseEnter={() => showKitPreview(kit.id)}
                      onMouseLeave={hideKitPreview}
                      onClick={() => handleKitChange(kit.id)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${kitExtras.includes(kit.id) ? 'border-[#063c8f] bg-[#f5eee6]' : 'border-gray-300 hover:border-[#063c8f]'}`}
                    >
                      <div className="flex items-center">
                        <span className="text-xl mr-2">{kit.icon}</span>
                        <div>
                          <div className="font-medium">{kit.nome}</div>
                          <div className="text-sm text-gray-600">+ R$ {kit.preco.toFixed(2).replace('.', ',')}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#f5eee6] rounded-lg p-4 mb-6 border border-[#e8d9c5]">
                <h4 className="font-semibold text-[#063c8f] mb-3">Resumo da Assinatura</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Plano {activeTab === 'anual' ? 'Anual' : 'Mensal'}:</span>
                    <span className="font-medium">R$ {activeTab === 'anual' ? '69,90' : '79,90'}</span>
                  </div>
                  
                  {kitExtras.length > 0 && (
                    <div className="pt-2 border-t border-[#e8d9c5]">
                      <p className="text-sm text-gray-600 mb-1">Extras:</p>
                      {kitExtras.map(id => {
                        const kit = kitsDisponiveis.find(k => k.id === id);
                        return (
                          <div key={id} className="flex justify-between text-sm">
                            <span>+ {kit?.nome}</span>
                            <span>R$ {kit?.preco.toFixed(2).replace('.', ',')}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  <div className="pt-2 border-t border-[#e8d9c5] font-semibold flex justify-between">
                    <span>Total:</span>
                    <span className="text-[#cf0707]">R$ {total.toFixed(2).replace('.', ',')}/{activeTab === 'anual' ? 'ano' : 'mês'}</span>
                  </div>
                </div>
              </div>
            </div>

            {kitPreview && (
              <div className="absolute bottom-20 left-6 right-6 bg-[#f5eee6] rounded-lg border border-[#e8d9c5] p-4 z-10">
                {kitsDisponiveis.map(kit => (
                  kit.id === kitPreview && (
                    <div key={kit.id} className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={kit.imagem} 
                          alt={kit.nome}
                          className="w-32 h-32 object-contain rounded-lg border border-[#e8d9c5]"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#063c8f]">{kit.nome}</h4>
                        <p className="text-sm text-gray-700 mt-1">{kit.descricao}</p>
                        <div className="mt-2 text-sm font-medium text-[#cf0707]">
                          + R$ {kit.preco.toFixed(2).replace('.', ',')}
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            )}

            <button 
              onClick={handleSubscribe}
              className="w-full bg-[#cf0707] text-white py-3 rounded-lg font-bold hover:bg-[#b30606] transition-all shadow-md mt-4"
            >
              ASSINAR AGORA
            </button>
          </div>
        </div>
      </div>

      {/* Seção de personalização para mobile */}
      <div className="md:hidden mt-6">
        <div className="flex justify-center mb-4">
          <div className="inline-flex bg-[#e8d9c5] rounded-full p-1">
            <button
              onClick={() => handlePlanChange('mensal')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'mensal' ? 'bg-[#cf0707] text-white' : 'text-gray-700'}`}
            >
              Mensal
            </button>
            <button
              onClick={() => handlePlanChange('anual')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'anual' ? 'bg-[#cf0707] text-white' : 'text-gray-700'}`}
            >
              Anual (15% off)
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-[#e8d9c5] p-6">
          <h3 className="text-xl font-bold text-[#063c8f] mb-6">Personalize seu Plano</h3>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-3">Tipo do Pet</label>
            <div className="grid grid-cols-2 gap-3">
              {['cachorro', 'gato'].map(type => (
                <button
                  key={type}
                  onClick={() => setPetType(type)}
                  className={`py-2 px-4 rounded-lg border transition-all ${petType === type ? 'border-[#063c8f] bg-[#f5eee6] text-[#063c8f]' : 'border-gray-300 hover:border-[#063c8f]'}`}
                >
                  {type === 'cachorro' ? '🐶 Cachorro' : '🐱 Gato'}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-3">Porte do Pet</label>
            <div className="grid grid-cols-3 gap-3">
              {['pequeno', 'medio', 'grande'].map(size => (
                <button
                  key={size}
                  onClick={() => setPetSize(size)}
                  className={`py-2 px-2 rounded-lg border transition-all text-sm ${petSize === size ? 'border-[#063c8f] bg-[#f5eee6] text-[#063c8f]' : 'border-gray-300 hover:border-[#063c8f]'}`}
                >
                  {size === 'pequeno' ? 'Pequeno' : size === 'medio' ? 'Médio' : 'Grande'}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-3">Pet Castrado?</label>
            <div className="grid grid-cols-2 gap-3">
              {['sim', 'nao'].map(option => (
                <button
                  key={option}
                  onClick={() => setIsNeutered(option)}
                  className={`py-2 px-4 rounded-lg border transition-all ${isNeutered === option ? 'border-[#063c8f] bg-[#f5eee6] text-[#063c8f]' : 'border-gray-300 hover:border-[#063c8f]'}`}
                >
                  {option === 'sim' ? 'Sim' : 'Não'}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-3">Kits Extras</label>
            <div className="grid grid-cols-2 gap-3">
              {kitsDisponiveis.map(kit => (
                <div
                  key={kit.id}
                  onClick={() => handleKitChange(kit.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${kitExtras.includes(kit.id) ? 'border-[#063c8f] bg-[#f5eee6]' : 'border-gray-300 hover:border-[#063c8f]'}`}
                >
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{kit.icon}</span>
                    <div>
                      <div className="font-medium">{kit.nome}</div>
                      <div className="text-sm text-gray-600">+ R$ {kit.preco.toFixed(2).replace('.', ',')}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f5eee6] rounded-lg p-4 mb-6 border border-[#e8d9c5]">
            <h4 className="font-semibold text-[#063c8f] mb-3">Resumo da Assinatura</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Plano {activeTab === 'anual' ? 'Anual' : 'Mensal'}:</span>
                <span className="font-medium">R$ {activeTab === 'anual' ? '69,90' : '79,90'}</span>
              </div>
              
              {kitExtras.length > 0 && (
                <div className="pt-2 border-t border-[#e8d9c5]">
                  <p className="text-sm text-gray-600 mb-1">Extras:</p>
                  {kitExtras.map(id => {
                    const kit = kitsDisponiveis.find(k => k.id === id);
                    return (
                      <div key={id} className="flex justify-between text-sm">
                        <span>+ {kit?.nome}</span>
                        <span>R$ {kit?.preco.toFixed(2).replace('.', ',')}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              
              <div className="pt-2 border-t border-[#e8d9c5] font-semibold flex justify-between">
                <span>Total:</span>
                <span className="text-[#cf0707]">R$ {total.toFixed(2).replace('.', ',')}/{activeTab === 'anual' ? 'ano' : 'mês'}</span>
              </div>
            </div>
          </div>

          <button 
            onClick={handleSubscribe}
            className="w-full bg-[#cf0707] text-white py-3 rounded-lg font-bold hover:bg-[#b30606] transition-all shadow-md"
          >
            ASSINAR AGORA
          </button>
        </div>
      </div>
    </section>
  );
}