import React from 'react';
import { Link } from 'gatsby';
import './button.css';

const Button = props => {
  return (
    <Link to={props.path} className={`button ${props.addClasses}`}>
      {props.text}
    </Link>
  );
};

export default Button;
