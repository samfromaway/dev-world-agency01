import React from 'react';
import './about-us-box.css';
import Sam from '../../images/Samuel.jpg';
import Tacha from '../../images/tacha.jpg';

const AboutUsBox = props => {
  return (
    <div className="about-us-box">
      <h3 className="about-us-box-title">You'll Contact:</h3>
      <div class="about-us-box-img-wrapper">
        <div className="person-box">
          <img class="about-us-box-img" alt="Logo" src={Sam} />
          <p className="person-box-name">Sam</p>
          <p className="person-box-position">Co-Founder</p>
        </div>
        <div className="person-box">
          <img class="about-us-box-img" alt="Logo" src={Tacha} />
          <p className="person-box-name">Tacha</p>
          <p className="person-box-position">Co-Founder</p>
        </div>
      </div>
      <h4>We are looking forward to your message.</h4>
      <div class="about-us-box-text">
        <p>
          Send us a message with your project idea. Don't forget to tell us
          about the goal of your project. Your goal is our main focus.
        </p>
      </div>
    </div>
  );
};

export default AboutUsBox;
