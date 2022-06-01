import React from "react";
import m from "./Post.module.css"


function Post(props) {
  return (
    <div className={m.Posts}> 
      {props.message}
    </div>
  );
}

export default Post; 