import React from "react";
import EventItem from "./EventItem";

const EventList = ({ events }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Event List</h2>
            <ul className="space-y-4">
                {events.map((event) => (
                    <EventItem key={event.id} event={event} />
                ))}
            </ul>
        </div>
    );
};

export default EventList;
