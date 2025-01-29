import React from "react";

import classes from "./Tent.module.css";

function Tent({funct}) {
    
    const handClick = (num) => {
        funct(num);
    }

    return(
        <>
            <div className = {classes.panel}>
                    <div onClick={() => handClick(1)} className = {`${classes.pos1} ${classes.ball}`}></div>
                    <div onClick={() => handClick(2)} className = {`${classes.pos2} ${classes.ball}`}></div><br />
                    <div onClick={() => handClick(3)} className = {`${classes.pos3} ${classes.ball}`}></div>
                    <div onClick={() => handClick(4)} className = {`${classes.pos4} ${classes.ball}`}></div>
            </div>
        </>
    );
}

export default Tent;