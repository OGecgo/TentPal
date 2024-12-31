import React from "react";

// css
import classes from "./Header.module.css";

function HeaderLogined() {
  return (
    <>
      <div className={classes.header}>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
      </div>
    </> 
  );
}

export default HeaderLogined;