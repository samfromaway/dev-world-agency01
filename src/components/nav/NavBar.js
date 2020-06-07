import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

import MenuBurger from './MenuBurger';
import './nav-bar.scss';
import Logo from '../../images/logo.png';

const NavBar = props => {
  const toggleMobileNav = () => {
    if (props.mobileMenuOpen) {
      return 'nav-links nav-active';
    } else {
      return 'nav-links';
    }
  };

  return (
    <nav className="nav">
      <div>
        <TransitionLink className="logo" to="/">
          <img alt="Logo" src={Logo} />
          <p className="logo-desc">Dev World</p>
        </TransitionLink>
      </div>
      <ul className={toggleMobileNav()}>
        {props.items.map(item => (
          <li key={item.name}>
            <TransitionLink
              to={item.path}
              className="nav-link"
              activeClassName="nav-active-link"
            >
              {item.name}
            </TransitionLink>
          </li>
        ))}
      </ul>
      <div>
        <MenuBurger
          click={props.hamburgerClickHandle}
          mobileMenuOpen={props.mobileMenuOpen}
        />
      </div>
    </nav>
  );
};

export default NavBar;
