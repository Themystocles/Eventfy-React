import axios from "axios";
import { DeleteProps } from "../models/DeletProps";
import React, { useState, useEffect, useRef } from "react";

const DataDelete = ({ url, id }: DeleteProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [deleted, setDeleted] = useState(false)


    const deleteItem = async () => {
        setLoading(true);
        setError(null)

        try {
            const result = await axios.delete(`${url}/${id}`);
            setLoading(false);
            setDeleted(true);
        } catch (err: any) {
            setLoading(false);
            setError("Erro ao enviar os dados!");
        }
    }

    return (
        <div>
            {loading && <p>Aguarde...</p>}
            {error && <p className="error">{error}</p>}
            {deleted && (<p className="success"> Dados Deletados com sucesso!!! </p>)}
            <button onClick={deleteItem} disabled={loading}>
                {loading ? "Deletando..." : "Deletar"}
            </button>
        </div>
    );
}
export default DataDelete
