
import React from "react";
import { Link } from "react-router-dom";

import classes from "./LeftPanel.module.css";

function LeftPanel({page, levelMakeTent, linkNext, linkPrev}) {
    const links = () => {
        return (
            <>
                {linkNext.bool && (<Link to = {!linkNext.lock ? linkNext.link : "#"} style={{ background: !linkNext.lock ? 'rgb(120, 122, 179)' : 'rgb(169, 169, 193)' }} className = {`${classes.text} ${classes.nextButton}`}>Next</Link>)}
                {linkPrev.bool && (<Link to = {linkPrev.link} className = {`${classes.text} ${classes.prevButton}`}>Previous</Link>)}
            </>

        );

    }

    const createTent = (lvl) => {

        return (
            <div>
                <div className = {`${classes.content1} ${classes.text}`} style={{ background: lvl === 1 ? "rgb(100, 104, 194)" : "rgb(138, 139, 157)" }}>1. Take a position</div>
                <div className = {`${classes.content2} ${classes.text}`} style={{ background: lvl === 2 ? "rgb(100, 104, 194)" : "rgb(138, 139, 157)" }}>2. Set the stakes</div>
                <div className = {`${classes.content3} ${classes.text}`} style={{ background: lvl === 3 ? "rgb(100, 104, 194)" : "rgb(138, 139, 157)" }}>3. Take a tent</div>
                <div className = {`${classes.content4} ${classes.text}`} style={{ background: lvl === 4 ? "rgb(100, 104, 194)" : "rgb(138, 139, 157)" }}>4. Light</div>
            </div>
        );
    }

    const Panel = () => { 
        switch (page) {
            case "makeTent":
                return (
                    
                    <div className = {classes.blocks}>
                        {createTent(levelMakeTent)}
                        {links()}
                        <Link to="/Home" className = {`${classes.exitButton} ${classes.text}`}>Exit</Link>
                    </div>
                
                );

            case "exit":
                return (
                    <div className = {classes.blocks}>
                        {links()}
                        <Link to = "/Home"  className = {`${classes.exitButton} ${classes.text}`}>
                        Exit
                        </Link>
                    </div>
                );
            default:
                return null;
        }

    }
    return(

        <div className = {`${classes.left}`}>
            <Link to = "#"><img src = {require("assets/Logo.webp")} alt = "logo" /></Link>
            {Panel()}
        </div>

    )
}

export default LeftPanel;