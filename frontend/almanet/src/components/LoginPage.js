import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost/almanet-api/login.php',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.success) {
        alert("Login successful!");
        const user = response.data.user; // Store user data from the response
        localStorage.setItem("user", JSON.stringify(user)); // Store user data in local storage
        
        // Check if the profile is completed
        if (!user.profile_completed) {
          navigate('/profile'); // Redirect to profile completion page
        } else {
          navigate('/dashboard'); // Redirect to dashboard
        }
      } else {
        alert(`Login failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
