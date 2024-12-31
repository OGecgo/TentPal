import React from "react";

// css
import classes from "./Header.module.css";

function HeaderNoLogined() {
  return (
    <>
      <div className={classes.header}>
        <button className={classes.login}>Login</button>
        <button className={classes.singUp}>Sign Up</button>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
      </div>
    </> 
  );
}

export default HeaderNoLogined;