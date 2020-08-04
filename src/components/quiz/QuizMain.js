import React, { useState, Fragment } from 'react';
import './quiz.scss';
import '../contactForm/contact-form.scss';
import QuizStep01 from './quizStep01';
import QuizStep02 from './quizStep02';
import QuizStep03 from './QuizStep03';

const QuizMain = ({ step, setStep }) => {
  const [chosenCategory, setchosenCategory] = useState('');
  const [currentWebsite, setCurrentWebsite] = useState('');
  const [employees, setEmployees] = useState('');
  const [color, setColor] = useState('');
  const [brands, setBrands] = useState({
    windows: false,
    apple: false,
    amazon: false,
    samsung: false,
  });
  const [goal, setGoal] = useState({
    moreClients: false,
    passiveIncome: false,
    sellProducts: false,
    other: false,
  });

  const nextStep = () => {
    setStep(prev => prev + 1);
    scrollToTop();
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  switch (step) {
    case 1:
      return (
        <Fragment>
          <h2>Dev-World Quiz</h2>
          <h3 style={{ textAlign: 'center' }}>I'm planning to...</h3>
          <QuizStep01
            chosenCategory={chosenCategory}
            setchosenCategory={setchosenCategory}
            currentWebsite={currentWebsite}
            setCurrentWebsite={setCurrentWebsite}
          />
          <div className="quizButtonBox">
            <button className=" button  btn-small" onClick={nextStep}>
              Next
            </button>
          </div>
        </Fragment>
      );
    case 2:
      return (
        <Fragment>
          <h2>Step 2</h2>
          <QuizStep02
            brands={brands}
            setBrands={setBrands}
            color={color}
            setColor={setColor}
            goal={goal}
            setGoal={setGoal}
            employees={employees}
            setEmployees={setEmployees}
          />
          <div className="quizButtonBox">
            <button
              className=" button button-ghost btn-small"
              onClick={prevStep}
            >
              Back
            </button>
            <button className=" button  btn-small" onClick={nextStep}>
              Next
            </button>
          </div>
        </Fragment>
      );
    case 3:
      return (
        <Fragment>
          <h2>Almost Done 😉</h2>
          <QuizStep03 />
          <div className="quizButtonBox">
            <button
              className=" button button-ghost btn-small"
              onClick={prevStep}
            >
              Back
            </button>
          </div>
        </Fragment>
      );
  }
};

export default QuizMain;
