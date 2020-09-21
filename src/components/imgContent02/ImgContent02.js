import React from 'react';
import './img-content02.scss';

const ImgContent02 = props => {
  return (
    <div className={`img-content02 ${props.classAdd}`}>
      <img
        className={`img-content02__img ${props.animation}`}
        alt={props.title}
        src={props.img}
      />
      <div className="img-content02__text">
        <h3 className="">{props.title}</h3>
        <p>
          We are Natacha and Sam and we moved from Switzerland to Colombia in
          2017. <br /> <br />
          We created Dev World Agency with the over-arching mission to combine
          the best of many worlds. We want to combine the best traits of
          Switzerland, which are precision, attention to detail and efficiency,
          with the creativity and the flair of Latin America to create amazing
          things. <br /> <br />
          Furthermore we want to connect our combined 15 years of sales
          experience in Switzerland and Colombia, with our technical knowledge
          in regards to web development, online marketing and design. <br />
          <br />
          We focus on sales first, because we know this is why clients work with
          us, they want to sell more. That's why we are able to stay grounded
          and not lose ourselves in technical details. We work with passion and
          with your goal in mind, so our projects are fun and generate real
          results.
        </p>
      </div>
    </div>
  );
};

export default ImgContent02;
