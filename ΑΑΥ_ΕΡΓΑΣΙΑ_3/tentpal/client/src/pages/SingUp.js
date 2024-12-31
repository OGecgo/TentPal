import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Headers/Header";
import classes from "../styles/LoginForm.module.css";

function SingUp() {


    return (
    <>
      <div className = "left">
        <Link to = "/"  className = "linkButton" style={{top: "80%", fontSize: "calc(100% + 3vh)", position: "relative"}} >Exit</Link>
      </div>

      <div className = {classes.centerContent}>
        <form className = {classes.form}>
          <label  for="uname"><b>Username</b></label><br/>
          <input type="text" placeholder="Enter Username" name="uname" required></input><br/>
          <br/>
          <label   for="psw"><b>Password</b></label><br/>
          <input type="password" placeholder="Enter Password" name="psw" required></input><br/>
          <input type="checkPassword" placeholder="Enter Password" name="psw" required></input><br/>
          <br/>
          <button type="submit">SingUp</button>
        </form>
      </div>

      <Header />  
      
    </>

    
    );
}

export default SingUp;