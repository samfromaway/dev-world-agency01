import React from 'react';
import './progressBar.scss';

const ProgressBar = props => {
  return (
    <div className="progressBar__wrapper">
      <div className="progressBar" style={{ width: `${props.step}0%` }} />
    </div>
  );
};

export default ProgressBar;
