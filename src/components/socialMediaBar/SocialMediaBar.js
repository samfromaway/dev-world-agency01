import React from "react"
import Button01 from "../button01/Button01"
import "./social-media-bar.css"

const SocialMediaBar = pros => {
  return (
    <section className="social-media">
      <div>
        <a
          href="https://www.youtube.com/channel/UCrm-HTaESqxJXyxMcZFOHng"
          target="_blank"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://github.com/samfromaway" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com/devworldinfo" target="_blank">
          <i className="fab fa-facebook"></i>
        </a>
        <Button01
          className="button cta-button fadeinanim01 pulse01"
          href="./contact.html"
          text="CONTACT"
          path="/contact"
        >
          CONTACT
        </Button01>
      </div>
    </section>
  )
}

export default SocialMediaBar
