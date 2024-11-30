import React from "react";

const EventItem = ({ event }) => {
    return (
        <li className="p-4 border rounded-md shadow-sm hover:shadow-lg">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-600">{event.date}</p>
            <p className="text-gray-800">{event.description}</p>
        </li>
    );
};

export default EventItem;
