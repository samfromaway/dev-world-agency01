import React from "react"
import "./menu-burger.css"

const MenuBurger = props => {
  const toggleBurger = () => {
    if (props.mobileMenuOpen) {
      return "burger burger-active"
    } else {
      return "burger"
    }
  }
  return (
    <div className="burger-wrapper">
      <div className={toggleBurger()} onClick={props.click}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </div>
  )
}

export default MenuBurger
