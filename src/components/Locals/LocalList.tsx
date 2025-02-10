import { Link } from "react-router-dom";
import { LocalModel } from "../../models/LocalModel";
import ListFetcherService from "../../services/ListFetcherService";

function LocalList() {
    return (
        <div>
            <br />
            <br />
            <ListFetcherService<LocalModel>
                url={process.env.REACT_APP_GETLIST_LOCAL}
                renderItem={(Local) => (
                    <li key={Local.id}>
                        <h2 className="text-2xl font-extrabold text-indigo-100 uppercase">{Local.endereco}</h2>
                        <h2 className="text-lg font-bold text-indigo-300 mt-2">Número:</h2>
                        <p>{Local.capacidade}</p>
                        <br />
                        <Link to={`/api/Local/Local/${Local.id}`}>
                            <button className="px-6 py-3 w-full bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">
                                🔍 Ver Mais
                            </button>
                        </Link>
                    </li>
                )}
                title="Locais"
            />

        </div>
    )
}
export default LocalList