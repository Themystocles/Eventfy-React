import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import FormSubmit from "../../services/FormSubmitService";
import { ParticipantModel } from "../../models/ParticipantModel";


function CreateParticipant() {
    const { register, handleSubmit, formState: { errors } } = useForm<ParticipantModel>();

    const [formData, setFormData] = useState<ParticipantModel | null>(null);

    const onSubmit = (data: ParticipantModel) => {
        console.log("Dados enviados:", data);
        setFormData(data)
    }
    const renderResponse = (response: ParticipantModel) => {
        return (
            <div>
                <p className="feedback-success text-white">Evento criado com Sucesso:</p>
                <p className="text-white"><strong>Nome do Evento:</strong> {response.name}</p>
                <p className="text-white"><strong>Descrição:</strong> {response.email}</p>
            </div>
        );
    };

    return (
        <section className="form-container">
            <h1 className="form-title">
                Criar <span>Participante</span>
            </h1>
            <p className="text-center text-gray-200 mb-6">Cadastro de Participante</p>
            <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="name" className="form-label">Nome do Participant</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-field"
                        placeholder="Insira o nome do Participant"
                        {...register("name", { required: "Nome do Participante é obrigatório" })}
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email do Participant</label>
                    <input
                        id="Email"
                        type="text"
                        name="Email"
                        className="form-field"
                        placeholder="Insira o nome do Participant"
                        {...register("email", { required: "Email do Participante é obrigatório" })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>
                <button type="submit" className="form-button">
                    Enviar
                </button>

            </form>
            {formData && (
                <FormSubmit
                    url={process.env.REACT_APP_CREATE_PARTICIPANT}
                    data={formData}
                    renderResponse={renderResponse}
                    onSuccess={(response) => {
                        console.log("Evento criado com sucesso:", response);

                    }}
                    onError={(error) => {
                        console.error("Erro ao criar evento:", error);
                    }}
                />
            )
            }

        </section>
    )



}

export default CreateParticipant