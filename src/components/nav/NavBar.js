import React from 'react';
import { Link } from 'gatsby';

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
        <Link className="logo" to="/">
          <img alt="Logo" src={Logo} />
          <p className="logo-desc">Dev World</p>
        </Link>
      </div>
      <ul className={toggleMobileNav()}>
        {props.items.map(item => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="nav-link"
              activeClassName="nav-active-link"
            >
              {item.name}
            </Link>
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
