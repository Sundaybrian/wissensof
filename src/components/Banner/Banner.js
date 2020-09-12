import React from 'react';

import "./Banner.css";

function Banner({ children, title, subtitle }) {
    return (
        <div className="Banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}

export default Banner
