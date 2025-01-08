import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import EventList from '../components/events/EventList';
import ParticipantList from '../components/participants/ParticipantList';
import LocalList from '../components/Locals/LocalList';
import EventById from '../components/events/EventById';
import ParticipantById from '../components/participants/ParticipantById';
import LocalById from '../components/Locals/LocalById';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='EventList' element={<EventList />} />
            <Route path="/api/Event/Event/:id" element={<EventById />} />
            <Route path='ParticipantList' element={<ParticipantList />} />
            <Route path="/api/Participant/Participant/:id" element={<ParticipantById />} />
            <Route path='LocalList' element={<LocalList />} />
            <Route path='/api/Local/Local/:id' element={<LocalById />} />
        </Routes>
    );
}

export default AppRoutes;
