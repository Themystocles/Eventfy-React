import { useState } from "react";
import { useParams } from "react-router-dom";
import FormSubmit from "../../services/FormSubmitService";
import { EventParticipantModel } from "../../models/EventParticipantModel";

function PostParticipantInEvent() {
    const { eventId, participantId } = useParams<{ eventId: string; participantId: string }>();
    const [participantData, setParticipantData] = useState<EventParticipantModel | null>(null);


    function submit() {
        console.log("Botão clicado!", { eventId }, { participantId });
        const participantDataok = {
            eventId: Number(eventId),
            participantId: Number(participantId),
        };
        setParticipantData(participantDataok);
    }

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <p>Pagina</p>
            {eventId && participantId && participantData && (
                <FormSubmit
                    url={`https://localhost:7159/CreateEventParticipant/${eventId}/${participantId}`}
                    data={participantData} // Passa o estado atualizado para o FormSubmit
                    renderResponse={(response) => <p>{JSON.stringify(response)}</p>}
                    onSuccess={(response) => {
                        console.log("Evento criado com sucesso:", response);
                    }}
                    onError={(error) => {
                        console.error("Erro ao criar evento:", error);
                    }}
                />
            )}
            <button onClick={submit}>Aqui</button>
        </div>
    );
}
export default PostParticipantInEvent

