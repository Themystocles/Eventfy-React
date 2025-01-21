import React, { useState, useEffect, useRef } from 'react';
import { FormProps } from "../models/FormProps";
import axios from "axios";

const FormSubmit = <T,>({ url, data, renderResponse, onSuccess, onError }: FormProps<T>) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        const sendData = async () => {
            setLoading(true);
            setError(null);
            console.log("Dados enviados para o backend:", data);

            try {
                const result = await axios.post(url, data);
                setResponse(result.data);
                setLoading(false);
                if (onSuccess) onSuccess(result.data);
            } catch (err) {
                setLoading(false);
                setError("Erro ao enviar os dados!");
                if (onError) onError(err);
            }
        };
        sendData();
    }, [data]);






    return (
        <div>
            {loading && <p>Enviando...</p>}
            {error && <p className="error">{error}</p>}
            {response && renderResponse ? (
                renderResponse(response)
            ) : (
                response && <p className="success">Dados enviados com sucesso!... {JSON.stringify(response)}</p>
            )}


        </div>
    );
};

export default FormSubmit;
