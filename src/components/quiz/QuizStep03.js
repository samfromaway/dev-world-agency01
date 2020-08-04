import React from 'react';

const QuizStep03 = ({ answers }) => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };
  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'quizForm01', answers }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };
  return (
    <div>
      <form
        style={{ maxWidth: 500, margin: 'auto' }}
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="quizForm01" />
        <input type="hidden" name="answers" value={answers()} />

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
