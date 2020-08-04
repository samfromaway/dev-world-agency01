import React, { useState, Fragment } from 'react';
import './quiz.scss';
import '../contactForm/contact-form.scss';
import QuizStep01 from './QuizStep01';
import QuizStep02 from './QuizStep02';
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

  const answers = () => {
    return `
    CATEGORY: ${chosenCategory}, 
    WEBSITE: ${currentWebsite},
    BRANDS:
        Windows: ${brands.windows},
        Apple:${brands.apple},
        Amazon:${brands.amazon},
        Samsung:${brands.samsung},
    COLOR: ${color},
    SPECS: 
        More Clients: ${goal.moreClients},
        Passive Income: ${goal.passiveIncome},
        Sell Products: ${goal.sellProducts},
        Other: ${goal.other},
    EMPLOYEES: ${employees}
      `;
  };

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

  // Make sure the contact form is exists as the static
  // site generation needs it to connect the backend to netlify
  // that means don't put a switch statement that returns the components per step
  // but return all the components and hide the ones not used
  return (
    <Fragment>
      <div style={step === 1 ? { display: 'block' } : { display: 'none' }}>
        <h2>Dev-World Quiz</h2>
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
      </div>
      <div style={step === 2 ? { display: 'block' } : { display: 'none' }}>
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
          <button className=" button button-ghost btn-small" onClick={prevStep}>
            Back
          </button>
          <button className=" button  btn-small" onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
      <div style={step === 3 ? { display: 'block' } : { display: 'none' }}>
        <h2>Almost Done 😉</h2>
        <QuizStep03 answers={answers} />
        <div style={{ marginBottom: 30 }} />
        <div className="quizButtonBox">
          <button className=" button button-ghost btn-small" onClick={prevStep}>
            Back
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default QuizMain;
