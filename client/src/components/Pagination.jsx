import React from "react";

export const Pagination = ({ clientsPerPage, totalClients, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalClients / clientsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="ml-4">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item .bg-dark">
            <a onClick={() => paginate(number)} href="!#" className="page-link bg-dark text-light">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
