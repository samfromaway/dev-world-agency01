import React from 'react';
import amazon from '../../images/quiz/amazon.png';
import apple from '../../images/quiz/apple.png';
import samsung from '../../images/quiz/samsung.png';
import windows from '../../images/quiz/windows.png';

const QuizStep02 = ({
  brands,
  setBrands,
  color,
  setColor,
  goal,
  setGoal,
  employees,
  setEmployees,
}) => {
  const quizRow01 = [
    {
      label: 'Apple',
      value: 'apple',
      img: apple,
      checked: brands.apple,
    },
    {
      label: 'Windows',
      value: 'windows',
      img: windows,
      checked: brands.windows,
    },
    { label: 'Amazon', value: 'amazon', img: amazon, checked: brands.amazon },
    {
      label: 'Samsung',
      value: 'samsung',
      img: samsung,
      checked: brands.samsung,
    },
  ];

  const quizRow02 = [
    {
      label: 'More Clients',
      value: 'moreClients',
      img: apple,
      checked: goal.moreClients,
    },
    {
      label: 'Passive Income',
      value: 'passiveIncome',
      img: windows,
      checked: goal.passiveIncome,
    },
    {
      label: 'Sell Products',
      value: 'sellProducts',
      img: amazon,
      checked: goal.sellProducts,
    },
    {
      label: 'Other',
      value: 'other',
      img: samsung,
      checked: goal.other,
    },
  ];

  const handleBrandsChange = e => {
    const value = e.target.value;
    const checked = e.target.checked;
    setBrands(prev => {
      return {
        ...prev,
        [value]: checked,
      };
    });
  };
  const handleGoalChange = e => {
    const value = e.target.value;
    const checked = e.target.checked;
    setGoal(prev => {
      return {
        ...prev,
        [value]: checked,
      };
    });
  };

  return (
    <div>
      <h2 className="quizSectionTitle">Design</h2>
      <h3 className="quiz__question">Which Brands Do You Like?</h3>
      <div className="quiz-elements">
        {quizRow01.map(quiz => (
          <div key={quiz.value} className="quiz-element">
            <label className="quiz-label">
              <input
                className="checkbox"
                id={quiz.value}
                name={quiz.value}
                value={quiz.value}
                checked={quiz.checked}
                type="checkbox"
                onChange={handleBrandsChange}
              />
              <img className="quiz-image" alt="Logo" src={quiz.img} />
              <span className="quiz-span">{quiz.label}</span>
            </label>
          </div>
        ))}
      </div>
      <div className="quizInput">
        <div className="wrap-input">
          <input
            className="input"
            type="text"
            name="name"
            value={color}
            onChange={e => setColor(e.target.value)}
            required
          />
          <label htmlFor="name" className="label">
            <span className="label-input">Main Color Of The Project</span>
          </label>
        </div>
        <p className="quizInput__desc">e.g. Black and Yellow</p>
      </div>
      <hr className="quiz__divider" />
      <h2 className="quizSectionTitle">Specs</h2>
      <h3 className="quiz__question">What's Your Main Goal</h3>
      <div className="quiz-elements">
        {quizRow02.map(quiz => (
          <div key={quiz.value} className="quiz-element">
            <label className="quiz-label">
              <input
                className="checkbox"
                id={quiz.value}
                name={quiz.value}
                value={quiz.value}
                checked={quiz.checked}
                type="checkbox"
                onChange={handleGoalChange}
              />
              <img className="quiz-image" alt="Logo" src={quiz.img} />
              <span className="quiz-span">{quiz.label}</span>
            </label>
          </div>
        ))}
      </div>
      <div className="quizInput">
        <div className="wrap-input">
          <input
            className="input"
            type="text"
            name="name"
            //value={currentWebsite}
            // onChange={e => setCurrentWebsite(e.target.value)}
            required
          />
          <label htmlFor="name" className="label">
            <span className="label-input">
              How Many Employees Has Your Business?
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default QuizStep02;
