import React, {useState} from "react";
import { Link } from "react-router-dom";


// css
import classes from "./Header.module.css";

const HeaderNoLogined = ({login}) => {

  return (
    <>
      <div className = {classes.header}>
        {(login === "false") ? (
          <>
            <Link to="/login" className={`${classes.login} ${classes.Link}`}>Login</Link>
            <Link to="/singUp" className={`${classes.singUp} ${classes.Link}`}>Sign Up</Link>
          </>
        ) : (
          <>
            <div className = {classes.textBox}>
              <p>Red block is not availble places to make your tent</p>
            </div>
          </>
        )}
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
      </div>
    </> 
  );
}

export default HeaderNoLogined;