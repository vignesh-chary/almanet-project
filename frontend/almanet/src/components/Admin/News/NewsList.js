import React from "react";
import NewsItem from "./NewsItem";

const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((item) => (
        <NewsItem key={item.id} news={item} />
      ))}
    </div>
  );
};

export default NewsList;
