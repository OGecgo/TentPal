import React from "react";

import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";
import StakesPlaced from "./StakesPlaced/StakesPlaced";

import help from "assets/info/Page2.png"

function SetStakes() {
    
    return (
        <>
            <StakesPlaced />
            <Header colorType={"success"} panel={true} message={"Adjust the stake settings if needed"} helpPage={help} />
            <LeftPanel mode="createTent" levelPage={2} linkNext={{link: "/setTent", bool: true, lock: false}} linkPrev = {{link: "/selectLocation", bool: true}}/>
        </>
    );
}

export default SetStakes;