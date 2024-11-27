import React, { useState } from 'react';
import { ShoppingCart, Clock, MapPin, Phone } from 'lucide-react';
import Carousel from './components/Carousel';
import CadastroCliente from './components/CadastroCliente';
import Agendamento from './components/Agendamento';

function App() {
  const [showCadastro, setShowCadastro] = useState(false);
  const [showAgendamento, setShowAgendamento] = useState(false);

  const produtos = [
    {
      id: 1,
      nome: "Frutas Frescas",
      imagem: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=80",
      descricao: "Seleção de frutas frescas da estação",
      preco: 25.90
    },
    {
      id: 2,
      nome: "Pães Artesanais",
      imagem: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
      descricao: "Pães frescos feitos diariamente",
      preco: 15.50
    },
    {
      id: 3,
      nome: "Legumes Orgânicos",
      imagem: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=1000&q=80",
      descricao: "Legumes orgânicos certificados",
      preco: 32.90
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-emerald-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Mercado Lado Be</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#inicio" className="hover:text-emerald-200">Início</a></li>
                <li><a href="#produtos" className="hover:text-emerald-200">Produtos</a></li>
                <li><a href="#servicos" className="hover:text-emerald-200">Serviços</a></li>
                <li><button onClick={() => setShowCadastro(true)} className="hover:text-emerald-200">Cadastro</button></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section com Carousel */}
      <section className="relative">
        <Carousel images={produtos.map(p => ({ src: p.imagem, alt: p.nome }))} />
      </section>

      {/* Serviços */}
      <section className="py-16 bg-white" id="servicos">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-xl font-semibold">Retirada no Local</h3>
              </div>
              <p className="text-gray-600 mb-4">Retire suas compras diretamente em nossa loja</p>
              <button 
                onClick={() => setShowAgendamento(true)}
                className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Agendar Retirada
              </button>
            </div>

            <div className="bg-emerald-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <ShoppingCart className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-xl font-semibold">Tele-entrega</h3>
              </div>
              <p className="text-gray-600 mb-4">Receba suas compras no conforto da sua casa</p>
              <button 
                onClick={() => setShowAgendamento(true)}
                className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Agendar Entrega
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-16 bg-gray-50" id="produtos">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Produtos em Destaque</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {produtos.map((produto) => (
              <div key={produto.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={produto.imagem} 
                  alt={produto.nome}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{produto.nome}</h3>
                  <p className="text-gray-600 mb-4">{produto.descricao}</p>
                  <p className="text-emerald-600 font-bold">R$ {produto.preco.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mercado Lado Be</h3>
              <p className="text-gray-400">Qualidade e frescor todos os dias</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 mr-2" />
                <span>(00) 1234-5678</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Seg - Sáb: 8h às 20h</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="hover:text-emerald-400">Início</a></li>
                <li><a href="#produtos" className="hover:text-emerald-400">Produtos</a></li>
                <li><a href="#servicos" className="hover:text-emerald-400">Serviços</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 Mercado Lado Be. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modais */}
      {showCadastro && (
        <CadastroCliente onClose={() => setShowCadastro(false)} />
      )}

      {showAgendamento && (
        <Agendamento onClose={() => setShowAgendamento(false)} />
      )}
    </div>
  );
}

export default App;