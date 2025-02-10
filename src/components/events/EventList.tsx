import React from 'react';
import ListFetcherService from '../../services/ListFetcherService';
import { EventModel } from '../../models/EventModel';
import { Link } from 'react-router-dom';

function EventList() {
    return (
        <div>

            <br />
            <br />
            <ListFetcherService<EventModel>
                url={process.env.REACT_APP_GETLIST_EVENT}
                renderItem={(event) => (
                    <li key={event.id}>
                        <img
                            src="https://academy.4.events/pt-br/wp-content/uploads/2021/05/eventos-coporativo-telao-1024x576.jpg"
                            alt="Evento"
                            className="w-full h-48 object-cover mb-4 rounded"
                        />

                        <h2 className="text-2xl font-extrabold text-indigo-600 uppercase">{event.name}</h2>
                        <h2 className="text-lg font-bold text-indigo-300">Descrição do Evento:</h2>
                        <p>{event.description}</p>
                        <h2 className="text-lg font-bold text-indigo-300">Data e horário:</h2>
                        <p>{new Date(event.dateEvent).toLocaleString('pt-BR')}</p>
                        <h2 className="text-lg font-bold text-indigo-300">Local do Evento:</h2>
                        <h2>{event.local?.endereco}</h2>
                        <p></p>
                        <br />
                        <Link to={`/api/Event/Event/${event.id}`}>
                            <button className="px-6 py-3 w-full bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">
                                🔍 Ver Mais
                            </button>
                        </Link>

                        <br /><br />

                        <Link to={`/EventParticipants/${event.id}`}>
                            <button className="px-6 py-3 w-full bg-indigo-400 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition duration-300 ease-in-out transform hover:scale-105">
                                👥 Participantes do Evento
                            </button>
                        </Link>


                    </li>

                )}
                title="Eventos"

            />
        </div>

    );
}

export default EventList;
