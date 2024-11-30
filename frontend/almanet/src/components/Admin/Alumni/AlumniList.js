import React from "react";

const AlumniList = ({ alumniList, onViewDetails }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Alumni List</h2>
            <ul className="space-y-4">
                {alumniList.map((alumni) => (
                    <li
                        key={alumni.id}
                        className="p-4 border rounded-md shadow-sm flex justify-between items-center"
                    >
                        <div>
                            <h3 className="text-lg font-semibold">{alumni.name}</h3>
                            <p className="text-sm text-gray-600">{alumni.email}</p>
                        </div>
                        <button
                            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                            onClick={() => onViewDetails(alumni)}
                        >
                            View Details
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlumniList;
