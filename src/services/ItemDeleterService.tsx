import axios from "axios";
import { DeleteProps } from "../models/DeletProps";
import React, { useState, useEffect, useRef } from "react";

const DataDelete = ({ url, id, title }: DeleteProps) => {
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

            setTimeout(() => {
                window.location.href = "http://localhost:3000/";
            }, 3000)
        } catch (err: any) {
            setLoading(false);
            setError("Erro ao enviar os dados!");
        }
    }

    return (
        <div>
            {loading && <p>Aguarde...</p>}
            {error && <p className="feedback-error">{error}</p>}

            {/* Modal para sucesso */}
            {deleted && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80">
                    <div className="form-box">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                            Sucesso!
                        </h2>
                        <p className="text-gray-200 mb-6">
                            Os dados foram deletados com sucesso. Você será redirecionado em breve.
                        </p>
                        <button
                            className="form-button"
                            onClick={() =>
                            (window.location.href =
                                "http://localhost:3000/")
                            }
                        >
                            Redirecionar agora
                        </button>
                    </div>
                </div>
            )}

            <button className="delete-button" onClick={deleteItem} disabled={loading}>
                {loading ? "Deletando..." : title}
            </button>
        </div>
    );
}
export default DataDelete
