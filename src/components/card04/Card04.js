import React from 'react';

import './card04.scss';

const Card04 = props => {
  return (
    <div
      className={`card04 ${props.activeStyle} `}
      role="button"
      tabIndex={0}
      onClick={() => props.handleSmallCardClick(props.value)}
      onKeyDown={() => props.handleSmallCardClick(props.value)}
    >
      <img src={props.icon} alt={props.title} className="card04-icon" />
      <h3>{props.title}</h3>
      <p className="button">Choose</p>
    </div>
  );
};

export default Card04;
