import React from "react";

import classes from "./MessageBox.module.css";

function MessageBox ({
  message, backgroundColor,
  width, height, top, left
}) {


  return (
    <>
      <div className = {classes.textBox} style={{width: width, height: height, top: top, left: left, backgroundColor: backgroundColor}}>
        <p>{message}</p>
      </div>
    </>
  );
}

export default MessageBox;