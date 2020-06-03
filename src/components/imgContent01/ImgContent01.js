import React from 'react';
import './img-content01.css';

const ImgContent01 = props => {
  return (
    <div className={`imgcontentwrapper01 ${props.classAdd}`}>
      <div className="description1">
        <h3 className="title05">{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <div className={`description1-img-wrapper ${props.animation}`}>
        <img className="description1-img" alt={props.title} src={props.img} />
      </div>
    </div>
  );
};

export default ImgContent01;
