import React from 'react';

import './card02.css';

const Card02 = props => {
  return (
    <div className="card02">
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <h4 className="title06">{props.subTitle}</h4>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card02;
