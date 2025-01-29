import React, {useEffect, useState} from "react";

import classes from "./StakesPlaced.module.css";

import Stake from "./Stake/Stake";
import Environmental from "./Environmental/Environmental";
import Panel from "./Panel/Panel";
import Tent from "./Tent/Tent";

let stakeVar = [50, 10, 20, 90];
let stakeUse = [true, false, false, false];

function StakesPlaced() {

    const [deepPres, setDeepPres] = useState(30);
    const [stake, SetStake] = useState(1);
    const deepRealPres = 30 + deepPres / 7;

    // remeber the stakes
    for (let i = 0; i < 4; i++) {
        if (stakeUse[i]) {
            stakeVar[i] = deepPres;
        }
    }

    useEffect(() => {
        playStake(stake);
    }, [stake]);

    const playStake = (num) => {
        switch(num){
            case 1:
                setDeepPres(stakeVar[0]);
                stakeUse = [true, false, false, false];
                break;
            case 2:
                setDeepPres(stakeVar[1]);
                stakeUse = [false, true, false, false];
                break;    
            case 3:
                setDeepPres(stakeVar[2]);
                stakeUse = [false, false, true, false];
                break;
            case 4:
                setDeepPres(stakeVar[3]);
                stakeUse = [false, false, false, true];
                break;
            default:
                break;
        }
    }

    return(
        <>
        <div className = {`centerContent ${classes.leftPanel}`}>
            <div className = {classes.topPanel}>
                <Tent funct = {SetStake} />
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