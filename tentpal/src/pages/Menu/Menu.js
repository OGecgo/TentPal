import React from "react";
import { Link } from "react-router-dom";

// components
import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";

// css
import classes from "./Menu.module.css"; // that styling used only on this page

function Menu() {
  return (
    <div className="centerContent">
      <div className = {`${classes.centerContentHome}`}>
        <h1>TentPal</h1>
        <Link to = "/selectLocation" className = {classes.Link}>Start</Link>
        <p>ashoudkjflhaksdhfuahslkdfjhklasjhdlkfjhasldkj</p>
      </div>
      <LeftPanel />
      <Header panel = "login" />
    </div>
  );
}

export default Menu;