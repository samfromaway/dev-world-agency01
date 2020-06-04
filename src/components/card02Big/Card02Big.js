import React from 'react';

import './card02-big.css';

const Card02 = props => {
  return (
    <div className={`card02-big ${props.classAdd}`}>
      <div className="card02-big-img-wrapper">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="card02-big-info">
        <h3>{props.title}</h3>
        <h4 className="title06">{props.subTitle}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Card02;
