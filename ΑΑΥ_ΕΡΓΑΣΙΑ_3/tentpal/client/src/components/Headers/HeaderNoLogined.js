import React from "react";
import { Link } from "react-router-dom";


// css
import classes from "./Header.module.css";

const HeaderNoLogined = () => {
  return (
    <>
      <div className={classes.header}>
        <Link to = "/login" className={`${classes.login} ${classes.Link}`} > Login</Link>
        <Link to="/signup" className={`${classes.singUp} ${classes.Link}`}>Sign Up</Link>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
      </div>
    </> 
  );
}

export default HeaderNoLogined;