import React from 'react';
import './pagination.scss';

interface Pagination {
  count: number;
  onClick: (currentPage: number) => void;
  currentPage: number;
  cardsPerPage: number;
}

const Pagination = ({
  count,
  onClick,
  currentPage,
  cardsPerPage
}: Pagination) => {
  const cardsCountOnPage = count / cardsPerPage;
  const paginationItems = [...Array(Math.ceil(cardsCountOnPage))].map(
    (e, i) => i + 1
  );

  return (
    <div className="pagination">
      {paginationItems.map((item) => (
        <div
          className={`pagination__item ${currentPage === item ? 'active' : ''}`}
          onClick={() => onClick(item)}
          key={item + item}
          onKeyDown={() => ''}
          tabIndex={0}
          role="button"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
