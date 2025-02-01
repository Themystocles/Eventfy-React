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
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg text-center max-w-lg border border-gray-600">
                <h2 className="text-2xl font-semibold mb-4 text-green-400">Confirmação de Participação</h2>
                <p className="mb-4 text-gray-300">Você está prestes a confirmar sua participação no evento.</p>
                {eventId && participantId && participantData && (
                    <FormSubmit
                        url={`https://localhost:7159/CreateEventParticipant/${eventId}/${participantId}`}
                        data={participantData}
                        renderResponse={(response) => (
                            <p className="mt-4 p-2 bg-green-500 text-white rounded">{JSON.stringify(response)}</p>
                        )}
                        onSuccess={(response) => {
                            console.log("Evento criado com sucesso:", response);
                        }}
                        onError={(error) => {
                            console.error("Erro ao criar evento:", error);
                        }}
                    />
                )}
                <button
                    onClick={submit}
                    className="mt-6 px-6 py-3 border-2 border-green-400 text-green-400 rounded-lg shadow-lg hover:bg-green-400 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105"
                >
                    Confirmar Participação
                </button>
            </div>
        </div>
    );
}

export default PostParticipantInEvent;