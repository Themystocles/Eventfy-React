import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-lg py-4 px-8 flex justify-between items-center z-50" >
            <div className="logo">
                <h1 className="text-2xl font-bold tracking-wide"><Link to="/">Eventfy</Link></h1>
            </div>
            <nav>
                <ul className="flex space-x-8">
                    <li>
                        <Link to="/" className="text-sm uppercase font-medium hover:text-blue-500 transition-colors duration-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/EventList" className="text-sm uppercase font-medium hover:text-blue-500 transition-colors duration-300">
                            Eventos
                        </Link>
                    </li>
                    <li>
                        <Link to="/ParticipantList" className="text-sm uppercase font-medium hover:text-blue-500 transition-colors duration-300">
                            Participantes
                        </Link>
                    </li>
                    <li>
                        <Link to="/LocalList" className="text-sm uppercase font-medium hover:text-blue-500 transition-colors duration-300">
                            Locais
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
