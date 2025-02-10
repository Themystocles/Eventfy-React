import axios from "axios";
import { GetItemProps } from "../models/GetItemProps";
import { useEffect, useState } from "react";



const ItemFetcher = <T extends object>({ url, id, renderItem, title }: GetItemProps<T>) => {
    const [item, setItem] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get<T>(`${url}/${id}`)
            .then((response) => {
                setItem(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Erro ao carregar o item");
                setLoading(false);
            });
    }, [url, id]);

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

    if (!item) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <p className="text-gray-500 text-xl">Item não encontrado.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center py-12">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-semibold text-center text-gray-200 mb-8">
                    Detalhes do <span className="text-indigo-400">{title}</span>
                </h2>

                <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
                    <div className="text-lg text-white">{renderItem(item)}</div>
                </div>

                {/* Botões estilizados */}
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
                        onClick={() => window.history.back()}
                    >
                        Voltar
                    </button>


                </div>
            </div>
        </div>
    );
};

export default ItemFetcher;
