import React from "react";

import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";
import StakesPlaced from "./StakesPlaced/StakesPlaced";

function SetStakes() {
    
    return (
        <>
            <StakesPlaced />
            <Header panel = {"messageBox"} message={"Choose stake and give properties"} />
            <LeftPanel mode="createTent" levelPage={2} linkNext={{link: "/setTent", bool: true, lock: false}} linkPrev = {{link: "/selectLocation", bool: true}}/>
        </>
    );
}

export default SetStakes;