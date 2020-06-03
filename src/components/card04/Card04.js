import React from 'react';
import ButtonInt from '../button01/ButtonInt';

import './card04.css';
import { Link } from 'gatsby';

const InfoCard01 = props => {
  return (
    <Link className="card04" to={props.buttonPath}>
      <img src={props.icon} alt={props.title} className="card04-icon" />
      <h3>{props.title}</h3>
      <ButtonInt text="More" path={props.buttonPath} addClasses={null} />
    </Link>
  );
};

export default InfoCard01;
