import React from "react";

import Slider from "../../Slider/Slider";

import classes from "./Panel.module.css";


function Panel({precent}) {

  const fun = (num) => {
    console.log(num);
  }

  return (
    <div className = {classes.panel}>
        <Slider precent = {precent} width={"calc((50vw - 76px - 3vw) - 5% * 2)"} marginLeft={`5vw`} marginTop={"5vh"} />
        <Slider precent = {fun} width={"calc((50vw - 76px - 3vw) - 5% * 2)"} marginLeft={`5vw`} marginTop={"15vh"} />
    </div>
    );
}

export default Panel;