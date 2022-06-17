import React from "react";
import h from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={h.Dialogs}>
      <div className={h.DialogsItem}>{dialogsElements}</div>
      <div className={h.Messages}>{messagesElements}</div>
    </div>
  );
}

export default Dialogs;
