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
  return <div className={h.Message}>{props.message}</div>;
}

function Dialogs() {
  let dialogs = [
    { id: 1, name: "Алтынай" },
    { id: 2, name: "Анна" },
    { id: 3, name: "Жибек" },
    { id: 4, name: "Саша" },
    { id: 5, name: "Мээрим" },
    { id: 6, name: "Женя" },
  ];

  let messages = [
    { id: 1, message: "Здравствуйте" },
    { id: 2, message: "Хотела заказать смузи" },
    { id: 3, message: "Есть ли у вас доставка?" },
    { id: 4, message: "Привет" },
    { id: 5, message: "Hi" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={h.Dialogs}>
      <div className={h.DialogsItem}>{dialogsElements}</div>
      <div className={h.Messages}>{messagesElements}</div>
    </div>
  );
}

export default Dialogs;
