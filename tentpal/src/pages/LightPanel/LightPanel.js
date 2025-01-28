import mycss from './LightPanel.module.css';
import React, { useState } from "react";
import LeftPanel from '../../components/LeftPanel/LeftPanel';
import Header from '../../components/Header/Header';
import LightManually from '../../components/LightManually/LightManually';



function LightPanel(){
return(
    
    <>
    <div className = "centerContent" >
   
        <div className={mycss.panel}>
            <LightManually/>
        </div>
        <div className={mycss.showTent}>
            <p>I am in ShowTent</p>
        </div>
    </div>
    <LeftPanel page = "1" />
    <Header/>
  </>
);
}

export default LightPanel;