import React from "react";
import { NavLink } from "react-router-dom";
import h from "./../Dialogs.module.css";

function DialogItem(props) {
  let path = "/dialogs/" + props.id;
  return (
    <div className={h.Dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}


export default DialogItem;
