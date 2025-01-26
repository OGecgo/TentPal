import React from "react";

import Header from "../../components/Header/Header";
import LeftPanel from "../../components/LeftPanel/LeftPanel";

import classes from "./LoginForm.module.css";

function SingUp() {


    return (
    <>
      <LeftPanel page = {"exit"} linkNext={{link: "#", bool: false}} linkPrev={{link: "#", bool: false}} />

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

      <Header panel = "login" />  
      
    </>

    
    );
}

export default SingUp;