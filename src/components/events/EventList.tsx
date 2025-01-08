import React from 'react';
import ListFetcherService from '../../services/ListFetcherService';
import { EventModel } from '../../models/EventModel';
import { Link } from 'react-router-dom';

function EventList() {
    return (
        <div>


            <ListFetcherService<EventModel>
                url={"https://localhost:7159/api/Event/Event"}
                renderItem={(event) => (
                    <li key={event.id}>

                        <h2>{event.name}</h2>
                        <p>{event.description}</p>
                        <br />
                        <Link to={`/api/Event/Event/${event.id}`}><button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
                            Ver Mais
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