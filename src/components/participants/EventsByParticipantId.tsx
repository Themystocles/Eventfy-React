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
                        </li>





                    }

                    title="Eventos inscrito"
                />


            )}
            <Link>
                <button>Cancelar inscrição</button>
            </Link>
        </div>
    );
}

export default EventsByParticipantId;
