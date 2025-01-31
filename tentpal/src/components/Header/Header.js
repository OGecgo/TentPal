import React from "react";
import { Link } from "react-router-dom";

import MessageBox from "../MessageBox/MessageBox";

// css
import classes from "./Header.module.css";


function Header ({panel, message}) {

  const renderPage = (panel) => {
    switch(panel) {
      case "login":
        return (
          <>
            <Link  to="/login" className={`${classes.login} ${classes.Link}`}>Login</Link>
            <Link to="/singUp" className={`${classes.singUp} ${classes.Link}`}>Sign Up</Link>
          </>
        );
      case "messageBox":
        return (
          <MessageBox message = {message} width={"calc(100% - (4vw + 40px + 2vh + 2vw))"} height={" calc(40px + 5vh + 2vw - 20px)"} top = {"10px"} left = {"10px"}/>
        );
      default:
        return;
    }

  }

  return (
    <>
      <div className = {classes.header}>
        {renderPage(panel)}
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
      </div>
    </>  
  );
}

export default Header;