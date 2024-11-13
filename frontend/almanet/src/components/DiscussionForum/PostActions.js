// src/components/DiscussionForum/PostActions.js
import React from 'react';

const PostActions = () => {
  return (
    <nav className="flex gap-3">
      <button className="text-blue-500">Like</button>
      <button className="text-blue-500">Comment</button>
      <button className="text-blue-500">Share</button>
    </nav>
  );
};

export default PostActions;
