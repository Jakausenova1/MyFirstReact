import React from "react";
import h from "./Header.module.css";

function Header() {
  return (
    <div className={h.headerAll}>
      <div className={h.headerMain}>
        <p className={h.headerName}>Smoothies</p>
        <ul className={h.headerLinkContainer}>
          <li className={h.headerLinks}>Главная</li>
          <li className={h.headerLinks}>Каталог</li>
          <li className={h.headerLinks}>О нас</li>
          <li className={h.headerLinks}>To-Do list</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

