import React from 'react';
import ListFetcherService from '../../services/ListFetcherService';
import { EventModel } from '../../models/EventModel';
import { Link, useParams } from 'react-router-dom';
import ItemFetcher from '../../services/ItemFetcherService';
import DataDelete from '../../services/ItemDeleterService';

function EventParticipants() {
    const { id } = useParams<{ id: string }>();
    return (
        <div>
            {id && (
                <ItemFetcher<EventModel>
                    url={process.env.REACT_APP_GETBYID_EVENT}
                    id={id}
                    renderItem={(Event) => (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                            }}
                        >
                            <h3>{Event.name}</h3>
                            <p>{Event.description}</p>
                            <p>{Event.dateEvent}</p>
                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    justifyContent: "center",
                                }}
                            >

                            </div>

                        </div>
                    )}
                    title="Evento"
                />
            )}
        </div>
    );
}

export default EventParticipants;
