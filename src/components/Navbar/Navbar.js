import React, { useState } from 'react'
import Logo from "../../Assets/logo.png";
import NavbarOverlay from './NavbarOverlay';
import "./Navbar.css";


function Navbar() {

    const [overlay, setOverlay] = useState(false)

    const handleClick = (e) => {
        setOverlay(!overlay);
    }

    if (overlay) {
        return <NavbarOverlay handleClick={handleClick} overlay={overlay} />
    }
    return (
        <nav className="wissnav">
            <div className="wissnav__logo">
                <img src={Logo} alt="" />
            </div>

            <div className="wissnav__styledHamburger" onClick={handleClick}>
                {overlay ? (<div className="wissnav__hamburgerBox" >
                    <div className="wissnav__hamburgerInner"></div>
                </div>) : (
                        <h2>lococo</h2>
                    )}

            </div>
        </nav>)

}

export default Navbar
