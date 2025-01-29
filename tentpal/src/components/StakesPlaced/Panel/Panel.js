import React from "react";

import Slider from "../../Slider/Slider";

import classes from "./Panel.module.css";


function Panel({precent, precentSlider}) {

  const fun = (num) => {
  }

  return (
    <div className = {classes.panel}>
        <Slider precent = {precent} width={"70%"} marginLeft={`13%`} marginTop={"5vh"} setNewPercent={precentSlider} />
        <Slider precent = {fun} width={"70%"} marginLeft={`13%`} marginTop={"15vh"} />
    </div>
    );
}

export default Panel;