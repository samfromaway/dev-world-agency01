import React, { useState } from 'react';
import '../components/quiz/quiz.scss';
import Layout from '../components/layout';
//components
import SEO from '../components/seo';
import QuizMain from '../components/quiz/QuizMain';
import ProgressBar from '../components/quiz/ProgressBar';

const IndexPage = () => {
  const [step, setStep] = useState(1);

  return (
    <Layout>
      <SEO title="Quiz" />
      <div className="quiz__Bgnd">
        <div className="quiz__TopWrapper">
          <ProgressBar step={step} />
          <QuizMain step={step} setStep={setStep} />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
