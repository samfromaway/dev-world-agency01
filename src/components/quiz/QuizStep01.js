import React, { useState, useEffect } from 'react';
import New from '../../images/device.svg';
import Edit from '../../images/edit-regular.svg';
import App from '../../images/sitemap.svg';
import Card04 from '../card04/Card04';

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

  useEffect(() => {
    activeStyle(chosenCategory);
  }, []);

  return (
    <div>
      <p className="quizDescQ1">
        Send us your project idea and we send you a FREE DESIGN of how we would
        approach your project.
      </p>
      <h3 className="quizTitleQ1">I'm planning to...</h3>
      <div className="cards04">
        <Card04
          icon={New}
          title="Create A New Website"
          activeStyle={card41Style}
          handleSmallCardClick={handleSmallCardClick}
          value="newSite"
        />
        <Card04
          icon={Edit}
          title="Redesign A Website"
          activeStyle={card42Style}
          handleSmallCardClick={handleSmallCardClick}
          value="updateSite"
        />
        <Card04
          icon={App}
          title="Create A Web App"
          activeStyle={card43Style}
          handleSmallCardClick={handleSmallCardClick}
          value="app"
        />
      </div>
      <div className="quizSpacer01" />
      <div className="quizInput">
        <div className="wrap-input">
          <input
            className="input"
            type="text"
            name="website"
            value={currentWebsite}
            onChange={e => setCurrentWebsite(e.target.value)}
            required
          />
          <label htmlFor="website" className="label">
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
