import React, { useState } from "react";
import EventForm from "../components/Admin/Events/EventForm";
import EventList from "../components/Admin/Events/EventList";

const EventsPage = () => {
    const [events, setEvents] = useState([]);

    const handleAddEvent = (newEvent) => {
        setEvents((prevEvents) => [...prevEvents, { ...newEvent, id: Date.now() }]);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-2xl font-bold">Manage Events</h1>
            </header>
            <main className="flex flex-col gap-8 p-4">
                <EventForm onSubmit={handleAddEvent} />
                <EventList events={events} />
            </main>
        </div>
    );
};

export default EventsPage;
