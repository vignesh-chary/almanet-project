import React, { useState } from "react";

const GroupChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { sender: "Admin", text: newMessage }]);
      setNewMessage(""); // Clear the input
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full h-full">
      <h2 className="text-xl font-semibold mb-4">Group Chat</h2>
      <div className="h-80 overflow-y-auto border p-4 mb-4 rounded-lg bg-gray-100">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <strong>{msg.sender}:</strong> <span>{msg.text}</span>
            </div>
          ))
        ) : (
          <p>No messages yet. Start the conversation!</p>
        )}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-lg mr-2"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default GroupChat;
