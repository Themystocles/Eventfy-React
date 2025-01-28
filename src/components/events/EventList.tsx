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

                        <h2>{event.name}</h2>
                        <p>{event.description}</p>
                        <p>{event.dateEvent}</p>
                        <h2>LOCAL</h2>
                        <h2>{event.local?.endereco}</h2>
                        <p></p>
                        <br />
                        <Link to={`/api/Event/Event/${event.id}`}><button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
                            Ver Mais
                        </button>
                        </Link>
                        <br />
                        <Link to={`/EventParticipants/${event.id}`}>Participantes do <span className="text-indigo-700">Evento</span></Link>

                    </li>

                )}
                title="Eventos"

            />
        </div>

    );
}

export default EventList;
