import React from 'react'

function NavbarOverlay({ overlay, handleClick }) {
    return (
        <div className={overlay ? "wissnav__overlay menu__isActive" : "wissnav__overlay "}>
            <span class="close-btn js-close-btn" onClick={handleClick}>&times;</span>
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
