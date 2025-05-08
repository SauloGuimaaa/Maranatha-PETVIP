import { useState } from 'react';
import { useAuth } from '../context/usAuth'; // Corrigido o caminho de importação

export default function UserDashboard() {
  const { user, logOut } = useAuth();
  const [activeTab, setActiveTab] = useState('subscription');
  const [isCancelling, setIsCancelling] = useState(false);

  const subscriptionData = {
    plan: 'PETVIP Premium',
    nextCharge: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR'),
    price: 'R$ 89,90/mês',
    status: 'Ativa',
    kits: [
      { id: 1, name: 'Kit Banho Premium', selected: true },
      { id: 2, name: 'Kit Saúde', selected: false },
      { id: 3, name: 'Kit Diversão', selected: true },
    ]
  };

  const handleKitToggle = (kitId: number) => {
    console.log('Kit alterado:', kitId);
  };

  const handleCancelSubscription = async () => {
    setIsCancelling(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('Assinatura cancelada com sucesso');
    } catch (error) {
      console.error('Erro ao cancelar:', error);
    } finally {
      setIsCancelling(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Olá, {user?.email}!</h1>
        <p className="text-gray-600">Bem-vindo à sua área de assinatura PETVIP</p>
      </div>

      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'subscription' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('subscription')}
        >
          Minha Assinatura
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'settings' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('settings')}
        >
          Configurações
        </button>
      </div>

      {activeTab === 'subscription' && (
        <div className="space-y-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Detalhes da Assinatura</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Plano</p>
                <p className="font-medium">{subscriptionData.plan}</p>
              </div>
              <div>
                <p className="text-gray-600">Próxima cobrança</p>
                <p className="font-medium">{subscriptionData.nextCharge}</p>
              </div>
              <div>
                <p className="text-gray-600">Valor</p>
                <p className="font-medium">{subscriptionData.price}</p>
              </div>
              <div>
                <p className="text-gray-600">Status</p>
                <p className="font-medium">{subscriptionData.status}</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Kits Mensais</h2>
            <p className="text-gray-600 mb-4">Selecione os kits que deseja receber este mês:</p>
            
            <div className="space-y-3">
              {subscriptionData.kits.map(kit => (
                <div key={kit.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`kit-${kit.id}`}
                    checked={kit.selected}
                    onChange={() => handleKitToggle(kit.id)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`kit-${kit.id}`} className="ml-3 block text-gray-700">
                    {kit.name}
                  </label>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={handleCancelSubscription}
                disabled={isCancelling}
                className={`px-4 py-2 rounded-md text-white ${isCancelling ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700'} transition-colors`}
              >
                {isCancelling ? 'Processando...' : 'Cancelar Assinatura'}
              </button>
              {isCancelling && (
                <p className="mt-2 text-sm text-gray-500">Estamos processando seu cancelamento...</p>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Configurações da Conta</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>
            <div>
              <button
                onClick={logOut}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Sair da Conta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}