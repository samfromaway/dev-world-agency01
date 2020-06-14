import React from 'react';
import './img-content01.scss';

const ImgContent01 = props => {
  return (
    <div className={`img-content ${props.classAdd}`}>
      <div className="img-content__text">
        <h3 className="title05">{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <img
        className={`img-content__img ${props.animation}`}
        alt={props.title}
        src={props.img}
      />
    </div>
  );
};

export default ImgContent01;
