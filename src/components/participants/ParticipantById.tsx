import { Link, useParams } from "react-router-dom";
import ItemFetcher from "../../services/ItemFetcherService";
import { ParticipantModel } from "../../models/ParticipantModel";
import DataDelete from "../../services/ItemDeleterService";
import ListFetcherService from "../../services/ListFetcherService";
import { EventModel } from "../../models/EventModel";
import React, { useState } from "react";

function ParticipantById() {
    const { id } = useParams<{ id: string }>();
    const [participarEvent, setParticiparEvent] = useState(false);
    const [detalhesParticipant, setdetalhesParticipant] = useState(true);

    return (
        <div>
            {id && detalhesParticipant && (
                <ItemFetcher<ParticipantModel>
                    url="https://localhost:7159/api/Participant/Participant"
                    id={id}
                    renderItem={(participant) => (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                            }}
                        >
                            <h3>{participant.name}</h3>
                            <p>{participant.email}</p>

                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    justifyContent: "center",
                                }}
                            >
                                <Link to="/CreateParticipant">
                                    <button className="px-10 py-4 border-2 border-white text-white rounded-lg shadow-lg hover:bg-indigo-600 hover:shadow-xl transition duration-300">
                                        Criar novo Participante
                                    </button>
                                </Link>

                                <Link to={`/Editar/Participant/${participant.id}`}>
                                    <button className="px-10 py-4 border-2 border-white text-white rounded-lg shadow-lg hover:bg-yellow-600 hover:shadow-xl transition duration-300">
                                        Editar Participante
                                    </button>
                                </Link>

                                <button
                                    onClick={() => { setParticiparEvent(true); setdetalhesParticipant(false); }}
                                    className="px-10 py-4 border-2 border-white text-white rounded-lg shadow-lg hover:bg-green-600 hover:shadow-xl transition duration-300"
                                >
                                    Participar de um evento
                                </button>
                            </div>

                            <br />
                            <DataDelete
                                url="https://localhost:7159/api/Participant/Deletar/Participant"
                                id={participant.id}
                            />
                        </div>
                    )}
                    title="Detalhes do Participante"
                />
            )}

            <br />
            <br />
            {participarEvent && (
                <ul>
                    <ListFetcherService<EventModel>
                        url={process.env.REACT_APP_GETLIST_EVENT}
                        renderItem={(event) => (
                            <li key={event.id}>
                                <img
                                    src="https://academy.4.events/pt-br/wp-content/uploads/2021/05/eventos-coporativo-telao-1024x576.jpg"
                                    alt="Evento"
                                    className="w-full h-48 object-cover mb-4 rounded"
                                />
                                <h2>{event.name}</h2>
                                <p>{event.description}</p>
                                <p>{event.dateEvent}</p>
                                <h2>LOCAL</h2>
                                <h2>{event.local?.endereco}</h2>
                                <br />
                                <Link to={`/EventParticipants/${event.id}/${id}`}>
                                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 hover:shadow-xl transition duration-200">
                                        Participar deste Evento
                                    </button>
                                </Link>
                            </li>
                        )}
                        title={`Eventos: Escolha um evento para se inscrever`}
                    />
                </ul>
            )}
        </div>
    );
}

export default ParticipantById;
