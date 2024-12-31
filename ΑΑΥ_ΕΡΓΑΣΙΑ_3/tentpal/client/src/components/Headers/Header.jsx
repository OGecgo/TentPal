import React, {useState} from "react";
import { Link } from "react-router-dom";


// css
import classes from "./Header.module.css";

const HeaderNoLogined = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual login state
  return (
    <>
      <div className={classes.header}>
        {!isLoggedIn && (
          <>
            <Link to="/login" className={`${classes.login} ${classes.Link}`}>Login</Link>
            <Link to="/singup" className={`${classes.singUp} ${classes.Link}`}>Sign Up</Link>
          </>
        )}
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
      </div>
    </> 
  );
}

export default HeaderNoLogined;