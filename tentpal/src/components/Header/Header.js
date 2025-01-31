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
          <MessageBox width = {`calc(100% - (4vw + 40px + 2vh + 2vw))`} message = {message} />
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