import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import FormSubmit from "../../services/FormSubmitService";
import { LocalModel } from "../../models/LocalModel"; // Certifique-se de ajustar o caminho

function CreateLocal() {
    const { register, handleSubmit, formState: { errors } } = useForm<LocalModel>();

    const [formData, setFormData] = useState<LocalModel | null>(null);

    const onSubmit = (data: LocalModel) => {
        console.log("Dados enviados:", data);
        setFormData(data);
    };

    const renderResponse = (response: LocalModel) => {
        return (
            <div>
                <p className="feedback-success text-white">Local criado com Sucesso:</p>
                <p className="text-white"><strong>Endereço:</strong> {response.endereco}</p>
                <p className="text-white"><strong>Capacidade:</strong> {response.capacidade}</p>
            </div>
        );
    };

    return (
        <section className="form-container">
            <h1 className="form-title">
                Criar <span>Local</span>
            </h1>
            <p className="text-center text-gray-200 mb-6">Cadastro de Local</p>
            <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="endereco" className="form-label">Endereço</label>
                    <input
                        id="endereco"
                        type="text"
                        className="form-field"
                        placeholder="Insira o Endereço"
                        {...register("endereco", { required: "Endereço é obrigatório" })}
                    />
                    {errors.endereco && <p className="error">{errors.endereco.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="capacidade" className="form-label">Capacidade</label>
                    <input
                        id="capacidade"
                        type="number"
                        className="form-field"
                        placeholder="Capacidade"
                        {...register("capacidade", { required: "Capacidade é obrigatória" })}
                    />
                    {errors.capacidade && <p className="error">{errors.capacidade.message}</p>}
                </div>
                <button type="submit" className="form-button">
                    Enviar
                </button>
            </form>
            {formData && (
                <FormSubmit
                    url="https://localhost:7159/api/Local/CreateLocal"
                    data={formData}
                    renderResponse={renderResponse}
                    onSuccess={(response) => {
                        console.log("Local criado com sucesso:", response);
                    }}
                    onError={(error) => {
                        console.error("Erro ao criar local:", error);
                    }}
                />
            )}
        </section>
    );
}

export default CreateLocal;
