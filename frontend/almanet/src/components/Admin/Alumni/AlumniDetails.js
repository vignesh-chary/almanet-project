import React from "react";

const AlumniDetails = ({ alumni }) => {
    return (
        <div className="p-4 border rounded-md shadow-sm">
            <h3 className="text-xl font-bold">{alumni.name}</h3>
            <p className="text-gray-700">Email: {alumni.email}</p>
            <p className="text-gray-700">Graduation Year: {alumni.graduationYear}</p>
            <p className="text-gray-700">Current Job: {alumni.jobTitle}</p>
        </div>
    );
};

export default AlumniDetails;
