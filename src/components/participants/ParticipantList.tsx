import { Link } from "react-router-dom";
import { ParticipantModel } from "../../models/ParticipantModel";
import ListFetcherService from "../../services/ListFetcherService";

function ParticipantList() {
    return (
        <div>
            <br />
            <br />
            <ListFetcherService<ParticipantModel>
                url={process.env.REACT_APP_GETLIST_PARTICIPANT}
                renderItem={(Participant) => (
                    <li key={Participant.id}>
                        <h2 className="text-2xl font-extrabold text-indigo-100 uppercase">{Participant.name}</h2>
                        <h2 className="text-lg font-bold text-indigo-300 mt-2">E-mail:</h2>
                        <p className="text-white">{Participant.email}</p>
                        <br />
                        <Link to={`/api/Participant/Participant/${Participant.id}`}>
                            <button className="px-6 py-3 w-full bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">
                                🔍 Ver Mais
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