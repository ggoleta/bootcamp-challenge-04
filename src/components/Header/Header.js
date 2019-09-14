import React from "react";

import "./Header.css";
import avatar from "../../assets/img/avatar.jpeg";

function Header() {
  return (
    <header>
      <span>facebook</span>
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
