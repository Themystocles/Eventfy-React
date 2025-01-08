import { useParams } from "react-router-dom"
import ItemFetcher from "../../services/ItemFetcherService";
import { EventModel } from "../../models/EventModel";


function EventById() {
    const { id } = useParams<{ id: string }>();
    return (
        <div>

            {id && (
                <ItemFetcher<EventModel>
                    url={`https://localhost:7159/api/Event/Event`}
                    id={id}
                    renderItem={(Event) => (
                        <div>

                            <h3>{Event.name}</h3>
                            <p>{Event.description}</p>




                        </div>)}
                    title="Evento"
                />
            )}

        </div>
    )
}

export default EventById 