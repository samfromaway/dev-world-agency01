import React from 'react';
import ButtonInt from '../button01/ButtonInt';
import './sticky-bar.scss';

const StickyBar = () => {
  return (
    <div className="sticky-bar">
      <h3 className="title01">DEV WORLD DIGITAL AGENCY</h3>
      <ButtonInt
        text="FREE QUIZ"
        path="/quiz"
        addClasses="sticky-bar__button pulse01"
      />
    </div>
  );
};

export default StickyBar;
