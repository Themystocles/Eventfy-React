import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/FormStyle.css";
import FormSubmit from "../../services/FormSubmitService";

function CreateEvent() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState<any>(null);
    const [submitted, setSubmitted] = useState(false); // Controle de envio

    const onSubmit = async (data: any) => {
        console.log("Dados enviados:", data);
        setFormData(data);
        setSubmitted(true); // Marca como enviado
    };

    const renderResponse = (response: any) => {
        return (
            <div>
                <p className="feedback-success text-white">Evento criado com Sucesso:</p>
                <p className="text-white"><strong>Nome do Evento:</strong> {response.name}</p>
                <p className="text-white"><strong>Descrição:</strong> {response.description}</p>
            </div>
        );
    };

    return (
        <section className="form-container">
            <h1 className="form-title">
                Criar <span>Evento</span>
            </h1>
            <p className="text-center text-gray-200 mb-6">Cadastro de Evento</p>

            <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="name" className="form-label">Nome do Evento</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-field"
                        placeholder="Insira o nome do Evento"
                        {...register("name", { required: "Nome do evento é obrigatório" })}
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="form-label">Descrição</label>
                    <input
                        id="description"
                        type="text"
                        name="description"
                        className="form-field"
                        placeholder="Insira a descrição para o Evento"
                        {...register("description", { required: "Descrição é obrigatória" })}
                    />
                    {errors.description && <p className="error">{errors.description.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="form-label">Localização</label>
                    <select
                        id="location"
                        name="location"
                        className="form-field"
                        {...register("location", { required: "Escolha uma localização" })}
                    >
                        <option value="" disabled>Escolha um local</option>
                        <option value="Local 1">Local 1</option>
                        <option value="Local 2">Local 2</option>
                    </select>
                    {errors.location && <p className="error">{errors.location.message}</p>}
                </div>

                <button type="submit" className="form-button">
                    Enviar
                </button>
            </form>

            {submitted && formData && (
                <FormSubmit
                    url={process.env.REACT_APP_CREATE_EVENT}
                    data={formData}
                    renderResponse={renderResponse}
                    onSuccess={(response) => {
                        console.log("Evento criado com sucesso:", response);
                    }}
                    onError={(error) => {
                        console.error("Erro ao criar evento:", error);
                    }}
                />
            )}
        </section>
    );
}

export default CreateEvent;
