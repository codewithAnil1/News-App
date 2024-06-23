import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/news.avif";
const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <div key={article.url} className="border rounded-lg p-4">
          <img
            src={article.urlToImage ? article.urlToImage : image}
            alt={article.title}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          <p>{article.description}</p>
          <Link to={article.url} className="text-blue-500 mt-2 inline-block">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
