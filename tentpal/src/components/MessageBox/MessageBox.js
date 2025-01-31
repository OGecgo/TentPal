import React from "react";

import classes from "./MessageBox.module.css";

function MessageBox ({message, width}) {


  return (
    <>
      <style>{`
        :root{
          --messageBox-without: ${width}; 
        }
        `}</style>
      <div className = {classes.textBox}>
        <p>{message}</p>
      </div>
    </>
  );
}

export default MessageBox;