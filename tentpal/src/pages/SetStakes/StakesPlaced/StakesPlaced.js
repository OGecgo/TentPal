import React, {useEffect, useState} from "react";

import classes from "./StakesPlaced.module.css";

import Stake from "./Stake/Stake";
import Environmental from "components/Environmental/Environmental";
import Panel from "./Panel/Panel";
import Tent from "./Tent/Tent";

import stakesData from "dataSet/tentConfig/stakesData";



function StakesPlaced() {

    const [stake, SetStake] = useState(1);

    const [deepPres , setDeepPres ] = useState(stakesData.getStakesData(0, 0));
    const [degrePres, setDegrePres] = useState(stakesData.getStakesData(0, 1));

    const deepRealPres  = 30 + 100*deepPres / 10;
    const degreRealPres = 10 - 100*degrePres / 5;


    // Update the current stake's values when sliders change
    useEffect(() => {
        stakesData.setStakesData(deepPres , 0, stake - 1);
        stakesData.setStakesData(degrePres, 1, stake - 1);
    }, [deepPres, degrePres]);

    // Load stake values when switching stakes
    useEffect(() => {
        playStake(stake);
    }, [stake]);

    const playStake = (num) => {
        switch(num){
            case 1:
                setDeepPres (stakesData.getStakesData(0, 0));
                setDegrePres(stakesData.getStakesData(1, 0));
                break;
            case 2:
                setDeepPres (stakesData.getStakesData(0, 1));
                setDegrePres(stakesData.getStakesData(1, 1));
                break;    
            case 3:
                setDeepPres (stakesData.getStakesData(0, 2));
                setDegrePres(stakesData.getStakesData(1, 2));
                break;
            case 4:
                setDeepPres (stakesData.getStakesData(0, 3));
                setDegrePres(stakesData.getStakesData(1, 3));
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
                    <div className={classes.natureSize}>
                        <Environmental time={"day"} place={"bottom"}/>
                    </div>
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