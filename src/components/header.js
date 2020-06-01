import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Toolbar from "./nav/Toolbar"
import SideDrawer from "./nav/SideDrawer"
import Backdrop from "./nav/Backdrop"

const Header = ({ siteTitle }) => {
  const [sideDrawerOpen, setsideDrawerOpen] = useState(false)

  const hamburgerClickHandle = () => {
    setsideDrawerOpen(prevState => {
      return !prevState
    })
  }

  const backdropClickHandler = () => {
    setsideDrawerOpen(false)
  }

  let backdrop
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  return (
    <header className="header">
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={hamburgerClickHandle} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
