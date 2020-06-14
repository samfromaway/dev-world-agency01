import React from 'react';
import './video-content01.scss';

const VideoConent01 = props => {
  let textWithLineBreak = props.desc
    .split('\n')
    .map((item, i) => <p key={i}>{item}</p>);

  return (
    <div className={`video-content ${props.classAdd}`}>
      <div className="video-content__text">
        <h3 className="title05">{props.title}</h3>
        <div>{textWithLineBreak}</div>
      </div>
      <div className="video-content__video-wrapper">
        <iframe
          title="video-landing-page01"
          className="video-content__video"
          src={props.videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoConent01;
