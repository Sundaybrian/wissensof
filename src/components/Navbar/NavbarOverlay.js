import React from 'react'
import "./NavbarOverlay.css";

function NavbarOverlay() {
    return (
        <div className="wissnav__overlay">
            <span class="close-btn js-close-btn">&times;</span>
            <ul class="menu-content">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="work.html">Work</a></li>
                <li><a href="directors.html">Directors</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavbarOverlay
