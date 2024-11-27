import { useState } from 'react';
import { X } from 'lucide-react';

interface AgendamentoProps {
  onClose: () => void;
}

const Agendamento: React.FC<AgendamentoProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    tipo: 'retirada',
    data: '',
    horario: '',
    observacoes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do agendamento
    console.log('Dados do agendamento:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Gerar horários disponíveis (8h às 20h, intervalos de 30 min)
  const horariosDisponiveis = [];
  for (let hora = 8; hora < 20; hora++) {
    for (let min = 0; min < 60; min += 30) {
      horariosDisponiveis.push(
        `${hora.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`
      );
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Agendar Serviço</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Serviço *
            </label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="tipo"
                  value="retirada"
                  checked={formData.tipo === 'retirada'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Retirada no Local
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="tipo"
                  value="entrega"
                  checked={formData.tipo === 'entrega'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Tele-entrega
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Data *
            </label>
            <input
              type="date"
              name="data"
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.data}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Horário *
            </label>
            <select
              name="horario"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.horario}
              onChange={handleChange}
            >
              <option value="">Selecione um horário</option>
              {horariosDisponiveis.map(horario => (
                <option key={horario} value={horario}>
                  {horario}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Observações
            </label>
            <textarea
              name="observacoes"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={3}
              value={formData.observacoes}
              onChange={handleChange}
              placeholder="Informações adicionais sobre seu pedido..."
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
            >
              Agendar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Agendamento;