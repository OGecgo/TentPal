import React, {useState} from "react";

import classes from "./StakesPlaced.module.css";

import Stake from "./Stake/Stake";
import Environmental from "./Environmental/Environmental";
import Panel from "./Panel/Panel";
import Tent from "./Tent/Tent";

function StakesPlaced() {

    const [deepPres, setDeepPres] = useState(30);
    const deepRealPres = 30 + deepPres / 7;
    return(
        <>
        <div className = "centerContent">
            <div className = {classes.topPanel}>
                <Tent />
            </div>
            <div className = {classes.bottomPanel}>
                <Panel precent = {setDeepPres}/>
            </div>
        </div>
        <div className = {`centerContent ${classes.leftPanel}`}>
                <Environmental />
                <Stake 
                    topPosition = {`calc(${deepRealPres}vh - var(--top-Panel-Height))`} 
                    lowPosition = {`calc(${deepRealPres}vh + var(--top-Panel-Height) + var(--height-stick))`}
                />   
        </div>
        </>
    );
}

export default StakesPlaced;