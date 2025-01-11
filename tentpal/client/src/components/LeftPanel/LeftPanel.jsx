
import React from "react";

import { Link } from "react-router-dom";
import classes from "./LeftPanel.module.css";

function LeftPanel({page}) {

    const renderPage = () => {
        switch (page) {
            case "1":

                return (
                    <>
                        <div className = {classes.linkButton}>
                            <div className = {classes.upbuttons}>1. Take a position</div>
                            <div className = {classes.upbuttons}>2. Set the stakes</div>
                            <div className = {classes.upbuttons}>3. Take a tent</div>
                            <div className = {classes.upbuttons}>4. Light</div>

                            <Link to="#" className = {classes.midlebuttons}>Previous</Link>
                            <Link to="#" className = {classes.midlebuttons}>Next</Link>

                            <Link to="/Home" className = {classes.bottombuttons}>Exit</Link>
                        </div>

                    </>
                );

            default:
                return (
                    <Link to = "/Home"  className = {`${classes.linkButton}`} 
                    style = {{
                        top: "calc(80% - 10px - (40px + 5vh + 2vw))", 
                        fontSize: "calc(100% + 3vh)", 
                        position: "relative", 
                        backgroundColor:" #9c7670"
                    }}>
                    Exit
                    </Link>
                );
        }

    }
    return(

        <div className = {`${classes.left}`}>
            <Link to = "/Home"><img src = {require("../../assets/Logo.webp")} alt = "logo" /></Link>
            {renderPage()}
        </div>

    )
}

export default LeftPanel;