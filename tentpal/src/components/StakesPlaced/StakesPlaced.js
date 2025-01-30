import React, {useEffect, useState} from "react";

import classes from "./StakesPlaced.module.css";

import Stake from "./Stake/Stake";
import Environmental from "./Environmental/Environmental";
import Panel from "./Panel/Panel";
import Tent from "./Tent/Tent";

let stakeDeepVar = [50, 50, 50, 50];
let stakeDegreVar = [50, 50, 50, 50];
let stakeUse = [true, false, false, false];
let startWith = true;

function StakesPlaced() {

    const [deepPres, setDeepPres] = useState(50);
    const [degrePres, setDegrePres] = useState(50);
    const [stake, SetStake] = useState(1);
    const deepRealPres = 30 + deepPres / 7;
    const degreRealPres = -10 + degrePres / 5;

    // remeber the stakes
    for (let i = 0; i < 4; i++) {
        if (stakeUse[i]) {
            stakeDeepVar[i] = deepPres;
            stakeDegreVar[i] = degrePres;
        }
    }
    useEffect(() => {
        startWith = false;
    }, [deepPres, degrePres]);

    useEffect(() => {
        startWith = true;
        playStake(stake);
    }, [stake]);

    const playStake = (num) => {
        switch(num){
            case 1:
                setDeepPres(stakeDeepVar[0]);
                setDegrePres(stakeDegreVar[0]);
                stakeUse = [true, false, false, false];
                break;
            case 2:
                setDeepPres(stakeDeepVar[1]);
                setDegrePres(stakeDegreVar[1]);
                stakeUse = [false, true, false, false];
                break;    
            case 3:
                setDeepPres(stakeDeepVar[2]);
                setDegrePres(stakeDegreVar[2]);
                stakeUse = [false, false, true, false];
                break;
            case 4:
                setDeepPres(stakeDeepVar[3]);
                setDegrePres(stakeDegreVar[3]);
                stakeUse = [false, false, false, true];
                break;
            default:
                break;
        }
    }
    
    return(
        <>
            <div className={`centerContent ${classes.leftPanel}`}>
                <div className={classes.topPanel}>
                    <Tent funct={SetStake} />
                </div>
                <div className={classes.bottomPanel}>
                    <Panel 
                        precentDeep={setDeepPres} precentDeepSlider={startWith ? deepPres : undefined}
                        precentDegre={setDegrePres} precentDegreSlider={startWith ? degrePres : undefined}
                    />
                </div>
            </div>
            <div className={`centerContent ${classes.rightPanel}`}>
                <Environmental />
                <Stake 
                    topPosition={`calc(${deepRealPres}vh - var(--top-Panel-Height))`} 
                    rotation={`${degreRealPres}deg`}
                />   
            </div>
        </>
    );
}

export default StakesPlaced;