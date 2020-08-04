import React from 'react';

const QuizStep03 = () => {
  return (
    <div>
      <form
        name="quizForm01"
        className="contact-form"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/thanks"
        style={{ maxWidth: 500, margin: 'auto' }}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="quizForm01" />

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
    </div>
  );
};

export default QuizStep03;
