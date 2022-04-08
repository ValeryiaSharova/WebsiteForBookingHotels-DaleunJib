import React, { useState } from 'react';

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled >= 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      className={visible ? 'scrollup show-scroll' : 'scrollup'}
      id="scroll-up"
      type="button"
      onClick={scrollToTop}
    >
      <i className="ri-arrow-up-fill scrollup__icon" />
    </button>
  );
};

export default ScrollUp;
