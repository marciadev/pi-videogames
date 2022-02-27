import React from "react";

export function Pagination({ vgsPerPage, totalVgs, paginate }) {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVgs / vgsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
        {pageNumbers.map((page, index) => (
          <button key={index} className="page-link" onClick={() => paginate(page)}>
            {page}
          </button>
        ))}
    </nav>
  );
}

export default Pagination;
