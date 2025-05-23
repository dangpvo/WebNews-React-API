import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {articles.map((newsItem, index) => {
        return (
          <NewsItem
            key={`news ${index}`}
            title={newsItem.title}
            description={newsItem.description}
            src={newsItem.urlToImage}
            url={newsItem.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
