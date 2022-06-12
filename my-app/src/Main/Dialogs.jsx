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
  let dialogsData = [
    { id: 1, name: "Алтынай" },
    { id: 2, name: "Анна" },
    { id: 3, name: "Жибек" },
    { id: 4, name: "Саша" },
    { id: 5, name: "Мээрим" },
    { id: 6, name: "Женя" },
  ];

  let messagesData = [
    { id: 1, message: "Здравствуйте" },
    { id: 2, message: "Хотела заказать смузи" },
    { id: 3, message: "Есть ли у вас доставка?" },
    { id: 4, message: "Привет" },
    { id: 5, message: "Hi" },
  ];

  return (
    <div className={h.Dialogs}>
      <div className={h.DialogsItem}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={h.Messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id} />
        <Message message={messagesData[2].message} id={messagesData[2].id} />
        <Message message={messagesData[3].message} id={messagesData[3].id} />
      </div>
    </div>
  );
}

export default Dialogs;
