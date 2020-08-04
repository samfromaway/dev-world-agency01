import React from 'react';
import './contact-us-strip.scss';
import ButtonInt from '../button01/ButtonInt';

const ContactUsStrip = () => {
  return (
    <div className="contact-us-strip">
      <ButtonInt
        path="/quiz"
        text="FREE QUIZ"
        addClasses="button-light pulse01"
      />
    </div>
  );
};

export default ContactUsStrip;
