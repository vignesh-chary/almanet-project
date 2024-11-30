import React, { useState } from "react";

const VerifyAlumni = ({ alumni, onVerify }) => {
    const [status, setStatus] = useState(alumni.isVerified ? "Verified" : "Not Verified");

    const handleVerify = () => {
        setStatus("Verified");
        onVerify(alumni.id);
    };

    return (
        <div className="p-4 border rounded-md shadow-sm">
            <h3 className="text-lg font-semibold">{alumni.name}</h3>
            <p className="text-sm text-gray-600">{alumni.email}</p>
            <p className="text-sm text-gray-600">Status: {status}</p>
            {!alumni.isVerified && (
                <button
                    className="mt-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                    onClick={handleVerify}
                >
                    Verify Alumni
                </button>
            )}
        </div>
    );
};

export default VerifyAlumni;
