import React from "react";

import classes from "./MessageBox.module.css";

function MessageBox ({colormessege}) {

  const showMessage = (colorBlock) => {
    switch (colorBlock) {
      case "red":
        return <p>Red block is not availble places to make your tent</p>;
      case "green":
        return <p>Green block is availble places to make your tent</p>;
      default:
        return <p></p>;
    }
  }

  return (
    <>
      <div className = {classes.textBox}>
        {showMessage(colormessege)}
      </div>
    </>
  );
}

export default MessageBox;