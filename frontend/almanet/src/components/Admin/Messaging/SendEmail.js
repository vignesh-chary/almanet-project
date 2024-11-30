import React, { useState } from "react";

const SendEmail = () => {
  const [emailData, setEmailData] = useState({
    recipient: "",
    subject: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = () => {
    alert(`Email Sent to: ${emailData.recipient}`);
    setEmailData({ recipient: "", subject: "", body: "" }); // Reset the form
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full h-full">
      <h2 className="text-xl font-semibold mb-4">Send Email</h2>
      <div className="space-y-4">
        <input
          type="email"
          name="recipient"
          value={emailData.recipient}
          onChange={handleChange}
          placeholder="Recipient's Email"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          name="subject"
          value={emailData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <textarea
          name="body"
          value={emailData.body}
          onChange={handleChange}
          placeholder="Message Body"
          rows="6"
          className="w-full px-4 py-2 border rounded-lg"
        ></textarea>
        <button
          onClick={handleSendEmail}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default SendEmail;
