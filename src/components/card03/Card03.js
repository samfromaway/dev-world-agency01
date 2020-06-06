import React from 'react';
import ButtonExt from '../button01/ButtonExt';

import './card03.scss';

const Card03 = props => {
  return (
    <div className="card03">
      <div className="card03-img-wrapper hoveranim01p">
        <a href={props.link} target="_blank">
          <img
            src={props.img}
            alt={props.title}
            className="card03-img hoveranim01c"
          />
        </a>
      </div>
      <div className="card03-info">
        <img src={props.icons} alt={props.title} className="card03-icons" />
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <ButtonExt text="More" path={props.link} addClasses={null} />
      </div>
    </div>
  );
};

export default Card03;
