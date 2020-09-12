import React from 'react'
import Logo from "../../Assets/logo.png";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="wissnav">

            <div className="wissnav__logo">
                <img src={Logo} alt="" />
            </div>

            <div className="wissnav__styledHamburger">
                <div className="wissnav__hamburgerBox">
                    <div className="wissnav__hamburgerInner"></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
