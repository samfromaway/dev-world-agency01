import React from 'react';
import './contact-us-strip.scss';
import ButtonInt from '../button01/ButtonInt';

const ContactUsStrip = () => {
  return (
    <div className="contact-us-strip">
      <ButtonInt
        path="/contact"
        text="Contact Us Now"
        addClasses="button-light pulse01"
      />
    </div>
  );
};

export default ContactUsStrip;
