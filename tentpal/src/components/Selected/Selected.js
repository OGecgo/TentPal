import React from "react";

import classes from "./Selected.module.css";

function Selected({inset, width, height, color}) {

    return(
        <>
            <style>
                {`
                    :root{
                        --top: ${inset.top};
                        --left: ${inset.left};
                        --right: ${inset.right};
                        --bottom: ${inset.bottom};
                        --width: ${width};
                        --height: ${height};
                        --color: ${color};
                    }
                `}
            </style>
            <div className = {classes.block}></div>
        </>
    );    
}

export default Selected;