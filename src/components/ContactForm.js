import React from "react"

const ContactForm = () => {
  return (
    <div class="wrap-contact cards-space01">
      <h2>Contact</h2>
      <a class="email-link" href="mailto:contact@dev-world.info">
        <p>contact@dev-world.info</p>
      </a>

      <form id="myform" class="contact-form" netlify>
        <div class="wrap-input">
          <input class="input" type="text" name="name" required />
          <label for="name" class="label">
            <span class="label-input">Name*</span>
          </label>
        </div>

        <div class="wrap-input">
          <input class="input" type="text" name="email" required />
          <label for="email" class="label">
            <span class="label-input">Email*</span>
          </label>
        </div>

        <div class="wrap-input">
          <textarea class="input-textfield" name="message" required></textarea>
          <label for="message" class="label-textfield">
            <span class="label-textfield-input">Message*</span>
          </label>
        </div>

        <button class="button contact-btn">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
