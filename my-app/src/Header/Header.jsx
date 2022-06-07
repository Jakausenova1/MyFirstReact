import React from "react";
import { NavLink } from "react-router-dom";
import h from "./Header.module.css";

function Header() {
  return (
    <div className={h.headerAll}>
      <div className={h.headerMain}>
        <p className={h.headerName}>Smoothies</p>
        <ul className={h.headerLinkContainer}>
          <NavLink className={h.headerLinks} to="/main" activeClassName={h.active}> 
            Главная
          </NavLink>
          <NavLink className={h.headerLinks} to="/">
            Каталог
          </NavLink>
          <NavLink className={h.headerLinks} to="/">
            О нас
          </NavLink>
          <NavLink className={h.headerLinks} to="/">
            To-Do list
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
