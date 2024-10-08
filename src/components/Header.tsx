import React from "react";
import logo from "/WhiteLogoTransparentBG tight.svg";

function Header(){
    return(
        <header>
            <a href="/">
                <img className="logo" src={logo} alt="Логотип"></img>
            </a>
            <nav>
                <ul>
                    <li className="menu-li"><a className="menu-text" href="/">ГЛАВНАЯ</a></li>
                    <li className="menu-li"><a className="menu-text" href="/src/shop/">БИЛЕТЫ</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
