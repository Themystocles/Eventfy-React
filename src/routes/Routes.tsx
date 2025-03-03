import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import EventList from '../components/events/EventList';
import ParticipantList from '../components/participants/ParticipantList';
import LocalList from '../components/Locals/LocalList';
import EventById from '../components/events/EventById';
import ParticipantById from '../components/participants/ParticipantById';
import LocalById from '../components/Locals/LocalById';
import CreateEvent from '../components/events/CreateEvent';
import CreateParticipant from '../components/participants/CreateParticipant';
import CreateLocal from '../components/Locals/CreateLocal';
import UpdateParticipant from '../components/participants/UpdateParticipant';
import UpdateLocal from '../components/Locals/UpdateLocals';
import UpdateEvent from '../components/events/UpdateEvent';
import EventParticipants from '../components/events/EventParticipants';
import PostParticipantInEvent from '../components/eventParticipant/PostParticipantInEvent';
import EventsByParticipantId from '../components/participants/EventsByParticipantId';
import DeleteEventParticipant from '../components/participants/DeleteEventParticipant';


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='EventList' element={<EventList />} />
            <Route path="/api/Event/Event/:id" element={<EventById />} />
            <Route path='CreateEvent' element={<CreateEvent />} />
            <Route path='UpdatEvent/:id' element={<UpdateEvent />} />
            <Route path='ParticipantList' element={<ParticipantList />} />
            <Route path="/api/Participant/Participant/:id" element={<ParticipantById />} />
            <Route path="/api/Participant/Participant/:id" element={<UpdateParticipant />} />
            <Route path='CreateParticipant' element={<CreateParticipant />} />
            <Route path='Editar/Participant/:id' element={<UpdateParticipant />} />
            <Route path='LocalList' element={<LocalList />} />
            <Route path='api/local/local/:id' element={<LocalById />} />
            <Route path='editar/local/:id' element={<UpdateLocal />} />
            <Route path='CreateLocal' element={<CreateLocal />} />
            <Route path='EventParticipants/:id' element={<EventParticipants />} />
            <Route path='EventParticipants/:eventId/:participantId' element={<PostParticipantInEvent />} />
            <Route path='EventByParticipants/:participantId' element={<EventsByParticipantId />} />
            <Route path='EventParticipants/:eventId/:participantId/delete' element={<DeleteEventParticipant />} />




        </Routes>
    );
}

export default AppRoutes;
