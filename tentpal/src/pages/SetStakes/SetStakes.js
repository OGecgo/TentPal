import React from "react";

import Header from "../../components/Header/Header";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import Environmental from "../../components/Environmental/Environmental";
import Stake from "../../components/Stake/Stake";


import classes from "./SetStakes.module.css";

function SetStakes() {



    return (
        <>
            <div className = "centerContent">
                <Stake />   
                <Environmental />
            </div>
            <Header panel = {"messageBox"} />
            <LeftPanel page = "makeTent" levelMakeTent = {2} linkNext = {{link: "#", bool: true, lock: true}} linkPrev = {{link: "/selectLocation", bool: true}}/>
        </>
    );
}

export default SetStakes;