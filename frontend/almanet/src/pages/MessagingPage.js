import React from "react";
import GroupChat from "../components/Admin/Messaging/GroupChat";
import SendEmail from "../components/Admin/Messaging/SendEmail";
import SendMessage from "../components/Admin/Messaging/SendMessage";



const MessagingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Messaging Page</h2>

        {/* Group Chat Section */}
        <section className="mb-12">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Group Chat</h3>
            <GroupChat />
          </div>
        </section>

        {/* Send Email Section */}
        <section className="mb-12">
          <div className="bg-green-100 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Send Email</h3>
            <SendEmail />
          </div>
        </section>

        {/* Send Message Section */}
        <section>
          <div className="bg-purple-100 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Send Message</h3>
            <SendMessage />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MessagingPage;
