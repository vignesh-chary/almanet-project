// src/components/Sidebar/MessageBox/MessageItem.js
import React from 'react';

function MessageItem({ userName, timestamp, snippet, isUnread }) {
  return (
    <article className={`flex justify-between items-center px-4 py-3 mt-2 ${isUnread ? 'bg-lime-50 font-semibold' : 'bg-white'}`}>
      <div className="flex items-center gap-4">
        <img
          loading="lazy"
          src=""
          alt={`${userName}'s avatar`}
          className="w-10 h-10 rounded-full"
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
