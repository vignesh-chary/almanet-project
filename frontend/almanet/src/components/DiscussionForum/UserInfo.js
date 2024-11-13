// src/components/DiscussionForum/UserInfo.js
import React from 'react';

const UserInfo = ({ userName, time, content }) => {
  return (
    <section className="flex gap-4 items-start text-sm text-stone-500">
      <img loading="lazy" src="profile-image-url" alt="User profile" className="w-16 rounded-full" />
      <div className="flex flex-col">
        <h2 className="text-base font-medium text-stone-900">{userName}</h2>
        <time>{time}</time>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default UserInfo;
