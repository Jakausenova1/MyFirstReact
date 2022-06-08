import React from "react";
import { NavLink } from "react-router-dom";
import h from "./Dialogs.module.css";

function DialogItem(props) {
  let path = "/dialogs/" + props.id;
  return (
    <div className={h.Dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

function Message(props) {
  return (
    <div className={h.Message}>{props.message}</div>
  );
}


function Dialogs() {
  return (
    <div className={h.Dialogs}>
      <div className={h.DialogsItem}>
        <DialogItem name="Алтынай" id="1" />
        <DialogItem name="Анна" id="2" />
        <DialogItem name="Жибек" id="3" />
        <DialogItem name="Саша" id="4" />
        <DialogItem name="Мээрим" id="5" />
        <DialogItem name="Женя" id="6" />
      </div>
      <div className={h.Messages}>
       <Message message="Здравствуйте"/>
       <Message message="Хотела заказать смузи"/>
       <Message message="Есть ли у вас доставка?"/>
      </div>
    </div>
  );
}

export default Dialogs;
