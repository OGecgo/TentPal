import React, {useEffect, useState} from "react";

import classes from "./StakesPlaced.module.css";

import Stake from "./Stake/Stake";
import Environmental from "./Environmental/Environmental";
import Panel from "./Panel/Panel";
import Tent from "./Tent/Tent";

function StakesPlaced() {

    const [deepPres, setDeepPres] = useState(30);
    const [Steke, SetSteke] = useState(1);
    const deepRealPres = 30 + deepPres / 7;

    useEffect(() => {
        playStake(Steke);
    }, [Steke]);

    const playStake = (num) => {
        switch(num){
            case 1:
                setDeepPres(30);
                break;
            case 2:
                setDeepPres(40);
                break;    
            case 3:
                setDeepPres(50);
                break;
            case 4:
                setDeepPres(60);
                break;
            default:
                break;
        }
    }

    return(
        <>
        <div className = {`centerContent ${classes.leftPanel}`}>
            <div className = {classes.topPanel}>
                <Tent funct = {SetSteke} />
            </div>
            <div className = {classes.bottomPanel}>
                <Panel precent = {setDeepPres} precentSlider = {deepPres}/>
            </div>
        </div>
        <div className = {`centerContent ${classes.rightPanel}`}>
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