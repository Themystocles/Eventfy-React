import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import ItemFetcher from "../../services/ItemFetcherService";
import DataUpdate from "../../services/DataUpdaterService";
import { ParticipantModel } from "../../models/ParticipantModel";

function UpdateParticipant() {
    const { id } = useParams<{ id: string }>();
    const { register, handleSubmit, formState: { errors } } = useForm<ParticipantModel>();
    const [formData, setFormData] = useState<ParticipantModel | null>(null);

    const onSubmit = (data: ParticipantModel) => {
        setFormData(data);
    };
    return (
        <div>
            {id && (
                <ItemFetcher<ParticipantModel>
                    url={process.env.REACT_APP_GETBYID_PARTICIPANT}
                    id={id}
                    title="Participante"
                    renderItem={(Participant) => (
                        <section>
                            <h1 className="form-title">
                                Editar <span>Participante</span>
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label">Nome do Participante</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        className="form-field"
                                        defaultValue={Participant.name}
                                        placeholder="Insira o nome do Participante"
                                        {...register("name", { required: "Nome do Participante é obrigatório" })} />
                                    {errors.name && <p className="error">{errors.name.message}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Email do Participante</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="form-field"
                                        defaultValue={Participant.email}
                                        placeholder="Insira o email do Participante"
                                        {...register("email", { required: "Email do Participante é obrigatório" })} />
                                    {errors.email && <p className="error">{errors.email.message}</p>}
                                </div>

                                <button type="submit" className="form-button">
                                    Salvar Edição
                                </button>
                            </form>
                            {formData && (
                                <DataUpdate
                                    url={process.env.REACT_APP_UPDATE_PARTICIPANT}
                                    id={id}
                                    data={formData}
                                    onSuccess={(response) => {
                                        console.log("Particiant criado com sucesso:", response);
                                    }}
                                    onError={(error) => {
                                        console.error("Erro ao criar Participant:", error);
                                    }}
                                />
                            )}
                        </section>
                    )}
                />
            )}
        </div>
    );
}

export default UpdateParticipant;
