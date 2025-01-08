import React from "react";
import { Link } from "react-router-dom";

// components
import Header from "../components/Headers/Header";

// css
import classes from "../styles/Home.module.css"; // that styling used only on this page
import "../styles/LeftPanel.css"; // that styling used on all pages because i import that

function Home() {



  return (
    <>

      <div className = {classes.centerContent}>
        <h1>TentPal</h1>
        <Link to = "/choosePosition" className = {classes.Link}>Start</Link>
        <p></p>
      </div>
      <div className = "left">
        <Link to = "/Home"  className = "linkButton" style={{top: "80%", fontSize: "calc(100% + 3vh)", position: "relative"}} >Exit</Link>
      </div>
      <Header />
    </>

    
  );
}

export default Home;