import React, { useState } from "react";
import ListFetcherService from '../../services/ListFetcherService';
import { EventModel } from '../../models/EventModel';
import { Link, useParams } from 'react-router-dom';
import ItemFetcher from '../../services/ItemFetcherService';
import DataDelete from '../../services/ItemDeleterService';
import { ParticipantModel } from '../../models/ParticipantModel';

function EventParticipants() {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <ItemFetcher<EventModel>
                url={process.env.REACT_APP_GETBYID_EVENT}
                id={id}
                title='Evento'
                renderItem={(Event) => (
                    <div>
                        <h3>{Event.name}</h3>
                        <p>{Event.description}</p>
                        <p>{Event.dateEvent}</p>
                        <p>{Event.local}</p>
                    </div>
                )}
            />
            {id && (
                <ListFetcherService<ParticipantModel>
                    url={`https://localhost:7159/Participants/${id}`}
                    renderItem={(Participant) => (


                        < div >
                            <h3>{Participant.name}</h3>
                            <p>{Participant.email}</p>


                        </div>


                    )
                    }
                    title="Participantes Deste Evento"


                />


            )}

        </div >
    );
}

export default EventParticipants;


