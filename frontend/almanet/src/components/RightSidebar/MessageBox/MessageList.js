// src/components/Sidebar/MessageBox/MessageList.js
import React from 'react';
import SearchBar from '../../shared/SearchBar';  // Import from shared folder
import MessageItem from './MessageItem';

const messages = [
  { id: 1, userName: 'Alice Johnson', timestamp: '2 mins ago', snippet: 'Hi, can we connect?', isUnread: true },
  { id: 2, userName: 'Bob Smith', timestamp: '5 mins ago', snippet: 'Let’s schedule a call...', isUnread: false },
  { id: 3, userName: 'Charlie Brown', timestamp: '1 hr ago', snippet: 'Can you review my profile?', isUnread: false },
  // Add more messages if needed
];

function MessageList() {
  const handleMessageSearch = (query) => {
    console.log("Searching messages or contacts with query:", query);
    // Implement search functionality specific to messages or contacts
  };

  return (
    <section className="flex flex-col mt-6 min-h-[904px] w-full max-w-[336px] p-4 bg-white shadow rounded-lg">
      <SearchBar
        placeholder="Search messages..."
        onSearch={handleMessageSearch}
        customStyles="mb-4"
      />
      <div className="mt-4">
        {messages.map((message) => (
          <MessageItem key={message.id} {...message} />
        ))}
      </div>
    </section>
  );
}

export default MessageList;
