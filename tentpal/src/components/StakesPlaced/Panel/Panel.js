import React from "react";

import Slider from "../../Slider/Slider";

import classes from "./Panel.module.css";


function Panel({precentDeep, precentDeepSlider, precentDegre, precentDegreSlider}) {

  const fun = (num) => {
  }

  return (
      <div className={classes.panel}>
          <Slider precent={precentDeep} width={"70%"} marginLeft={`13%`} marginTop={"5vh"} setNewPercent={precentDeepSlider} />
          <Slider precent={precentDegre} width={"70%"} marginLeft={`13%`} marginTop={"15vh"} setNewPercent={precentDegreSlider} />
      </div>
    );
}

export default Panel;