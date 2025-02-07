import { Link, useParams } from "react-router-dom";
import ListFetcherService from "../../services/ListFetcherService";
import { EventModel } from "../../models/EventModel";

function EventsByParticipantId() {
    const { participantId } = useParams<{ participantId: string }>();

    console.log("ID recebido:", participantId);

    return (

        <div>



            {participantId && (

                <ListFetcherService<EventModel>
                    url={`https://localhost:7159/Event/${participantId}`}
                    renderItem={(events) =>

                        <li>
                            <h2>{events.name}</h2>
                            <p>{events.description}</p>
                            <br />
                            <Link to={`/EventParticipants/${events.id}/${participantId}/delete`}>

                                <button className="mt-2 px-4 py-2 bg-red-500 text-white font-bold rounded-md shadow-md hover:bg-red-600 transition">
                                    Cancelar Inscrição
                                </button>

                            </Link>

                        </li>



                    }

                    title="Eventos inscritos"
                />



            )}





        </div>

    );
}

export default EventsByParticipantId;
