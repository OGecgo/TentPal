
import React from "react";

import { Link } from "react-router-dom";
import classes from "./LeftPanel.module.css";

function LeftPanel(menu) {


    return(

        <div className = {`${classes.left}`}>
            <Link to = "/Home"><img src = {require("../../assets/Logo.webp")} alt = "logo" /></Link>

            {!(menu === "true") && (
                <Link to = "/Home"  className = {`${classes.linkButton}`} 
                style={{
                    top: "calc(80% - 10px - (40px + 5vh + 2vw))", 
                    fontSize: "calc(100% + 3vh)", 
                    position: "relative", 
                    backgroundColor:" #9c7670"
                }}>
                Exit
                </Link>
            )}
        </div>

    )
}

export default LeftPanel;