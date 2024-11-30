import React, { useState } from "react";
import NewsForm from "../components/Admin/News/NewsForm";
import NewsList from "../components/Admin/News/NewsList";

const NewsPage = () => {
  const [news, setNews] = useState([
    { id: 1, title: "Welcome to AlumniConnect!", content: "Stay updated with the latest news." },
    { id: 2, title: "Upcoming Events", content: "Join us for the alumni reunion this weekend!" },
  ]);

  // Function to add new news item
  const handleAddNews = (newNews) => {
    setNews((prevNews) => [...prevNews, { id: Date.now(), ...newNews }]);
  };

  return (
    <div className="news-page p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">News Management</h1>
      </header>
      <main className="flex flex-col gap-8">
        {/* News Creation Form */}
        <section>
          <h2 className="text-2xl font-semibold">Post News</h2>
          <NewsForm addNews={handleAddNews} />
        </section>

        {/* News List Section */}
        <section>
          <h2 className="text-2xl font-semibold">Existing News</h2>
          <NewsList news={news} />
        </section>
      </main>
    </div>
  );
};

export default NewsPage;
