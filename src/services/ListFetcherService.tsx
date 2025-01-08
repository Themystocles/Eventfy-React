import React, { useEffect, useState } from "react";
import axios from "axios";
import { GetListProps } from "../models/GetListProps";

const ListFetcherService = <T,>({ url, renderItem, title }: GetListProps<T>) => {
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
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <p className="text-gray-500 text-xl">Carregando...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <p className="text-red-500 text-xl">{error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-semibold text-center text-gray-200 mb-12">
                    Descubra os <span className="text-indigo-400">{title}</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-indigo-500 to-teal-500 p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 transform"
                        >
                            <div className="text-lg text-white mb-4">{renderItem(item)}</div>
                            <div className="flex justify-between items-center">

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListFetcherService;
