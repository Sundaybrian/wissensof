import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../Assets/logo.png";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(true);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            <img src={Logo} alt="" />
          </Link>

          <div className="wissnav__styledHamburger" onClick={handleClick}>
            <div className="wissnav__hamburgerBox">
              {click ? (
                <div className="wissnav__hamburgerInner"></div>
              ) : (
                <span className="close__btn js-close-btn">&times;</span>
              )}
            </div>
          </div>
          {/* hamburger */}

          <ul className={click ? "nav__menu " : "nav__menu active"}>
            <li className="nav__item">
              <Link
                to="/about"
                className="nav__links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/projects"
                className="nav__links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/team" className="nav__links" onClick={closeMobileMenu}>
                The team
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/contact"
                className="nav__links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/get-started"
                className="nav__linksMobile"
                onClick={closeMobileMenu}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
        {/* nav container
         */}
      </nav>
    </>
  );
}

export default Navbar;
