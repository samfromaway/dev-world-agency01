import React from 'react';
import './progressBar.scss';

const ProgressBar = props => {
  const progressStyle = () => {
    switch (props.step) {
      case 1:
        return 10;
      case 2:
        return 50;
      case 3:
        return 94;
    }
  };

  return (
    <div className="progressBar__wrapper">
      <div className="progressBar" style={{ width: `${progressStyle()}%` }} />
    </div>
  );
};

export default ProgressBar;
