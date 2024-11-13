// src/components/DiscussionForum/PostInput.js
import React from 'react';

const PostInput = () => {
  return (
    <form className="flex flex-col bg-white rounded-lg shadow p-4">
      <textarea placeholder="Share your thoughts or ask a question..." className="w-full border p-2 rounded mb-4"></textarea>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button type="button" aria-label="Attach image">
            <img src="image-icon-url" alt="Attach image" className="w-6 h-6" />
          </button>
          <button type="button" aria-label="Attach video">
            <img src="video-icon-url" alt="Attach video" className="w-6 h-6" />
          </button>
          <button type="button" aria-label="Attach file">
            <img src="file-icon-url" alt="Attach file" className="w-6 h-6" />
          </button>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Post</button>
      </div>
    </form>
  );
};

export default PostInput;
