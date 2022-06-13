import React from "react";
import { NavLink } from "react-router-dom";
import h from "./Header.module.css";

function Header() {
  return (
    <div className={h.headerAll}>
      <div className={h.headerMain}>
        <NavLink className={h.headerName} to="/main">
          Smoothies
        </NavLink>
        <ul className={h.headerLinkContainer}>
          <NavLink
            className={h.headerLinks}
            to="/main"
            activeClassName={h.active}
          >
            Главная
          </NavLink>
          <NavLink className={h.headerLinks} to="/">
            Каталог
          </NavLink>
          <NavLink className={h.headerLinks} to="/">
            Новости
          </NavLink>
          <NavLink className={h.headerLinks} to="/">
            Корзина
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
