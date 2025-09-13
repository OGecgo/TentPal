import React, { useState } from "react";

import classes from "./Tent.module.css";


function Tent({ funct }) {

    const [num, setNum] = useState(1);

    const handleClick = (id) => {
        setNum(id);
        funct(id);
    };

    return (
        <div className={classes.panel}>
            <button id="1" onClick={() => handleClick(1)} className={`${classes.posB1} ${classes.ball}`}></button>
            <button id="2" onClick={() => handleClick(2)} className={`${classes.posB2} ${classes.ball}`}></button>
            <button id="3" onClick={() => handleClick(3)} className={`${classes.posB3} ${classes.ball}`}></button>
            <button id="4" onClick={() => handleClick(4)} className={`${classes.posB4} ${classes.ball}`}></button>

            {num === 1 && <span htmlFor="1" className={`${classes.selected} ${classes.posC1}`}></span>}
            {num === 2 && <span htmlFor="2" className={`${classes.selected} ${classes.posC2}`}></span>}
            {num === 3 && <span htmlFor="3" className={`${classes.selected} ${classes.posC3}`}></span>}
            {num === 4 && <span htmlFor="4" className={`${classes.selected} ${classes.posC4}`}></span>}
        </div>
    );
}

export default Tent;
