import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/FormStyle.css";
import FormSubmit from "../../services/FormSubmitService";

import { LocalModel } from "../../models/LocalModel";
import SelectFetcherService from "../../services/SelectFetcherService";

function CreateEvent() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [formData, setFormData] = useState<any>(null);
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async (data: any) => {
        const combinedDateTime = `${data.dateEvent}T${data.timeEvent}`;
        const formattedData = {
            ...data,
            dateEvent: combinedDateTime,
        };
        console.log("Dados enviados:", formattedData);
        setFormData(formattedData);
        setSubmitted(true);
    };

    const renderResponse = (response: any) => {
        return (
            <div>
                <p className="feedback-success text-white">Evento criado com Sucesso:</p>
                <p className="text-white"><strong>Nome do Evento:</strong> {response.name}</p>
                <p className="text-white"><strong>Descrição:</strong> {response.description}</p>
                <p className="text-white"><strong>LocalId:</strong> {response.localId}</p>
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
                    <label htmlFor="dateEvent" className="form-label">Data do evento</label>
                    <input
                        id="dateEvent"
                        type="date"
                        name="dateEvent"
                        className="form-field"
                        placeholder="Insira a data para o Evento"
                        {...register("dateEvent", { required: "Data e hora são obrigatórios" })}
                    />
                    {errors.dateEvent && <p className="error">{errors.dateEvent.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="timeEvent" className="form-label">Hora do evento</label>
                    <input
                        id="timeEvent"
                        type="time"
                        name="timeEvent"
                        className="form-field"
                        placeholder="Insira a Hora para o Evento"
                        {...register("timeEvent", { required: "Data e hora são obrigatórios" })}
                    />
                    {errors.timeEvent && <p className="error">{errors.timeEvent.message}</p>}
                </div>



                <div className="mb-4">
                    <label htmlFor="localId" className="form-label">Localização</label>
                    {/* Usando SelectFetcherService dentro do select */}
                    <SelectFetcherService<LocalModel>
                        url="https://localhost:7159/api/Local"
                        renderItem={(local) => local.endereco} // Exibe o endereço do local
                        onChange={(e) => {
                            const selectedValue = parseInt(e.target.value, 10);  // Converte para número
                            setValue("localId", selectedValue);  // Atualiza o valor de location no form
                        }}
                        placeholder="Escolha um local"
                        title=""
                    />
                    {errors.localId && <p className="error">{errors.localId.message}</p>}

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
