import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <section>
      <nav>
        <div className="logo">
          <Link to="index">
            <img alt="Logo" src="../src/images/logo.png" />
          </Link>
          <p id="logo-desc">Dev World</p>
        </div>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="./services.html">
              SERVICES
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="./our-work.html">
              OUR WORK
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="./about-us.html">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="./contact.html">
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="burger-wrapper">
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
