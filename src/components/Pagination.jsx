import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../slices/articlesSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.articles);

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePrevPage}
        className="px-4 py-2 mx-2 bg-gray-300 rounded-lg"
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="px-4 py-2 mx-2">{page}</span>
      <button
        onClick={handleNextPage}
        className="px-4 py-2 mx-2 bg-gray-300 rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
