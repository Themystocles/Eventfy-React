import { useParams } from "react-router-dom";
import ItemFetcher from "../../services/ItemFetcherService";
import { ParticipantModel } from "../../models/ParticipantModel";

function ParticipantById() {
    const { id } = useParams<{ id: string }>();
    return (
        <div>


            {id && (
                <ItemFetcher<ParticipantModel>
                    url={"https://localhost:7159/api/Participant/Participant"}
                    id={id}
                    renderItem={(Participant) => (
                        <div>
                            <h3>{Participant.name}</h3>
                            <p>{Participant.email}</p>


                        </div>

                    )}
                    title="Participant"
                />
            )}

        </div>
    )
}


export default ParticipantById;