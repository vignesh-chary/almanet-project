import React, { useState } from "react";
import AlumniList from "../components/Admin/Alumni/AlumniList";
import AlumniDetails from "../components/Admin/Alumni/AlumniDetails";
import VerifyAlumni from "../components/Admin/Alumni/verifyAlumni";

const AlumniPage = () => {
    const [alumniList, setAlumniList] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
            graduationYear: 2015,
            jobTitle: "Software Engineer",
            isVerified: false,
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "janesmith@example.com",
            graduationYear: 2018,
            jobTitle: "Product Manager",
            isVerified: true,
        },
    ]);
    const [selectedAlumni, setSelectedAlumni] = useState(null);

    const handleViewDetails = (alumni) => {
        setSelectedAlumni(alumni);
    };

    const handleVerify = (id) => {
        setAlumniList((prevList) =>
            prevList.map((alumni) =>
                alumni.id === id ? { ...alumni, isVerified: true } : alumni
            )
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-2xl font-bold">Manage Alumni</h1>
            </header>
            <main className="flex flex-col gap-8 p-4">
                <AlumniList alumniList={alumniList} onViewDetails={handleViewDetails} />
                {selectedAlumni && <AlumniDetails alumni={selectedAlumni} />}
                <h2 className="text-xl font-bold">Verify Alumni</h2>
                {alumniList
                    .filter((alumni) => !alumni.isVerified)
                    .map((alumni) => (
                        <VerifyAlumni
                            key={alumni.id}
                            alumni={alumni}
                            onVerify={handleVerify}
                        />
                    ))}
            </main>
        </div>
    );
};

export default AlumniPage;
