import React from "react";

import classes from "./MessageBox.module.css";

function MessageBox ({
  message, backgroundColor, color,
  width, height, top, left
}) {


  return (
    <>
      <div className = {classes.textBox} style={{width: width, height: height, top: top, left: left, backgroundColor: backgroundColor}}>
        <p style={{color: color}}>{message}</p>
      </div>
    </>
  );
}

export default MessageBox;