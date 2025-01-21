import { useForm } from "react-hook-form";
import { data, useParams } from "react-router-dom";
import { LocalModel } from "../../models/LocalModel";
import React, { useState } from "react";
import ItemFetcher from "../../services/ItemFetcherService";
import DataUpdate from "../../services/DataUpdaterService";

function UpdateLocal() {
    const { id } = useParams<{ id: string }>();
    const { register, handleSubmit, formState: { errors } } = useForm<LocalModel>();
    const [formData, setFormData] = useState<LocalModel | null>(null);

    const onSubmit = (data: LocalModel) => {
        const dataWithId = { ...data, id: id };
        setFormData(dataWithId);

    };
    return (
        <div>
            {id && (
                <ItemFetcher<LocalModel>
                    url={process.env.REACT_APP_GETBYID_LOCAL}
                    id={id}
                    title="Local"
                    renderItem={(Local) => (
                        <section>
                            <h1 className="form-title">
                                Editar <span>Local</span>
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label htmlFor="endereco" className="form-label">Endereco</label>
                                    <input
                                        id="endereco"
                                        type="text"
                                        name="endereco"
                                        className="form-field"
                                        defaultValue={Local.endereco}
                                        placeholder="Insira o nome do Participante"
                                        {...register("endereco", { required: "endereco é obrigatório" })} />
                                    {errors.endereco && <p className="error">{errors.endereco.message}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="capacidade" className="form-label">capacidade</label>
                                    <input
                                        id="capacidade"
                                        type="number"
                                        name="capacidade"
                                        className="form-field"
                                        defaultValue={Local.capacidade}
                                        placeholder="Insira o email do Participante"
                                        {...register("capacidade", { required: "capacidade é obrigatório" })} />
                                    {errors.capacidade && <p className="error">{errors.capacidade.message}</p>}
                                </div>

                                <button type="submit" className="form-button">
                                    Salvar Edição
                                </button>

                            </form>
                            {formData && (
                                <DataUpdate
                                    url={process.env.REACT_APP_UPDATE_LOCAL}
                                    id={id}
                                    data={formData}
                                    onSuccess={(response) => {
                                        console.log("Local Editado com sucesso:", response);
                                    }}
                                    onError={(error) => {
                                        console.error("Erro ao criar Local:", error);
                                    }}
                                />
                            )}


                        </section>


                    )}
                />
            )}
        </div>
    )

}
export default UpdateLocal


