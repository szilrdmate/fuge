import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  const [t, i18n] = useTranslation("global")

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center w-18 h-auto">
        {/* Logo on the left */}
        <Link to="/" className="logo-link">
          <img src="src/assets/logo_white.svg" alt="Füge logo" />
        </Link>

        {/* Responsive Navigation Menu on the right */}
        <ul className="nav-links">
          <NavLink to="/">{t("header.home")}</NavLink>
          <NavLink to="/about">{t("header.about")}</NavLink>
          <NavLink to="/blog">{t("header.blog")}</NavLink>
          <NavLink to="/contact">{t("header.contact")}</NavLink>
        </ul>

        {/* Hamburger Menu for small screens */}
        <div className="mobile-menu-hamburger">
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-dropdown">
              <DropdownLink to="/" onClick={toggleMobileMenu}>
                HOME
              </DropdownLink>
              <DropdownLink to="/about" onClick={toggleMobileMenu}>
                ABOUT
              </DropdownLink>
              <DropdownLink to="/blog" onClick={toggleMobileMenu}>
                BLOG
              </DropdownLink>
              <DropdownLink to="/contact" onClick={toggleMobileMenu}>
                CONTACT
              </DropdownLink>
            </div>
          )}
        </div>
        <button onClick={() => handleChangeLanguage("hu")}>Hu</button>
        <button onClick={() => handleChangeLanguage("en")}>En</button>
      </div>
    </header>
  );
};

// NavLink component for consistent styling
const NavLink = ({ to, children }) => (
  <li>
    <Link to={to} className="nav-link">
      {children}
    </Link>
  </li>
);

// DropdownLink for mobile menu items
const DropdownLink = ({ to, children, onClick }) => (
  <Link to={to} onClick={onClick} className="dropdown-link">
    {children}
  </Link>
);

export default Header;
