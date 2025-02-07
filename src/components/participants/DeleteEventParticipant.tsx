import { useState } from "react";
import { useParams } from "react-router-dom";
import FormSubmit from "../../services/FormSubmitService";
import { EventParticipantModel } from "../../models/EventParticipantModel";
import DataDelete from "../../services/ItemDeleterService";

function DeleteEventParticipant() {
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
                <h2 className="text-2xl font-semibold mb-4 text-green-400">Cancelar inscrição neste evento</h2>
                <p className="mb-4 text-gray-300">Você está prestes a confirmar sua Exclusão de participação no evento.</p>
                {eventId && participantId && participantData && (
                    <DataDelete
                        url={`https://localhost:7159/Eventparticipant/${eventId}`}
                        id={participantId}



                    />
                )}
                <button
                    onClick={submit}
                    className="mt-6 px-6 py-3 border-2 border-green-400 text-green-400 rounded-lg shadow-lg hover:bg-green-400 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105"
                >
                    Confirmar Exclusão de participação
                </button>
            </div>
        </div>
    );
}

export default DeleteEventParticipant;