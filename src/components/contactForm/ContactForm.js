import React from 'react';
import './contact-form.css';
import { Link } from 'gatsby';

const ContactForm = props => {
  return (
    <div className="wrap-contact">
      <div className="contact-form-header">
        <h2>Contact</h2>
        <Link className="email-link" href="mailto:contact@dev-world.info">
          <p>contact@dev-world.info</p>
        </Link>
      </div>
      <form
        name={props.formName}
        className="contact-form"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
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
            <span className="label-textfield-input">Message*</span>
          </label>
        </div>

        <button type="submit" className="button contact-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
