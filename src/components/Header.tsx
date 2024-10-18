import React from "react";
import logo from "/WhiteLogoTransparentBG tight.svg";
import profile from "/icn/profile_icon.svg"

function Header(){
    return(
        <header>
            <a href="/">
                <img className="logo" src={logo} alt="Логотип"></img>
            </a>
            <nav>
                <ul>
                    <div className="menu-li" >
                        <li className="menu-li"><a className="menu-text" href="/">ГЛАВНАЯ</a></li>
                        <li className="menu-li"><a className="menu-text" href="/src/shop/">БИЛЕТЫ</a></li>
                    </div>
                </ul>
            </nav>
                    <div className="menu-li" id="profile-container">
                        <a className="menu-text" href="/src/admin/"><img className="profile-icn" src={profile} width="25px"/></a>
                        <a className="menu-text" href="/src/admin/">ВХОД</a>
                    </div>
        </header>
    );
}

export default Header;
