import { Link } from "react-router-dom";
import { LocalModel } from "../../models/LocalModel";
import ListFetcherService from "../../services/ListFetcherService";

function LocalList() {
    return (
        <div>
            <ListFetcherService<LocalModel>
                url={"https://localhost:7159/api/Local"}
                renderItem={(Local) => (
                    <li key={Local.id}>
                        <h2>{Local.endereco}</h2>
                        <p>{Local.capacidade}</p>
                        <br />
                        <Link to={`/api/Local/Local/${Local.id}`}><button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
                            Ver Mais
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