import React from 'react';
import './button.css';

const Button = props => {
  return (
    <a href={props.path} className={`button ${props.addClasses}`}>
      {props.text}
    </a>
  );
};

export default Button;
