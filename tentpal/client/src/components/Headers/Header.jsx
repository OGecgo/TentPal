import React, {useState} from "react";
import { Link } from "react-router-dom";


// css
import classes from "./Header.module.css";

function Header ({login}) {

  const showMessege = (colorBlock) => {
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
      <div className = {classes.header}>
        {(login === "false") ? (
          <>
            <Link to="/login" className={`${classes.login} ${classes.Link}`}>Login</Link>
            <Link to="/singUp" className={`${classes.singUp} ${classes.Link}`}>Sign Up</Link>
          </>
        ) : (
          <>
            <div className = {classes.textBox}>
              {showMessege("green")}
            </div>
          </>
        )}
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
      </div>
    </>  
  );
}

export default Header;