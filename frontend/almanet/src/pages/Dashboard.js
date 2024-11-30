// src/components/DashboardPage/DashboardPage.js
import React from 'react';
// import AuthHeader from '../AuthHeader/AuthHeader';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import PostComponent from '../components/DiscussionForum/PostComponent';
import MentorshipStatus from '../components/RightSidebar/MentorshipStatus';
import MessageList from '../components/RightSidebar/MessageBox/MessageList';



function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      {/* <AuthHeader /> */}

      {/* Main Content Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-1/4 max-w-xs bg-white p-4 border-r border-gray-200">
          <LeftSidebar />
        </aside>

        {/* Center Content - Discussion Forum */}
        <main className="flex-1 p-6 bg-white border-r border-gray-200">
          <PostComponent />
        </main>

        {/* Right Sidebar */}
        <aside className="w-1/4 max-w-xs bg-white p-4">
          <MentorshipStatus />
          <MessageList />
        </aside>
      </div>
    </div>
  );
}

export default DashboardPage;
