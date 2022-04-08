/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Accordeon = ({ title, content, categoryProduct, onCategorySelected }) => {
  const [active, setActive] = useState(false);
  const [id, setId] = useState();
  const divRef = useRef();

  useEffect(() => {
    divRef.current.style.height = active ? `${divRef.current.scrollHeight}px` : '0px';
  }, [active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  const handleClick = categoryId => {
    if (id === categoryId) {
      onCategorySelected(undefined);
    } else {
      setId(categoryId);
      onCategorySelected(categoryId);
    }
  };

  return (
    <div className={`questions__item${active ? ' accordion-open' : ''}`}>
      <header className="questions__header" onClick={toggleAccordion}>
        <i className="ri-add-line questions__icon" />
        <h3 className="questions__item-title">{title}</h3>
      </header>

      <div className="questions__content" ref={divRef}>
        <p className="questions__description">{content}</p>
        <div className="container-center">
          {categoryProduct &&
            categoryProduct.map(p => (
              <button
                className="product__find-category"
                key={p._id}
                type="button"
                onClick={() => handleClick(p._id)}
              >
                {p.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

Accordeon.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  categoryProduct: PropTypes.arrayOf(PropTypes.object),
  onCategorySelected: PropTypes.func,
};

Accordeon.defaultProps = {
  categoryProduct: null,
  onCategorySelected: null,
};

export default Accordeon;
