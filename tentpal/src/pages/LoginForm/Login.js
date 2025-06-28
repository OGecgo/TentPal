import React, {useState, useEffect} from "react";

import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";

import classes from "./LoginForm.module.css";



function Login() {

    return (
    <>
      <LeftPanel page = {"exit"} linkNext={{link: "#", bool: false}} linkPrev={{link: "#", bool: false}} />

      <div className = {classes.centerContent}>
        <form onSubmit = {() => {alert("ERROR")}} className = {classes.form}>

          <label><b>Username</b></label><br/>
          <input type="text" placeholder="Enter Username" ></input><br/>
          <br/><br/>

          <label><b>Password</b></label><br/>
          <input type="password" placeholder="Enter Password" ></input><br/>
          <br/><br/>

          <button type="submit">Login</button>
        </form>
      </div>

      <Header panel = "login"/>  
      
    </>

    
    );
}

export default Login;