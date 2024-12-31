import React from "react";
import { Link } from "react-router-dom";

// components
import HeaderNoLogined from "../components/Headers/HeaderNoLogined";
import HeaderLogined from "../components/Headers/HeaderLogined";

// css
import classes from "../styles/Home.module.css"; // that styling used only on this page
import "../styles/LeftPanel.css"; // that styling used on all pages because i import that

function Home() {



  return (
    <>

      <div className = {classes.centerContent}>
        <h1>TentPal</h1>
        <button>Start</button>
        <p></p>
      </div>
      <div className = "left">
        <Link  className = "linkButton" style={{top: "80%", fontSize: "calc(100% + 3vh)", position: "relative"}} >Exit</Link>
      </div>
      <HeaderNoLogined />
    </>

    
  );
}

export default Home;