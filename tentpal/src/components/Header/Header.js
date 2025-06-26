import React from "react";
import { Link } from "react-router-dom";

import MessageBox from "../MessageBox/MessageBox";
import InfoButton from "../InfoButton/InfoButton";

// css
import classes from "./Header.module.css";


function Header ({panel, message, helpPage}) {
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
          <>
            <MessageBox message={message} width={"calc(100% - (40px + 5vh + 2vw - 20px) - 20px - (40px + 5vh + 2vw - 20px) - 20px)"} height={" calc(40px + 5vh + 2vw - 20px)"} top = {"10px"} left = {"10px"}/>
            <InfoButton page={helpPage} sizeX={"calc(40px + 5vh + 2vw - 20px)"} sizeY={"calc(40px + 5vh + 2vw - 20px)"} fontSize={25} top={"10px"} left={"calc(100% - (40px + 5vh + 2vw - 20px) - 20px - (40px + 5vh + 2vw - 20px)"}/>
          </>
        );
      default:
        return;
    }

  }

  return (
    <>
      <div className = {classes.header}>
        {renderPage(panel)}
        <div className={`${classes.user}`}>
          <img  src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
        </div>
      </div>
    </>  
  );
}

export default Header;