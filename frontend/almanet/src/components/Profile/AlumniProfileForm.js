// src/components/Profile/AlumniProfileForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AlumniProfileForm = ({ onComplete }) => { // Receive onComplete prop
  const [graduationYear, setGraduationYear] = useState('');
  const [currentCompany, setCurrentCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await axios.post(
        'http://localhost/almanet-api/complete_profile.php',
        {
          userId: user.id,
          role: "Alumni",
          graduationYear,
          currentCompany,
          jobTitle,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      alert(response.data.message || "Profile updated successfully!");
      if (response.data.success) {
        onComplete(); // Call the onComplete function for redirection
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="alumni-profile-form">
      <h3>Alumni Profile</h3>
      <label>Year of Graduation:</label>
      <input
        type="number"
        value={graduationYear}
        onChange={(e) => setGraduationYear(e.target.value)}
        required
      />

      <label>Current Company:</label>
      <input
        type="text"
        value={currentCompany}
        onChange={(e) => setCurrentCompany(e.target.value)}
        required
      />

      <label>Job Title:</label>
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        required
      />

      <button type="submit">Save Profile</button>
    </form>
  );
};

export default AlumniProfileForm;
