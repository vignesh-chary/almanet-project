// src/components/Profile/StudentProfileForm.js

import React, { useState } from 'react';
import axios from 'axios';

const StudentProfileForm = ({ onComplete }) => { // Receive onComplete prop
  const [semester, setSemester] = useState('');
  const [department, setDepartment] = useState('');
  const [cgpa, setCgpa] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await axios.post(
        'http://localhost/almanet-api/complete_profile.php',
        {
          userId: user.id,
          role: "Student",
          semester,
          department,
          cgpa,
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
    <form onSubmit={handleSubmit} className="student-profile-form">
      <h3>Student Profile</h3>
      <label>Current Semester:</label>
      <input
        type="number"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
        required
      />

      <label>Department:</label>
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />

      <label>CGPA:</label>
      <input
        type="number"
        step="0.01"
        value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}
        required
      />

      <button type="submit">Save Profile</button>
    </form>
  );
};

export default StudentProfileForm;
