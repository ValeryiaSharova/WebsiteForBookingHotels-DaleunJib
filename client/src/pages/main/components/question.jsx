import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Question = ({ item }) => {
  const [active, setActive] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    divRef.current.style.height = active ? `${divRef.current.scrollHeight}px` : '0px';
  }, [active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className={`questions__item${active ? ' accordion-open' : ''}`}>
      <header className="questions__header" onClick={toggleAccordion}>
        <i className="ri-add-line questions__icon" />
        <h3 className="questions__item-title">{item.question}</h3>
      </header>

      <div className="questions__content" ref={divRef}>
        <p className="questions__description">{item.answer}</p>
      </div>
    </div>
  );
};

Question.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Question;
