import React from "react";
import { Link } from "react-router-dom";

import MessageBox from "../MessageBox/MessageBox";

// css
import classes from "./Header.module.css";


function Header ({login, colormessage, setColormessage}) {

  console.log(colormessage);

  
  const chooseColor = (color) => {
    setColormessage(color);
  }

  return (
    <>
      <div className = {classes.header}>
        {(login === "false") ? (
          <>
            <Link to="/login" className={`${classes.login} ${classes.Link}`}>Login</Link>
            <Link to="/singUp" className={`${classes.singUp} ${classes.Link}`}>Sign Up</Link>
          </>
        ) : (
          <MessageBox colormessege = {colormessage} />
        )}
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
      </div>
    </>  
  );
}

export default Header;