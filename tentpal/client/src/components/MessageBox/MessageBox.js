import React from "react";

import classes from "./MessageBox.module.css";

function MessageBox ({message}) {

  const showMessage = (colorBlock) => {
    switch (colorBlock) {
      case "red":
        return <p>Red block is not availble places to make your tent</p>;
      case "green":
        return <p>Green block is availble places to make your tent</p>;
      default:
        return <p>You can choose position for your tent</p>;
    }
  }

  return (
    <>
      <div className = {classes.textBox}>
        {showMessage(message)}
      </div>
    </>
  );
}

export default MessageBox;