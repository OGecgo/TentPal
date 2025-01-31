import React from "react";

import classes from "./Stake.module.css";

function Stake({topPosition, rotation}) {
    return(
        <>
            <style>{`
                :root{
                    --rotate-Stake: ${rotation};
                    --top-position-Stake: ${topPosition};
                }
            `}</style>
            <div className = {classes.block}>
                <div className = {classes.stick}></div>
                <div className = {classes.stickShadow}></div>
                <div className = {classes.cup}></div>
                <div className = {classes.triangle}></div>
            </div>
        </>
    );
}

export default Stake;

