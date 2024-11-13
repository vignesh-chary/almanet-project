// src/components/DiscussionForum/PostComponent.js
import React from 'react';
import UserInfo from './UserInfo';
import PostActions from './PostActions';
import PostInput from './PostInput';

const posts = [
  { id: 1, userName: "User One", time: "2h ago", content: "This is the first post content." },
  { id: 2, userName: "User Two", time: "1h ago", content: "This is the second post content." },
  // Add more posts if needed
];

const PostComponent = () => {
  return (
    <section className="flex flex-col flex-1 shrink basis-0 max-w-[960px] min-h-[904px] min-w-[240px] max-md:max-w-full">
      <header className="px-4 py-3 w-full">
        <PostInput />
      </header>
      <div className="px-4 py-3 w-full bg-white">
        {posts.map((post) => (
          <article key={post.id} className="flex gap-4 mb-6">
            <UserInfo userName={post.userName} time={post.time} content={post.content} />
            <PostActions />
          </article>
        ))}
      </div>
    </section>
  );
};

export default PostComponent;
