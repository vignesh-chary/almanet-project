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
import DashboardPage from './pages/Dashboard';
import ProfilePage from './components/Profile/ProfilePage';
import AdminLayout from './components/AdminLayout'; // Import AdminLayout
import AdminPage from './pages/AdminPage'; // Import AdminPage
import NewsPage from './pages/NewsPage';
import EventsPage from './pages/EventsPage';
import AlumniPage from './pages/AlumniPage';
import MessagingPage from './pages/MessagingPage';
import ReportsPage from './pages/ReportsPage';

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
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <RegistrationPage />
            </Layout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Layout>
              <ForgotPassword />
            </Layout>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <DashboardPage />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <ProfilePage />
            </Layout>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
                <Route path="/" element={<AdminPage />} />
                <Route path="news" element={<NewsPage />} />
                <Route path="alumni" element={<AlumniPage />} />
                <Route path="events" element={<EventsPage />} />
                <Route path="messaging" element={<MessagingPage />} />
                <Route path="reports" element={<ReportsPage />} />
              </Routes>
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
