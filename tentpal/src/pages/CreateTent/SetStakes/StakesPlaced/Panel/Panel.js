import React from "react";

import Slider from "components/Slider/Slider";
import MessageBox from "components/MessageBox/MessageBox";

import classes from "./Panel.module.css";


function Panel({precentDeep, precentDeepSlider, precentDegre, precentDegreSlider}) {
  
  return (
      <div className={classes.panel}>
          <Slider precent={precentDeep} width={"70%"} Left={`13%`} Top={"35%"} setNewPercent={precentDeepSlider} />
          <Slider precent={precentDegre} width={"70%"} Left={`13%`} Top={"80%"} setNewPercent={precentDegreSlider} />
          <MessageBox message = {"Set Deep For Stake"} width={"95%"} height={"20%"} left = {"1vw"} top = {"1vw"}/>
          <MessageBox message = {"Set Degre For Stake"} width={"95%"} height={"20%"} left = {"1vw"} top = {"50%"}/>

      </div>
    );
}

export default Panel;
