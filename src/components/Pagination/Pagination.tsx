import React from 'react';
import './pagination.scss';

interface Pagination {
  count: number;
  onClick: (currentPage: number) => void;
  currentPage: number;
  cardsPerPage: number;
}

const Pagination = ({ count, onClick, currentPage, cardsPerPage }: Pagination) => {
  const cardsCountOnPage = count / cardsPerPage;
  const paginationItems = [...Array(Math.ceil(cardsCountOnPage))].map((e, i) => i + 1);

  return (
    <div className='pagination'>
      <div
        className='pagination__nav'
        onClick={() => {
          currentPage > 1 ? onClick(--currentPage) : null;
        }}
      >
        {'<'}
      </div>
      {paginationItems.map((item) => (
        <div
          className={`pagination__item ${currentPage === item ? 'active' : ''}`}
          onClick={() => onClick(item)}
          key={item + item}
        >
          {item}
        </div>
      ))}
      <div
        className='pagination__nav'
        onClick={() => {
          currentPage < paginationItems.length ? onClick(++currentPage) : null;
        }}
      >
        {'>'}
      </div>
    </div>
  );
};

export default Pagination;
