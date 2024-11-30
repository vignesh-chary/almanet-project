import React from 'react';

function ChatBox({ selectedUser, onClose }) {
  if (!selectedUser) return null;

  return (
    <div className="absolute bottom-24 right-96 w-[400px] h-[500px] bg-white shadow-lg rounded-lg p-4">
      <header className="flex justify-between items-center mb-4 border-b pb-2">
        <h2 className="text-lg font-bold">{selectedUser.userName}</h2>
        <button onClick={onClose} className="text-red-500 hover:text-red-700">
          Close
        </button>
      </header>
      <div className="flex flex-col space-y-3 h-full">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-2 rounded">
          <p className="text-sm text-gray-700">[Conversation history goes here]</p>
        </div>
        {/* Message Input */}
        <div className="mt-2">
          <textarea
            className="w-full border rounded p-2"
            placeholder="Type your message..."
          />
          <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
