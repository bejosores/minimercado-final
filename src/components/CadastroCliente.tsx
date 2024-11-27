import { useState } from 'react';
import { X } from 'lucide-react';


interface CadastroClienteProps {
  onClose: () => void;
}

const CadastroCliente: React.FC<CadastroClienteProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
    sexo: '',
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Cadastro de Cliente</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                name="nome"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Digite seu nome completo"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CPF *
              </label>
              <input
                type="text"
                name="cpf"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="000.000.000-00"
                value={formData.cpf}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-mail *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefone *
              </label>
              <input
                type="tel"
                name="telefone"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="(00) 00000-0000"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Endereço *
              </label>
              <input
                type="text"
                name="endereco"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Rua, número, complemento"
                value={formData.endereco}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cidade *
              </label>
              <input
                type="text"
                name="cidade"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.cidade}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CEP *
              </label>
              <input
                type="text"
                name="cep"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="00000-000"
                value={formData.cep}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sexo
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="sexo"
                    value="masculino"
                    checked={formData.sexo === 'masculino'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Masculino
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="sexo"
                    value="feminino"
                    checked={formData.sexo === 'feminino'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Feminino
                </label>
              </div>
            </div>

            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="mr-2"
                />
                Desejo receber ofertas por e-mail
              </label>
            </div>
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
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroCliente;