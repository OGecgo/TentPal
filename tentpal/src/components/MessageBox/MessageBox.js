import React from "react";

import classes from "./MessageBox.module.css";

function MessageBox ({message, width, height, top, left}) {



  return (
    <>
      <div className = {classes.textBox} style={{width: width, height: height, top: top, left: left}}>
        <p>{message}</p>
      </div>
    </>
  );
}

export default MessageBox;