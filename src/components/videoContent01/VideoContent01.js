import React from 'react';
import './video-content01.scss';

const VideoConent01 = props => {
  let textWithLineBreak = props.desc
    .split('\n')
    .map((item, i) => <p key={i}>{item}</p>);

  return (
    <div className={`videocontentwrapper01 ${props.classAdd}`}>
      <div className="video-description1">
        <h3 className="title05">{props.title}</h3>
        <div>{textWithLineBreak}</div>
      </div>
      <div className={`description1-video-wrapper ${props.animation}`}>
        <iframe
          className="video-content01-video"
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
