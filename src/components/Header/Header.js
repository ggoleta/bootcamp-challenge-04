import React from "react";

import "./Header.css";
import avatar from "../../assets/img/avatar.jpeg";
import logo from "../../assets/img/facebook-1.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Facebook-logo" />
      <div>
        <ul>
          <li>
            <span>Meu perfil</span>
          </li>
          <li>
            <img src={avatar} alt="Avatar" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
