import React from "react";
import Nav from "./Nav";

function Header() {
    return (
        <header>
            <div className="left">
                <div className="logo">
                    <img src="./public/images/web-logo.png" alt="Agency Logo" />
                </div>
                <h1>dev.com</h1>
            </div>

            <Nav />
        </header>
    )
}

export default Header;