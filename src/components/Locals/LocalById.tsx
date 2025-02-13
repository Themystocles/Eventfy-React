import { Link, useParams } from "react-router-dom";
import ItemFetcher from "../../services/ItemFetcherService";
import { LocalModel } from "../../models/LocalModel";
import DataDelete from "../../services/ItemDeleterService";

function LocalById() {
    const { id } = useParams<{ id: string }>();
    return (
        <div>
            {id && (
                <ItemFetcher<LocalModel>
                    url={process.env.REACT_APP_GETBYID_LOCAL}
                    id={id}
                    renderItem={(Local) => (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                            }}
                        >
                            <h3>{Local.endereco}</h3>
                            <p>{Local.capacidade}</p>

                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    justifyContent: "center",
                                }}
                            >
                                <Link to="/CreateLocal">
                                    <button className="px-10 py-4 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105">
                                        Criar Local
                                    </button>
                                </Link>

                                <Link to={`/Editar/Local/${Local.id}`}>
                                    <button className="px-10 py-4 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 transform hover:scale-105">
                                        Editar Local
                                    </button>
                                </Link>
                            </div>

                            <br />
                            <DataDelete
                                url="https://localhost:7159/api/Local/DeleteLocal"
                                id={Local.id}
                                title="a"
                            />
                        </div>
                    )}
                    title="Local"
                />
            )}
        </div>
    );
}

export default LocalById;
