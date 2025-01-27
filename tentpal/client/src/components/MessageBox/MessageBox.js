import React from "react";

import classes from "./MessageBox.module.css";

function MessageBox ({message}) {


  return (
    <>
      <div className = {classes.textBox}>
        <p>{message}</p>
      </div>
    </>
  );
}

export default MessageBox;