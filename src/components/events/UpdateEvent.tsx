import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import ItemFetcher from "../../services/ItemFetcherService";
import DataUpdate from "../../services/DataUpdaterService";
import { EventModel } from "../../models/EventModel";
import SelectFetcherService from "../../services/SelectFetcherService";
import { LocalModel } from "../../models/LocalModel";

function UpdateEvent() {
    const { id } = useParams<{ id: string }>();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<EventModel>();
    const [formData, setFormData] = useState<EventModel | null>(null);


    const onSubmit = (data: EventModel) => {
        const combinedDatetime = `${data.dateEvent}T${data.timeEvent}`;
        const formattedData = {
            ...data,
            dateEvent: combinedDatetime
        }
        console.log("dados enviados:", formattedData);
        setFormData(formattedData);

    };
    return (
        <div>
            {id && (
                <ItemFetcher<EventModel>
                    url={process.env.REACT_APP_GETBYID_EVENT}
                    id={id}
                    title="Evento"
                    renderItem={(Event) => (
                        <section>
                            <h1 className="form-title">
                                Editar detalhes do <span>Evento</span>
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
                                    <label htmlFor="description" className="form-label">Descrição do evento</label>
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
                                        defaultValue={Event.dateEvent ? new Date(Event.dateEvent).toISOString().split("T")[0] : ""}
                                        placeholder="Insira a data do Event"
                                        {...register("dateEvent", { required: "a data do evento é obrigatória" })} />
                                    {errors.dateEvent && <p className="error">{errors.dateEvent.message}</p>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="timeEvent" className="form-label">Hora do evento</label>
                                    <input
                                        id="timeEvent"
                                        type="time"
                                        name="timeEvent"
                                        className="form-field"
                                        defaultValue={Event.dateEvent ? new Date(Event.dateEvent).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : ""}
                                        placeholder="Insira a data do Event"
                                        {...register("timeEvent", { required: "a data do evento é obrigatória" })} />
                                    {errors.timeEvent && <p className="error">{errors.timeEvent.message}</p>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="local" className="form-label">Local do evento</label>
                                    <SelectFetcherService<LocalModel>
                                        url="https://localhost:7159/api/Local"
                                        renderItem={(local) => local.endereco}
                                        onChange={(e) => {
                                            const selectedValue = parseInt(e.target.value, 10);
                                            setValue("localId", selectedValue)
                                        }}

                                        placeholder="Escolha um local"
                                        title=""
                                    />
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
                                        console.log("Evenyo criado com sucesso:", response);
                                    }}
                                    onError={(error) => {
                                        console.error("Erro ao criar evento:", error);
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
