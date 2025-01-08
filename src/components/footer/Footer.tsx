import React from 'react';

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 px-8">
            <div className="flex justify-between items-center">

                <div className="text-sm">
                    <p>&copy; 2024 Eventfy. Todos os direitos reservados.</p>
                </div>


                <div className="flex space-x-8">
                    <a href="#about" className="text-sm uppercase font-medium hover:text-blue-500 transition-colors duration-300">
                        Sobre
                    </a>
                    <a href="#contact" className="text-sm uppercase font-medium hover:text-blue-500 transition-colors duration-300">
                        Contato
                    </a>
                    <a href="#privacy" className="text-sm uppercase font-medium hover:text-blue-500 transition-colors duration-300">
                        Privacidade
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
