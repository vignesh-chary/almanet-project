import React from 'react';

function MessageItem({ userName, timestamp, snippet, isUnread, onClick }) {
  return (
    <article
      onClick={onClick}
      className={`cursor-pointer flex justify-between items-center px-4 py-3 mt-2 rounded ${
        isUnread ? 'bg-lime-50 font-semibold' : 'bg-white'
      } hover:bg-gray-200`}
    >
      <div className="flex items-center gap-4">
        <img
          src=""
          alt={`${userName}'s avatar`}
          className="w-10 h-10 rounded-full bg-gray-300"
        />
        <div className="flex flex-col">
          <span className="text-stone-900">{userName}</span>
          <time className="text-xs text-stone-500">{timestamp}</time>
        </div>
      </div>
      <p className="text-stone-700 text-sm max-w-[150px] truncate">{snippet}</p>
    </article>
  );
}

export default MessageItem;
