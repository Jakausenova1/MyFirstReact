import React from "react";
import h from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let newPostElement = React.createRef();

function Dialogs(props) {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} addPost={props.addPost}/>
  ));

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={h.Dialogs}>
      <div className={h.DialogsItem}>{dialogsElements}</div>
      <div className={h.Messages}>
        {messagesElements}
        <div>
          <textarea ref={newPostElement}></textarea>
          <button onClick={addPost}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
