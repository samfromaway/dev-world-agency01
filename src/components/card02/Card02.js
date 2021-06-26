import React from 'react';
import Star from '../../images/star.svg';

import './card02.scss';

const Card02 = props => {
  return (
    <div className={`card02 ${props.classAdd}`}>
      <div className="card02-img-wrapper">
        <img src={props.img} alt={props.title} />
      </div>
      {props.hasStars && (
        <div className="review">
          <div className="star-review-wrapper">
            {[1, 2, 3, 4, 5].map(e => (
              <img key={e} src={Star} alt="review" className="review-star" />
            ))}
          </div>
        </div>
      )}
      <div className="card02-info">
        <h3>{props.title}</h3>
        <h4 className="title06">{props.subTitle}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Card02;
