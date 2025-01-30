import { Link, useParams } from "react-router-dom";
import ItemFetcher from "../../services/ItemFetcherService";
import { ParticipantModel } from "../../models/ParticipantModel";
import DataDelete from "../../services/ItemDeleterService";
import ListFetcherService from "../../services/ListFetcherService";
import { EventModel } from "../../models/EventModel";

function ParticipantById() {
    const { id } = useParams<{ id: string }>();
    return (
        <div>

            {id && (
                <ItemFetcher<ParticipantModel>
                    url={"https://localhost:7159/api/Participant/Participant"}
                    id={id}
                    renderItem={(Participant) => (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                            }}
                        >
                            <h3>{Participant.name}</h3>
                            <p>{Participant.email}</p>

                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    justifyContent: "center",
                                }}
                            >

                                <Link to="/CreateParticipant">
                                    <button className="px-10 py-4 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105">
                                        Criar novo Participante
                                    </button>
                                </Link>

                                <Link to={`/Editar/Participant/${Participant.id}`}>
                                    <button className="px-10 py-4 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105">
                                        Editar Participante
                                    </button>
                                </Link>
                                <Link to={`/Editar/Participant/${Participant.id}`}>
                                    <button className="px-10 py-4 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105">
                                        Participar de um evento
                                    </button>
                                </Link>

                            </div>


                            <br />
                            <DataDelete
                                url="https://localhost:7159/api/Participant/Deletar/Participant"
                                id={Participant.id}
                            />
                        </div>



                    )}

                    title="Participant"
                />


            )}
            <ListFetcherService<EventModel>
                url={process.env.REACT_APP_GETLIST_EVENT}
                renderItem={(event) => (
                    <li key={event.id}>

                        <h2>{event.name}</h2>
                        <p>{event.description}</p>
                        <p>{event.dateEvent}</p>
                        <h2>LOCAL</h2>
                        <h2>{event.local?.endereco}</h2>
                        <br></br>

                        <Link to={`/EventParticipants/${event.id}/${id}`}><button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
                            Participar deste Evento
                        </button>
                        </Link>



                    </li>

                )}
                title="Eventos"

            />

        </div>
    );
}

export default ParticipantById;
