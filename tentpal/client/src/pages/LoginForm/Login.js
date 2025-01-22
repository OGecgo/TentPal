import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import LeftPanel from "../../components/LeftPanel/LeftPanel";

import classes from "./LoginForm.module.css";


function Login() {


    return (
    <>
      <LeftPanel />

      <div className = {classes.centerContent}>
        <form className = {classes.form}>
          <label for="uname"><b>Username</b></label><br/>
          <input type="text" placeholder="Enter Username" name="uname" required></input><br/>
          <br/><br/>
          <label for="psw"><b>Password</b></label><br/>
          <input type="password" placeholder="Enter Password" name="psw" required></input><br/>
          <br/><br/>
          <button type="submit">Login</button>
        </form>
      </div>

      <Header />  
      
    </>

    
    );
}

export default Login;