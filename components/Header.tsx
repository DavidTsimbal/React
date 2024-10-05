import React from "react";
import logo from "../public/WhiteLogoTransparentBG tight.svg";

function Header(){
    return(
        <header>
            <a href="index.html">
                <img className="logo" src={logo} alt="Логотип"></img>
            </a>
            <nav>
                <ul>
                    <li className="menu-li"><a className="menu-text" href="index.html">ГЛАВНАЯ</a></li>
                    <li className="menu-li"><a className="menu-text" href="/pages/router.php">БИЛЕТЫ</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
