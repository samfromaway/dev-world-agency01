import React from 'react';
import './about-us-box.css';
import Sam from '../../images/Samuel.jpg';
import Tacha from '../../images/tacha.jpg';

const AboutUsBox = props => {
  return (
    <div className="about-us-box">
      <div class="about-us-box-img-wrapper">
        <div className="person-box">
          <img class="about-us-box-img" alt="Logo" src={Sam} />
          <p>Sam</p>
        </div>
        <div className="person-box">
          <img class="about-us-box-img" alt="Logo" src={Tacha} />
          <p>Tacha</p>
        </div>
      </div>
      <div class="about-us-box-text">
        <h4>We are looking forward to working with you.</h4>
      </div>
    </div>
  );
};

export default AboutUsBox;
