import React, { useEffect, useState } from "react";
import axios from "axios";
import { GetListProps } from "../models/GetListProps";

const SelectFetcherService = <T,>({ url, renderItem, onChange, placeholder = "Escolha uma opção", }: GetListProps<T> & { onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void, placeholder?: string }) => {
    const [items, setItems] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get<T[]>(url)
            .then((response) => {
                setItems(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Erro ao carregar dados!");
                setLoading(false);
            });
    }, [url]);

    if (loading) {
        return <option value="" disabled>Carregando...</option>;
    }

    if (error) {
        return <option value="" disabled>{error}</option>;
    }

    return (
        <select onChange={onChange} className="form-field">
            <option value="" disabled>{placeholder}</option>
            {items.map((item, index) => (
                <option key={index} value={(item as any).id}>
                    {renderItem(item)}
                </option>

            ))}
        </select>
    );
};

export default SelectFetcherService;
