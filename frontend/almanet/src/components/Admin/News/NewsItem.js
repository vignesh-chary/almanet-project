import React from "react";

const NewsItem = ({ news }) => {
  return (
    <div className="news-item p-4 bg-gray-100 rounded-lg">
      <h3 className="font-bold text-lg">{news.title}</h3>
      <p className="text-sm text-gray-700">{news.content}</p>
    </div>
  );
};

export default NewsItem;
