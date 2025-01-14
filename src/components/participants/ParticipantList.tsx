import { Link } from "react-router-dom";
import { ParticipantModel } from "../../models/ParticipantModel";
import ListFetcherService from "../../services/ListFetcherService";

function ParticipantList() {
    return (
        <div>
            <br />
            <br />
            <ListFetcherService<ParticipantModel>
                url={"https://localhost:7159/api/Participant"}
                renderItem={(Participant) => (
                    <li key={Participant.id}>
                        <h2>{Participant.name}</h2>
                        <p>{Participant.email}</p>
                        <br />
                        <Link to={`/api/Participant/Participant/${Participant.id}`}><button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
                            Ver Mais
                        </button>
                        </Link>

                    </li>

                )}
                title="Participantes"
            />
        </div>
    );


}
export default ParticipantList