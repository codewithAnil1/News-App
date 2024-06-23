import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../slices/articlesSlice";

const categories = [
  "general",
  "business",
  "technology",
  "entertainment",
  "health",
  "science",
  "sports",
];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.articles);

  const handleCategoryChange = (event) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <div className="mb-4">
      <label htmlFor="category" className="mr-2">
        Filter by category:
      </label>
      <select
        id="category"
        value={category}
        onChange={handleCategoryChange}
        className="border rounded p-2"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
