import React from "react";

import Header from "../../components/Header/Header";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import StakesPlaced from "../../components/StakesPlaced/StakesPlaced";

function SetStakes() {
    
    return (
        <>
            <StakesPlaced />
            <Header panel = {"messageBox"} message={"Set the stake how you want"} />
            <LeftPanel page = "makeTent" levelMakeTent = {2} linkNext = {{link: "#", bool: true, lock: false}} linkPrev = {{link: "/selectLocation", bool: true}}/>
        </>
    );
}

export default SetStakes;