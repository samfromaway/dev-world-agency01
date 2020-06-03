import React from 'react';
import ButtonInt from '../button01/ButtonInt';

import './card04.css';

const InfoCard01 = props => {
  return (
    <div className="card01">
      <img src={props.icon} alt={props.title} className="card01-icon" />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <ButtonInt
        text={props.buttonText}
        path={props.buttonPath}
        addClasses={null}
      />
    </div>
  );
};

export default InfoCard01;
