import React from 'react';
import Button01 from '../button01/Button';
import SwissFlag from '../../images/Swiss-Flag.svg';
import './sticky-bar.css';

const StickyBar = pros => {
  return (
    <section className="sticky-bar">
      <div className="swiss-info">
        <img src={SwissFlag} alt="Swiss-Flag" className="swiss-flag" />
        <h5 className="swiss-title">Swiss Quality</h5>
      </div>
      <h3 className="title01">DEV WORLD DIGITAL AGENCY</h3>
      <Button01
        text="CONTACT"
        path="/contact"
        addClasses="pulse01 cta-button"
      />
    </section>
  );
};

export default StickyBar;
