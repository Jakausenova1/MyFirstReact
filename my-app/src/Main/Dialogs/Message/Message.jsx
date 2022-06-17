import React from "react";
import h from "./../Dialogs.module.css";

function Message(props) {
  return <div className={h.Message}>{props.message}</div>;
}

export default Message;
