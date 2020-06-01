import React from "react"

const ContactForm = () => {
  return (
    <div className="wrap-contact cards-space01">
      <h2>Contact</h2>
      <a className="email-link" href="mailto:contact@dev-world.info">
        <p>contact@dev-world.info</p>
      </a>

      <form id="myform" className="contact-form" netlify>
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

        <button className="button contact-btn">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
