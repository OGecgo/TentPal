import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// components
import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";

// css
import classes from "./Menu.module.css"; // that styling used only on this page

import userData from "dataSet/userData";

function Menu() {
    useEffect(()=>{
        userData.resetData();
    },[]);

    return (
        <div className="centerContent">
            <div className={`${classes.centerContentHome}`}>
                <h1>TentPal</h1>
                <Link to="/selectLocation" className={classes.Link}>Start</Link>
                <p>ashoudkjflhaksdhfuahslkdfjhklasjhdlkfjhasldkj</p>
            </div>
            <LeftPanel />
            <Header panel={false} />
        </div>
    );
}

export default Menu;