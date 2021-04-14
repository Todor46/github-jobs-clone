import React from "react";

const Pagination = ({ numOfPages, activePage }) => {
  const pages = Array.from(Array(numOfPages).keys());

  return (
    <div className="flex justify-end space-x-3">
      <div className="pagination-btn">
        <span className="material-icons">chevron_left</span>
      </div>
      {pages.map((page) => (
        <div
          key={page}
          className={`pagination-btn ${
            activePage === page.toString() && "active"
          }`}
        >
          {page + 1}
        </div>
      ))}
      <div className="pagination-btn">
        <span className="material-icons">chevron_right</span>
      </div>
    </div>
  );
};

export default Pagination;
