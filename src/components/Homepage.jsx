import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadArticles, setCategory, setPage } from "../slices/articlesSlice";
import ArticleList from "./ArticleList";
import Pagination from "./Pagination";
import CategoryFilter from "./CategoryFilter";

const Homepage = () => {
  const dispatch = useDispatch();
  const { items, status, category, page } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(loadArticles({ category, page }));
  }, [category, page, dispatch]);

  return (
    <div className="container mx-auto p-4">
      <CategoryFilter />
      {status === "loading" ? (
        <div>Loading...</div>
      ) : status === "failed" ? (
        <div>Error loading articles.</div>
      ) : (
        <ArticleList articles={items} />
      )}
      <Pagination />
    </div>
  );
};

export default Homepage;
