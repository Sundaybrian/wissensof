import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import Logo from "../../Assets/logo.png";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(true);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollAndCloseMenu = () => {
    scrollToTop();
    closeMobileMenu();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="home" className="navbar__logo" onClick={scrollAndCloseMenu}>
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
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav__links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav__links"
                onClick={closeMobileMenu}
              >
                Our Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav__links"
                onClick={closeMobileMenu}
              >
                Meet The team
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
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
