import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center">
            {/* Container Principal */}
            <div className="max-w-6xl mx-auto px-6 py-16 md:px-12 flex flex-col md:flex-row items-center gap-12">
                {/* Imagem da Web à Esquerda */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://static.vecteezy.com/ti/fotos-gratis/p1/24308240-verao-festival-evento-festa-com-pessoas-borrado-fundo-ilustracao-ai-generativo-gratis-foto.jpg"
                        alt="Ilustração de pessoas em evento de verão"
                        className="w-11/12 h-auto max-h-80 object-cover rounded-lg shadow-2xl"
                    />
                </div>

                {/* Conteúdo à Direita */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    {/* Título */}
                    <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight">
                        Conecte-se com o mundo dos <span className="text-green-400">Eventos</span> na <span className="text-blue-500">Eventfy</span>
                    </h1>
                    {/* Descrição */}
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Participe de eventos próximos, crie os seus próprios e compartilhe experiências com pessoas ao redor do mundo.
                    </p>

                    {/* Botões de ação dentro de um card */}
                    <div className="flex justify-center gap-8">
                        <Link to="/EventList">
                            <button className="px-10 py-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105">
                                Explorar Eventos
                            </button>
                        </Link>
                        <button className="px-10 py-4 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105">
                            Criar Evento
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
