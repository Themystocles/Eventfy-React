import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import ItemFetcher from "../../services/ItemFetcherService";
import DataUpdate from "../../services/DataUpdaterService";
import { ParticipantModel } from "../../models/ParticipantModel";
import { EventModel } from "../../models/EventModel";

function UpdateEvent() {
    const { id } = useParams<{ id: string }>();
    const { register, handleSubmit, formState: { errors } } = useForm<EventModel>();
    const [formData, setFormData] = useState<ParticipantModel | null>(null);

    const onSubmit = (data: EventModel) => {
        setFormData(data);
    };
    return (
        <div>
            {id && (
                <ItemFetcher<EventModel>
                    url={process.env.REACT_APP_GETBYID_EVENT}
                    id={id}
                    title="Participante"
                    renderItem={(Event) => (
                        <section>
                            <h1 className="form-title">
                                Editar <span>Evento</span>
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label">Nome do Event</label>
                                    <input
                                        id="Event"
                                        type="text"
                                        name="Event"
                                        className="form-field"
                                        defaultValue={Event.name}
                                        placeholder="Insira o nome do Event"
                                        {...register("name", { required: "Nome do Event é obrigatório" })} />
                                    {errors.name && <p className="error">{errors.name.message}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="descricao" className="form-label">Descrição do evento</label>
                                    <input
                                        id="description"
                                        type="text"
                                        name="description"
                                        className="form-field"
                                        defaultValue={Event.description}
                                        placeholder="Insira a descrição do Evento"
                                        {...register("description", { required: "a descrição do evento é obrigatória" })} />
                                    {errors.description && <p className="error">{errors.description.message}</p>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="dateEvent" className="form-label">Data do Evento</label>
                                    <input
                                        id="dateEvent"
                                        type="date"
                                        name="dateEvent"
                                        className="form-field"
                                        defaultValue={Event.dateEvent}
                                        placeholder="Insira a data do Event"
                                        {...register("description", { required: "a data do evento é obrigatória" })} />
                                    {errors.dateEvent && <p className="error">{errors.dateEvent.message}</p>}
                                </div>





                                <button type="submit" className="form-button">
                                    Salvar Edição
                                </button>
                            </form>
                            {formData && (
                                <DataUpdate
                                    url={process.env.REACT_APP_UPDATE_EVENT}
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

export default UpdateEvent;
