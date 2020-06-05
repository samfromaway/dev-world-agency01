import React from 'react';
import './button.scss';

const Button = props => {
  return (
    <a href={props.path} className={`button ${props.addClasses}`}>
      {props.text}
    </a>
  );
};

export default Button;
