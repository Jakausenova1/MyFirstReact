import React from "react";
import { NavLink } from "react-router-dom";
import h from "./Dialogs.module.css";

function Dialogs() {
  return (
    <div className={h.Dialogs}>
      <div className={h.DialogsItem}>
        <div className={h.Dialog + " " + h.active}>
          <NavLink to="/dialogs/1">Алтынай</NavLink>
        </div>
        <div className={h.Dialog}>
          <NavLink to="/dialogs/2">Анна</NavLink>
        </div>
        <div className={h.Dialog}>
          <NavLink to="/dialogs/3">Жибек</NavLink>
        </div>
        <div className={h.Dialog}>
          <NavLink to="/dialogs/4">Саша</NavLink>
        </div>
        <div className={h.Dialog}>
          <NavLink to="/dialogs/5">Мээрим</NavLink>
        </div>
        <div className={h.Dialog}>
          <NavLink to="/dialogs/6">Женя</NavLink>
        </div>
      </div>
      <div className={h.Messages}>
        <div className={h.Message}>Добрый день</div>
        <div className={h.Message}>Хотела заказать смузи</div>
        <div className={h.Message}>Есть ли у вас доставка?</div>
      </div>
    </div>
  );
}

export default Dialogs;
