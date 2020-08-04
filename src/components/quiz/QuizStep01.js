import React, { useState } from 'react';
import New from '../../images/device.svg';
import Edit from '../../images/edit-regular.svg';
import App from '../../images/sitemap.svg';
import Card04 from './../card04/Card04';

const QuizStep01 = ({
  chosenCategory,
  setchosenCategory,
  currentWebsite,
  setCurrentWebsite,
}) => {
  const [card41Style, setCard41Style] = useState('');
  const [card42Style, setCard42Style] = useState('');
  const [card43Style, setCard43Style] = useState('');

  const handleSmallCardClick = category => {
    setchosenCategory(category);
    activeStyle(category);
  };

  const activeStyle = category => {
    switch (category) {
      case 'newSite':
        setCard41Style('card04-active');
        setCard42Style('');
        setCard43Style('');
        break;
      case 'updateSite':
        setCard41Style('');
        setCard42Style('card04-active');
        setCard43Style('');
        break;
      case 'app':
        setCard41Style('');
        setCard42Style('');
        setCard43Style('card04-active');
        break;
      default:
        setCard41Style('');
        setCard42Style('');
        setCard43Style('');
    }
  };
  React.useEffect(() => {
    activeStyle(chosenCategory);
  }, []);

  return (
    <div>
      <div className="cards04">
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleSmallCardClick('newSite')}
          onKeyDown={() => handleSmallCardClick('newSite')}
          className="card04-wrapper"
        >
          <Card04
            icon={New}
            title="Create A New Website"
            activeStyle={card41Style}
          />
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleSmallCardClick('updateSite')}
          onKeyDown={() => handleSmallCardClick('updateSite')}
          className="card04-wrapper"
        >
          <Card04
            icon={Edit}
            title="Edit A Current Website"
            activeStyle={card42Style}
          />
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleSmallCardClick('app')}
          onKeyDown={() => handleSmallCardClick('app')}
          className="card04-wrapper"
        >
          <Card04
            icon={App}
            title="Create A Web App"
            activeStyle={card43Style}
          />
        </div>
      </div>
      <div className="quizInput">
        <div className="wrap-input">
          <input
            className="input"
            type="text"
            name="name"
            value={currentWebsite}
            onChange={e => setCurrentWebsite(e.target.value)}
            required
          />
          <label htmlFor="name" className="label">
            <span className="label-input">Current Website</span>
          </label>
        </div>
        <p className="quizInput__desc">
          If you don't have a current website leave this field empty.
        </p>
      </div>
    </div>
  );
};

export default QuizStep01;
