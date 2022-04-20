/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ jump, next, prev, maxPage, currentPage }) => {
  const pages = [];

  const getStyles = page => `page__numbers ${currentPage === page ? 'active' : ''}`;

  for (let i = 1; i < maxPage + 1; i++) {
    pages.push(
      <li className={getStyles(i)} onClick={() => jump(i)} key={`key${i ** 2}`}>
        {i}
      </li>
    );
  }

  return (
    <div className="pagination-container">
      <ul className="page">
        <li className="page__btn" onClick={() => prev()}>
          <span>
            <i className="ri-arrow-left-s-line" />
          </span>
        </li>
        {pages}
        <li className="page__btn" onClick={() => next()}>
          <span>
            <i className="ri-arrow-right-s-line" />
          </span>
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  jump: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  maxPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
