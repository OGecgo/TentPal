import React, {useEffect, useState} from "react";

import classes from "./StakesPlaced.module.css";

import Stake from "./Stake/Stake";
import Environmental from "./Environmental/Environmental";
import Panel from "./Panel/Panel";
import Tent from "./Tent/Tent";

let stakeDeepVar = [50, 50, 50, 50];
let stakeDegreVar = [50, 50, 50, 50];
let stakeUse = [true, false, false, false];

function StakesPlaced() {

    const [deepPres, setDeepPres] = useState(0.5);
    const [degrePres, setDegrePres] = useState(0.5);
    const [stake, SetStake] = useState(1);
    const deepRealPres = 30 + 100*deepPres / 10;
    const degreRealPres = 10 - 100*degrePres / 5;

    useEffect(() => {
        for (let i = 0; i < 4; i++) {
            stakeDeepVar[i] = deepPres;
            stakeDegreVar[i] = degrePres;
        }
    
    }, [])

    // Update the current stake's values when sliders change
    useEffect(() => {
        for (let i = 0; i < 4; i++) {
            if (stakeUse[i]) {
                stakeDeepVar[i] = deepPres;
                stakeDegreVar[i] = degrePres;
                break;
            }
        }
    }, [deepPres, degrePres]);

    // Load stake values when switching stakes
    useEffect(() => {
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
    
    return (
        <>
            <div className={`centerContent`}>
                <div className={classes.leftPanel}>
                    <div className={classes.topPanel}>
                        <Tent funct={SetStake} />
                    </div>
                    <div className={classes.bottomPanel}>
                        <Panel 
                            precentDeep={setDeepPres} precentDeepSlider={deepPres}
                            precentDegre={setDegrePres} precentDegreSlider={degrePres}
                        />
                    </div>
                </div>
                <div className={classes.rightPanel}>
                    <Environmental />
                    <Stake 
                        topPosition={`calc(${deepRealPres}vh - var(--top-Panel-Height))`} 
                        rotation={`${degreRealPres}deg`}
                    />   
                </div>
            </div>
        </>
    );
}

export default StakesPlaced;