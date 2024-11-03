// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProgramsSection from './components/ProgramsSection';
import DashboardSection from './components/DashboardSection';
import SuccessStories from './components/SuccessStories';
import UpcomingEvents from './components/UpcomingEvents';
import NewsAndUpdates from './components/NewsAndUpdates';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import ForgotPassword from './components/ForgotPassword'; // Assuming ForgotPassword.jsx is in the same directory

// HomePage component to display the main sections
function HomePage() {
  return (
    <main className="px-8">
      <HeroSection />
      <ProgramsSection />
      <DashboardSection />
      <SuccessStories />
      <UpcomingEvents />
      <NewsAndUpdates />
    </main>
  );
}

// Layout component to conditionally render the Header based on the route
function Layout({ children }) {
  const location = useLocation();
  const hideHeaderRoutes = ['/login', '/register']; // Add '/register' to hideHeaderRoutes

  return (
    <div className="bg-white font-sans min-h-screen">
      {/* Only display Header if the current route is not in hideHeaderRoutes */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
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
          {/* Route for HomePage */}
          <Route path="/" element={<HomePage />} />
          {/* Route for LoginPage */}
          <Route path="/login" element={<LoginPage />} />
          {/* Route for RegistrationPage */}
          <Route path="/register" element={<RegistrationPage />} /> 
          {/* Route for ForgotPassword */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
