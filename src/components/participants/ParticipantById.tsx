import { Link, useParams } from "react-router-dom";
import ItemFetcher from "../../services/ItemFetcherService";
import { ParticipantModel } from "../../models/ParticipantModel";
import DataDelete from "../../services/ItemDeleterService";

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
                                        Criar Participante
                                    </button>
                                </Link>

                                <Link to={`/Editar/Participant/${Participant.id}`}>
                                    <button className="px-10 py-4 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105">
                                        Editar Participante
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
        </div>
    );
}

export default ParticipantById;
