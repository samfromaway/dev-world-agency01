import React from 'react';
import { Link } from 'gatsby';

import './services-card.scss';

const ServicesCard = props => {
  return (
    <div className="services-card">
      <img src={props.icon} alt={props.title} className="services-card__icon" />
      <h3>{props.title}</h3>
      <ul>
        {props.listItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link to={props.buttonPath} className="button">
        {props.buttonText}
      </Link>
      <div className="services-card__logos-wrapper">
        <img
          src={props.logos}
          alt={props.title}
          className="services-card__logos"
        />
      </div>
    </div>
  );
};

export default ServicesCard;
