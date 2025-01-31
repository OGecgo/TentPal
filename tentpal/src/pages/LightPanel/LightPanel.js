import mycss from './LightPanel.module.css';
import React, { useState } from "react";
import LeftPanel from '../../components/LeftPanel/LeftPanel';
import Header from '../../components/Header/Header';
import LightManually from '../../components/LightManually/LightManually';
import LightComplex from '../../components/LightComplex/LightComplex';





function LightPanel(){
return(
    <>
    <div className = "centerContent" >
        <div className={mycss.panel}>
             <LightComplex/>
            <LightManually/>

        </div>
        <div className={mycss.showTent}>
            <p>I am in ShowTent</p>
        </div>
    </div>
    <LeftPanel page = "makeTent" levelMakeTent = {4} linkNext = {{link: "#", bool: true, lock: true}} linkPrev = {{link: "#", bool: true}}/>
    <Header panel = {"messageBox"} message={'Light panel'}/>
  </>
);
}
export default LightPanel;

