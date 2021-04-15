import React from "react";
import { usePagination } from "@material-ui/lab";

const Pagination = ({ numOfPages, activePage, handleFiltering }) => {
  const { items } = usePagination({
    count: numOfPages,
    page: activePage,
    onChange: (e, page) => handleFiltering(page, "page"),
  });

  return (
    <ul className="flex justify-end space-x-3">
      {items.map(({ page, type, selected, ...item }, index) => {
        let children = null;

        if (type === "start-ellipsis" || type === "end-ellipsis") {
          children = "…";
        } else if (type === "page") {
          children = (
            <button
              type="button"
              className={`pagination-btn ${selected ? "active" : ""}`}
              {...item}
            >
              {page}
            </button>
          );
        } else if (type === "previous") {
          children = (
            <button className="pagination-btn" type="button" {...item}>
              <span className="material-icons">chevron_left</span>
            </button>
          );
        } else if (type === "next") {
          children = (
            <button className="pagination-btn" type="button" {...item}>
              <span className="material-icons">chevron_right</span>
            </button>
          );
        }

        return <li key={index}>{children}</li>;
      })}
    </ul>
  );
};

export default Pagination;
