import React from "react";

const Pagination = ({ numOfPages, activePage, handleFiltering }) => {
  const pages = Array.from(Array(numOfPages).keys());

  return (
    <div className="flex justify-end space-x-3">
      <button
        type="button"
        className="pagination-btn"
        onClick={() => handleFiltering(activePage - 1, "page")}
        disabled={activePage === 0}
      >
        <span className="material-icons">chevron_left</span>
      </button>
      {pages.map((page) => (
        <button
          type="button"
          key={page}
          className={`pagination-btn ${activePage === page && "active"}`}
          onClick={() => handleFiltering(page, "page")}
        >
          {page + 1}
        </button>
      ))}
      <button
        type="button"
        className="pagination-btn"
        onClick={() => handleFiltering(activePage + 1, "page")}
        disabled={activePage === numOfPages - 1}
      >
        <span className="material-icons">chevron_right</span>
      </button>
    </div>
  );
};

export default Pagination;
