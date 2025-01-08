import { useParams } from "react-router-dom"
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
                    <div>
                        <h3>{Local.endereco}</h3>
                        <p>{Local.capacidade}</p>

                    </div>
                )}
                title="Local"
            />


            )}




        </div>
    )
}
export default LocalById