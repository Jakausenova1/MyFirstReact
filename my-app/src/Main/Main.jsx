import React from "react";
import m from "./Main.module.css";
import img from "./Images/777.png";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div className={m.mainAll}>
      <div className={m.Components}>
        <img className={m.Img} alt={"mainImage"} src={img} />
        <p className={m.smallText}>Полезный</p>
        <h1 className={m.MainText}>Смузи</h1>
        <NavLink className={m.BannerLink} to="/dialogs">
          Сообщения
        </NavLink>
      </div>
    </div>
  );
}

export default Main;
