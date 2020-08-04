import React from 'react';
import './progressBar.scss';

const ProgressBar = props => {
  return (
    <div className="progressBar__wrapper">
      <div className="progressBar" style={{ width: `${20}%` }} />
    </div>
  );
};

export default ProgressBar;
