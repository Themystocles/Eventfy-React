import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { UpdateProps } from "../models/UpdateProps";

const DataUpdate = <T,>({ url, data, id, onSuccess, onError }: UpdateProps<T>) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<T | any>(null);
    const [error, setError] = useState<string | null>(null);
    const isFirstRender = useRef(true);

    const sendData = async () => {
        setLoading(true);
        setError(null);

        try {
            const result = await axios.put(`${url}/${id}`, data);
            setResponse(result.data);
            setLoading(false);
            if (onSuccess) onSuccess(result.data);
        } catch (err: any) {
            setLoading(false);
            setError("Erro ao enviar os dados!");
            if (onError) onError(err);
        }
    };

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }


        sendData();

    }, [data, id]);

    return (
        <div>
            {loading && <p>Enviando...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && response && (<p className="success"> Dados Editados com sucesso: {JSON.stringify(response)} </p>)}
        </div>
    );
};

export default DataUpdate;
