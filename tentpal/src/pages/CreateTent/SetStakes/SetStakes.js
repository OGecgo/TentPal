import React from "react";

import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";
import StakesPlaced from "./StakesPlaced/StakesPlaced";

function SetStakes() {
    
    return (
        <>
            <StakesPlaced />
            <Header panel = {"messageBox"} message={"Choose stake and give properties"} />
            <LeftPanel page = "makeTent" levelMakeTent = {2} linkNext = {{link: "/chooseTent", bool: true, lock: false}} linkPrev = {{link: "/selectLocation", bool: true}}/>
        </>
    );
}

export default SetStakes;