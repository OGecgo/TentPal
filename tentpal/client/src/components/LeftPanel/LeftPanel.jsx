
import React from "react";

import { Link } from "react-router-dom";
import classes from "./LeftPanel.module.css";

function LeftPanel({page}) {

    const renderPage = () => {
        switch (page) {
            case "1":

                return (
                    <>
                        <div className = {classes.blocks}>
                            <div className = {classes.upbuttons}>
                                <div className = {`${classes.text}`}>1. Take a position</div>
                                <div className = {`${classes.text}`}>2. Set the stakes</div>
                                <div className = {`${classes.text}`}>3. Take a tent</div>
                                <div className = {`${classes.text}`}>4. Light</div>
                            </div>

                            <div className = {classes.midlebuttons}>
                                <Link to="#" className = {`${classes.text}`}>Previous</Link>
                                <Link to="#" className = {`${classes.text}`}>Next</Link>
                            </div>

                            <Link to="/Home" className = {`${classes.bottombuttons} ${classes.text}`}>Exit</Link>
                        </div>

                    </>
                );

            default:
                return (
                    <Link to = "/Home"  className = {`${classes.blocks}`} 
                    style = {{
                        top: "calc(80% - 10px - (40px + 5vh + 2vw))", 
                        fontSize: "calc(100% + 3vh)", 
                        position: "relative", 
                        backgroundColor:" #9c7670",
                        textDecoration: "none",
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