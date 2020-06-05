import PropTypes from 'prop-types';
import React, { useState } from 'react';
import NavBar from '../nav/NavBar';

const Header = ({ siteTitle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'OUR WORK', path: '/our-work' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const hamburgerClickHandle = () => {
    setMobileMenuOpen(prevState => {
      return !prevState;
    });
  };

  return (
    <header>
      <section>
        <NavBar
          items={menuItems}
          mobileMenuOpen={mobileMenuOpen}
          hamburgerClickHandle={hamburgerClickHandle}
        />
      </section>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
