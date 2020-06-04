import React from 'react';
import './about-box.css';
import Sam from '../../images/Samuel.jpg';
import Tacha from '../../images/tacha.jpg';

const AboutUsBox = props => {
  return (
    <div className="about-us-box">
      <h3 className="about-us-box-title">You'll Contact:</h3>
      <div className="about-us-box-img-wrapper">
        <div className="person-box">
          <img className="about-us-box-img" alt="Logo" src={Sam} />
          <p className="person-box-name">Sam</p>
          <p className="person-box-position">Co-Founder</p>
        </div>
        <div className="person-box">
          <img className="about-us-box-img" alt="Logo" src={Tacha} />
          <p className="person-box-name">Tacha</p>
          <p className="person-box-position">Co-Founder</p>
        </div>
      </div>
      <div className="about-us-box-text">
        <h4>We are looking forward to your message</h4>
        <p>
          Send us a message with your project idea. Don't forget to tell us
          about the goal of your project. Your goal is our main focus.
        </p>
      </div>
    </div>
  );
};

export default AboutUsBox;
