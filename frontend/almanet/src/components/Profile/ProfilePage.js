// src/components/Profile/ProfilePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProfilePage = () => {
  const navigate = useNavigate(); // Create a navigate function
  const [formData, setFormData] = useState({
    user_id: '',
    role: '',
    current_semester: '',
    department: '',
    cgpa: '',
    year_of_graduation: '',
    current_company: '',
    job_title: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/almanet-api/complete_profile.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (data.success) {
        // Update the profile_completed field in the database
        navigate('/dashboard'); // Redirect to the dashboard or another page
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h1>Complete Your Profile</h1>
      <form onSubmit={handleSubmit}>
        {/* Your form fields here, e.g. */}
        <input type="text" name="user_id" onChange={handleChange} placeholder="User ID" required />
        <input type="text" name="role" onChange={handleChange} placeholder="Role" required />
        {/* Additional fields for student or alumni */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfilePage;
