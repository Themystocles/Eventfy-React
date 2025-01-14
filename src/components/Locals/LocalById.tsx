import { Link, useParams } from "react-router-dom"
import ItemFetcher from "../../services/ItemFetcherService";
import { LocalModel } from "../../models/LocalModel";

function LocalById() {
    const { id } = useParams<{ id: string }>();
    return (
        <div>

            {id && (<ItemFetcher<LocalModel>
                url={"https://localhost:7159/api/Local/Local"}
                id={id}
                renderItem={(Local) => (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                        <h3>{Local.endereco}</h3>
                        <p>{Local.capacidade}</p>

                        <br />
                        <br />
                        <Link to="/CreateLocal">
                            <button className="px-10 py-4 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105">
                                Criar novo Local
                            </button>
                        </Link>

                    </div>
                )}
                title="Local"
            />


            )}




        </div>
    )
}
export default LocalById