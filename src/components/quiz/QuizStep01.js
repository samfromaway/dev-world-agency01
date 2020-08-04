import React, { useState } from 'react';
import New from '../../images/device.svg';
import Edit from '../../images/edit-regular.svg';
import App from '../../images/sitemap.svg';

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
        setCard41Style('quizCardQ1 quizCardQ1-active');
        setCard42Style('quizCardQ1');
        setCard43Style('quizCardQ1');
        break;
      case 'updateSite':
        setCard41Style('quizCardQ1');
        setCard42Style('quizCardQ1 quizCardQ1-active');
        setCard43Style('quizCardQ1');
        break;
      case 'app':
        setCard41Style('quizCardQ1');
        setCard42Style('quizCardQ1');
        setCard43Style('quizCardQ1 quizCardQ1-active');
        break;
      default:
        setCard41Style('quizCardQ1');
        setCard42Style('quizCardQ1');
        setCard43Style('quizCardQ1');
    }
  };
  React.useEffect(() => {
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
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleSmallCardClick('newSite')}
          onKeyDown={() => handleSmallCardClick('newSite')}
          className="card04-wrapper"
        >
          <div className={card41Style}>
            <img className="quizCardQ1-icon" src={New} alt="new" />
            <h3>Create A New Website</h3>
            <button className="button">Choose</button>
          </div>
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleSmallCardClick('updateSite')}
          onKeyDown={() => handleSmallCardClick('updateSite')}
          className="card04-wrapper"
        >
          <div className={card42Style}>
            <img className="quizCardQ1-icon" src={Edit} alt="new" />
            <h3>Redesign A Website</h3>
            <button className="button">Choose</button>
          </div>
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleSmallCardClick('app')}
          onKeyDown={() => handleSmallCardClick('app')}
          className="card04-wrapper"
        >
          <div className={card43Style}>
            <img className="quizCardQ1-icon" src={App} alt="app" />
            <h3>Create A Web App</h3>
            <button className="button">Choose</button>
          </div>
        </div>
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
