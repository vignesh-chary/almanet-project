import React, { useState } from "react";
import styles from "./NewsForm.module.css";

const NewsForm = ({ addNews }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNews({ title, content });
    setTitle(""); // Clear the form
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.formContainer} p-4 flex flex-col gap-4`}>
      <div>
        <label htmlFor="title" className="font-bold">Title</label>
        <input
          type="text"
          id="title"
          className="form-input mt-1 block w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength="150"
          placeholder="Enter news title"
        />
      </div>
      <div>
        <label htmlFor="content" className="font-bold">Content</label>
        <textarea
          id="content"
          className="form-input mt-1 block w-full"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your content here"
        ></textarea>
      </div>
      <button type="submit" className="btn-primary">Submit News</button>
    </form>
  );
};

export default NewsForm;
