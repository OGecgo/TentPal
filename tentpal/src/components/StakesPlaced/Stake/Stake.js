import React from "react";

import classes from "./Stake.module.css";

function Stake({topPosition, rotation}) {
    return(
        <>
            <style>{`
                :root{
                    --rotate: ${rotation};
                    --header-height: calc(40px + 5vh + 2vw);
                    --handrent-present: (75vh - var(--header-height));
                    --height-stick: calc( 45vh);
                    --top-position: ${topPosition};
                    --low-position: calc( var(--top-position) + var(--height-stick) );
                }
            `}</style>
            <div className = {classes.block}>
                <div className = {classes.stick}></div>
                <div className = {classes.cup}></div>
                <div className = {classes.triangle}></div>
            </div>
        </>
    );
}

export default Stake;

