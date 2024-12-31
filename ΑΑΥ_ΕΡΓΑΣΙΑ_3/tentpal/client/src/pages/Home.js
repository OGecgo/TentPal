import React from "react";

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
        <button onClick={{}} className = "bottombuttons" style={{top: "80%", fontSize: "calc(100% + 3vh)"}} >exit</button>
      </div>
      <HeaderNoLogined />
    </>

    
  );
}

export default Home;