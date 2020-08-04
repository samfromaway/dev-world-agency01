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
      <form
        style={{ maxWidth: 500, margin: 'auto' }}
        name="quiz1"
        className="contact-form"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/thanks"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="quiz1" />
        <input type="hidden" name="answers" value={'answers()'} />

        <div className="wrap-input">
          <input className="input" type="text" name="name" required />
          <label htmlFor="name" className="label">
            <span className="label-input">Name*</span>
          </label>
        </div>

        <div className="wrap-input">
          <input className="input" type="text" name="email" required />
          <label htmlFor="email" className="label">
            <span className="label-input">Email*</span>
          </label>
        </div>

        <div className="wrap-input">
          <textarea
            className="input-textfield"
            name="message"
            required
          ></textarea>
          <label htmlFor="message" className="label-textfield">
            <span className="label-textfield-input">
              What's Your Project About?*
            </span>
          </label>
        </div>

        <button type="submit" className="button contact-btn">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default IndexPage;
