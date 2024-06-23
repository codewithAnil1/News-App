import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticleDetail = () => {
  const { url } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticleDetail = async () => {
      try {
        const response = await axios.get(decodeURIComponent(url));
        setArticle(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching article details:", error);
        setLoading(false);
      }
    };

    fetchArticleDetail();
  }, [url]);

  if (loading) return <div>Loading...</div>;
  if (!article) return <div>Error loading article.</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">{article.title}</h1>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-auto mb-4"
        />
      )}
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
