import React from 'react';
import './contact-us-message-box.scss';
import Sam from '../../images/Samuel.jpg';
import Tacha from '../../images/tacha.jpg';

const ContactUsMessageBox = props => {
  return (
    <div className={`about-us-box ${props.stylesAddText}`}>
      <h3 className={`about-us-box__title ${props.stylesAddTitle}`}>
        Contact Us:
      </h3>
      <div className="person-box-wrapper">
        <div className="person-box">
          <img className="person-box__img" alt="Logo" src={Sam} />
          <p className="person-box__name">Sam</p>
          <p className="person-box__position">Co-Founder</p>
        </div>
        <div className="person-box">
          <img className="person-box__img" alt="Logo" src={Tacha} />
          <p className="person-box__name">Tacha</p>
          <p className="person-box__position">Co-Founder</p>
        </div>
      </div>
      <div className="about-us-box__text">
        <h4>We are looking forward to your message</h4>
        <p>
          Send us a message with your project idea. Don't forget to tell us
          about the goal of your project. Your goal is our main focus.
        </p>
      </div>
    </div>
  );
};

export default ContactUsMessageBox;
