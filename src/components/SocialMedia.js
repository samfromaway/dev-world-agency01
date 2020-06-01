import React from "react"

const SocialMedia = () => {
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
        <a
          className="button cta-button fadeinanim01 pulse01"
          href="./contact.html"
        >
          CONTACT
        </a>
      </div>
    </section>
  )
}

export default SocialMedia
