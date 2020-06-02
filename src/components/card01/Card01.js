import React from 'react';
import Button01 from '../button01/Button';

import './card01.css';

const Card01 = props => {
  return (
    <div className="card01">
      <h3>{props.title}</h3>
      <ul>
        {props.listItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button01
        text={props.buttonText}
        path={props.buttonPath}
        addClasses={null}
      />
    </div>
  );
};

export default Card01;
