import React from 'react';
import './footer.css';
import socialMedia from '../../data/socialMedia';
import SwissFlag from '../../images/Swiss-Flag.svg';
import USAFlag from '../../images/usa.png';
import FranceFlag from '../../images/France.png';
import GermanyFlag from '../../images/Germany.jpg';
import SpainFlag from '../../images/Spain.png';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-column01">
          <h3 className="footer-title">Social Media</h3>
          <div className="footer-social">
            {socialMedia.map(element => (
              <a href={element.link} key={element.name}>
                <img
                  className="footer-social-media-icon"
                  src={element.icon}
                  alt={element.name}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-column02">
          <h3 className="footer-title">Languages</h3>
          <h4 className="footer-sub-title">We Speak</h4>
          <div className="country-info-wrapper">
            <div className="country-info">
              <img src={USAFlag} alt="Swiss-Flag" className="country-flag" />
              <h5 className="country-title">English</h5>
            </div>
            <div className="country-info">
              <img
                src={GermanyFlag}
                alt="Swiss-Flag"
                className="country-flag"
              />
              <h5 className="country-title">German</h5>
            </div>
            <div className="country-info">
              <img src={SwissFlag} alt="Swiss-Flag" className="country-flag" />
              <h5 className="country-title">Swiss German</h5>
            </div>
            <div className="country-info">
              <img src={SpainFlag} alt="Swiss-Flag" className="country-flag" />
              <h5 className="country-title">Spanish</h5>
            </div>
            <div className="country-info">
              <img src={FranceFlag} alt="Swiss-Flag" className="country-flag" />
              <h5 className="country-title">French</h5>
            </div>
          </div>
        </div>
        <div className="footer-column03">
          <h3 className="footer-title">Contact</h3>
          <a className="footer-link" href="mailto:contact@dev-world.info">
            <h4>contact@dev-world.info</h4>
          </a>
        </div>
        <div className="footer-privacy">
          <a className="footer-privacy-text" href="" target="_blank">
            <h4>Terms and Conditions</h4>
          </a>
          <h4 className="footer-privacy-text">
            Dev World © {new Date().getFullYear()}
          </h4>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
