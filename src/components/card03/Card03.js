import React from 'react';
import ButtonInt from '../button01/ButtonInt';

import './card03.css';

const Card02 = props => {
  return (
    <div className="card03">
      <div className="hoveranim01p">
        <a href={props.link} target="blank">
          <img
            src={props.img}
            alt={props.title}
            className="card03-img hoveranim01c"
          />
        </a>
      </div>
      <img src={props.icons} alt={props.title} className="card03-icons" />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <ButtonInt text="More" path={props.link} addClasses={null} />
    </div>
  );
};

export default Card02;
