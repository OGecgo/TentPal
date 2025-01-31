import React from "react";

import classes from "./Selected.module.css";

function Selected({inset, width, height, color}) {

    return(
        <>
            <div className = {classes.block}
                style={{
                        width: width,
                        height: height,
                        borderColor: color,
                        left: inset.left,
                        right: inset.right,
                        top: inset.top,
                        bottom: inset.bottom
                    }}
            ></div>
        </>
    );    
}

export default Selected;