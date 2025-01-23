import React from "react";
import { Link } from "react-router-dom";

// components
import Header from "../../components/Header/Header";
import LeftPanel from "../../components/LeftPanel/LeftPanel";

// css
import classes from "./Home.module.css"; // that styling used only on this page

function Home() {



  return (
    <>

      <div className = {classes.centerContent}>
        <h1>TentPal</h1>
        <Link to = "/selectLocation" className = {classes.Link}>Start</Link>
        <p></p>
      </div>
      <LeftPanel />
      <Header panel = "login" />
    </>

    
  );
}

export default Home;