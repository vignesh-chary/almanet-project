// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import AuthHeader from './components/AuthHeader/AuthHeader';
import HeroSection from './components/HeroSection';
import ProgramsSection from './components/ProgramsSection';
import SuccessStories from './components/SuccessStories';
import UpcomingEvents from './components/UpcomingEvents';
import NewsAndUpdates from './components/NewsAndUpdates';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import ForgotPassword from './components/ForgotPassword';
import DashboardPage from './components/DashboardPage/DashboardPage'; // Import DashboardPage
import ProfilePage from './components/Profile/ProfilePage'; // Import ProfilePage

// HomePage component to display the main sections
function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-8 mt-8 mb-8">
      <HeroSection />
      <ProgramsSection />
      <SuccessStories />
      <UpcomingEvents />
      <NewsAndUpdates />
    </main>
  );
}

// Layout component to conditionally render the appropriate header based on the route
function Layout({ children }) {
  const location = useLocation();
  const publicRoutesWithoutHeader = ['/login', '/register', '/forgot-password'];
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="bg-white font-sans min-h-screen">
      {/* Display the appropriate header based on the route */}
      {!publicRoutesWithoutHeader.includes(location.pathname) && !isDashboard && <Header />}
      {isDashboard && <AuthHeader />}
      {children}
    </div>
  );
}

// Main App component with Router and Routes setup
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Route for DashboardPage */}
          <Route path="/dashboard" element={<DashboardPage />} />
          
          {/* Route for ProfilePage */}
          <Route path="/profile" element={<ProfilePage />} /> {/* Add this line */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
