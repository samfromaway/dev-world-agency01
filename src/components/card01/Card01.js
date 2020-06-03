import React from 'react';
import { Link } from 'gatsby';

import './card01.css';

const Card01 = props => {
  return (
    <div className="card01">
      <img src={props.icon} alt={props.title} className="card01-icon" />
      <h3>{props.title}</h3>
      <ul>
        {props.listItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link to={props.buttonPath} className="button">
        {props.buttonText}
      </Link>
      <div className="card01-logos-wrapper">
        <img src={props.logos} alt={props.title} className="card01-logos" />
      </div>
    </div>
  );
};

export default Card01;
