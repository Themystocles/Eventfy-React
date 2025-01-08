import React from "react";
import { useEffect, useState } from "react";
import { FormProps } from "../models/FormProps";
import axios from "axios";

const FormSubmit = <T,>({ url, data, renderResponse, onSuccess, onError }: FormProps<T>) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
            const result = await axios.post(url, data);
            setResponse(result.data);
            setLoading(false);
            if (onSuccess) onSuccess(result.data);

        } catch (err: any) {
            setLoading(false);
            setError("Erro ao enviar os dados!");
            if (onError) onError(err);

        }

    };
    return (
        <div>
            {loading && <p>Enviando...</p>}
            {error && <p className="error">{error}</p>}
            {response && renderResponse ? (
                renderResponse(response)
            ) : (
                response && <p className="success">Dados enviados com sucesso!... {JSON.stringify(response)}</p>
            )}
            <button onClick={handleSubmit} disabled={loading}>
                Enviar
            </button>
        </div>
    );
};

export default FormSubmit

