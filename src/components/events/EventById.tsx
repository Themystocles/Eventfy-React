import { Link, useParams } from "react-router-dom";
import ItemFetcher from "../../services/ItemFetcherService";
import { EventModel } from "../../models/EventModel";
import DataDelete from "../../services/ItemDeleterService";

function EventById() {
    const { id } = useParams<{ id: string }>();
    return (
        <div>
            {id && (
                <ItemFetcher<EventModel>
                    url={process.env.REACT_APP_GETBYID_EVENT}
                    id={id}
                    renderItem={(Event) => (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                            }}
                        >
                            <h3>{Event.name}</h3>
                            <p>{Event.description}</p>
                            <p>{Event.dateEvent}</p>
                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    justifyContent: "center",
                                }}
                            >
                                <Link to="/CreateEvent">
                                    <button className="px-10 py-4 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105">
                                        Criar  Evento
                                    </button>
                                </Link>
                                <Link to={`/UpdatEvent/${Event.id}`}>
                                    <button className="px-10 py-4 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105">
                                        Editar Evento
                                    </button>
                                </Link>

                            </div>
                            <br />
                            <DataDelete
                                url="https://localhost:7159/api/Event/Delete"
                                id={Event.id}
                            />
                        </div>
                    )}
                    title="Evento"
                />
            )}
        </div>
    );
}

export default EventById;
