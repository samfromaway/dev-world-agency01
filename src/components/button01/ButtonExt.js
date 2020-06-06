import React from 'react';
import './button.scss';

const Button = props => {
  return (
    <a
      href={props.path}
      target="_blank"
      className={`button ${props.addClasses}`}
    >
      {props.text}
    </a>
  );
};

export default Button;
