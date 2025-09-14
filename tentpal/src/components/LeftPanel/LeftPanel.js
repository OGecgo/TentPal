
import React from "react";
import { Link } from "react-router-dom";

import classes from "./LeftPanel.module.css";


// modes <= createTent - userMode

// links <= {lock: , link: , bool:} 
// lock <= can user use it ?
// link <= move to page
// bool <= turn off link

function LeftPanel({mode, levelPage, linkNext, linkPrev}) {
    const links = () => {
        return (
            <>
                {linkNext.bool && (<Link to = {!linkNext.lock ? linkNext.link : "#"}  className = {!linkNext.lock ? `${classes.text} ${classes.nextButton}` : `${classes.text} ${classes.nextButton} ${classes.buttonOff}`}>Next</Link>)}
                {linkPrev.bool && (<Link to = { linkPrev.link}                        className = {                 `${classes.text} ${classes.prevButton}`                                                               }>Back</Link>)}
            </>

        );

    }

    const createTent = (lvl) => {
        return (
            <div>
                <div className = {lvl === 1 ? `${classes.content1} ${classes.text} ${classes.blockColorOn}` : `${classes.content1} ${classes.text} ${classes.blockColorOff}`}>1. Take a position</div>
                <div className = {lvl === 2 ? `${classes.content2} ${classes.text} ${classes.blockColorOn}` : `${classes.content2} ${classes.text} ${classes.blockColorOff}`}>2. Set the stakes</div>
                <div className = {lvl === 3 ? `${classes.content3} ${classes.text} ${classes.blockColorOn}` : `${classes.content3} ${classes.text} ${classes.blockColorOff}`}>3. Take a tent</div>
            </div>
        );
    }

    const Panel = () => { 
        switch (mode) {
            case "createTent":
                return (
                    <>
                        <Link to = "/Menu"><img src = {require("assets/Logo.webp")} alt = "logo" /></Link>
                        <div className = {classes.blocks}>
                            {createTent(levelPage)}
                            {links()}
                            <Link to="/Menu" className = {`${classes.exitButton} ${classes.text}`}>Exit</Link>
                        </div>
                    </>
                );

            case "userMode":
                return (
                    <>
                        <Link to = "/Home"><img src = {require("assets/Logo.webp")} alt = "logo" /></Link>
                        <div className = {classes.blocks}>
                            {links()}
                            <Link to = "/Menu"  className = {`${classes.exitButton} ${classes.text}`}>Exit</Link>
                        </div>
                    </>
                );
            default:
                return (
                    <>
                        <Link to = "/Menu"><img src = {require("assets/Logo.webp")} alt = "logo" /></Link>
                    </>
                );
        }

    }
    return(

        <div className = {`${classes.left}`}>
            {Panel()}
        </div>

    )
}

export default LeftPanel;