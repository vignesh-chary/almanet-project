import React, { useState } from 'react';
import MessageItem from './MessageItem';
import ChatBox from './ChatBox';
import SearchBar from '../../shared/SearchBar';

const messages = [
  { id: 1, userName: 'Alice Johnson', timestamp: '2 mins ago', snippet: 'Hi, can we connect?', isUnread: true },
  { id: 2, userName: 'Bob Smith', timestamp: '5 mins ago', snippet: 'Let’s schedule a call...', isUnread: false },
  { id: 3, userName: 'Charlie Brown', timestamp: '1 hr ago', snippet: 'Can you review my profile?', isUnread: false },
];

function MessageList() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredMessages = messages.filter(
    (message) =>
      message.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div>
      {/* Collapsible Button */}
      <button
        onClick={toggleCollapse}
        className={`fixed bottom-4 right-4 ${
          isCollapsed ? 'w-16 h-16' : 'w-[80px] h-[40px]'
        } bg-blue-500 text-white p-3 rounded-full shadow hover:bg-blue-600 transition-all`}
      >
        {isCollapsed ? '+' : 'Close'}
      </button>

      {/* Chat Widget */}
      {!isCollapsed && (
        <section className="fixed bottom-20 right-4 w-[400px] h-[600px] bg-white shadow-lg rounded-lg p-4">
          <SearchBar
            placeholder="Search messages..."
            onSearch={setSearchQuery}
          />
          <div className="mt-4 max-h-[500px] overflow-y-auto">
            {filteredMessages.map((message) => (
              <MessageItem
                key={message.id}
                {...message}
                onClick={() => setSelectedUser(message)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Chat Box */}
      <ChatBox
        selectedUser={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
}

export default MessageList;
