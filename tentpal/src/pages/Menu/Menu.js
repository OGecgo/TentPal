import React from "react";
import { Link } from "react-router-dom";


import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";

import classes from "./Menu.module.css";

import userData from "dataSet/userData";


function Menu() {
    const resetData = (e) => {
        if (userData.getUserMode() === true){
            if(!window.confirm("Do You Want To Discard Your Old Tent ?")) {
                e.preventDefault();
                return;
            }
        }
        userData.resetData();
    };

    return (
        <>
            <div className="centerContent">
                <h1>TentPal</h1>
                <div className={classes.links}>
                    <Link to="/selectLocation" className={classes.Link} onClick={(e) => {resetData   (e);}}>New Texnt</Link>
                    <Link to={userData.getUserMode() ? "/Home" : "#"}  className={userData.getUserMode() ? classes.Link : `${classes.Link} ${classes.LinkDisable}`}>Existing Tent</Link>
                </div>

            </div>
            <LeftPanel />
            <Header panel={false} />
        </>
    );
}

export default Menu;