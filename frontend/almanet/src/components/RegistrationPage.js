import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegistrationPage = () => {
  const userTypes = ['Student', 'Alumni'];
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    rollNumber: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost/almanet-api/register.php', {
        full_name: formData.fullName,
        email: formData.email,
        roll_number: formData.rollNumber,
        password: formData.password,
        role: formData.role
      });
      console.log(response.data);

      if (response.data.success) {
        alert("Registration successful!");
      } else {
        alert(`Registration failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="max-w-md w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <input
          type="text"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          placeholder="Roll Number"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Role:</label>
          <div className="flex gap-4">
            {userTypes.map((type, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value={type}
                  checked={formData.role === type}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Register
        </button>

        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500 hover:underline">Already registered? Login here</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
