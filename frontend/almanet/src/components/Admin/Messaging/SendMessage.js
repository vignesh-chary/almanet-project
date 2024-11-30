import React, { useState } from "react";

const SendMessage = () => {
  const [messageData, setMessageData] = useState({
    recipient: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = () => {
    alert(`Message Sent to: ${messageData.recipient}`);
    setMessageData({ recipient: "", message: "" }); // Reset the form
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full h-full">
      <h2 className="text-xl font-semibold mb-4">Send Message</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="recipient"
          value={messageData.recipient}
          onChange={handleChange}
          placeholder="Recipient's Username"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <textarea
          name="message"
          value={messageData.message}
          onChange={handleChange}
          placeholder="Type your message..."
          rows="6"
          className="w-full px-4 py-2 border rounded-lg"
        ></textarea>
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
