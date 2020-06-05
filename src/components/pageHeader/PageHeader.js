import React from 'react';
import './page-header.scss';

const AboutHero = props => {
  return (
    <div className="page-header">
      <div className="">
        <h1 className="title11">{props.title}</h1>
      </div>
    </div>
  );
};

export default AboutHero;
