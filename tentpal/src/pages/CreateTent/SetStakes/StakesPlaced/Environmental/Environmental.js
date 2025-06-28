import React from "react";

import classes from "./Environmental.module.css";

function Environmental() {

    return (
        <>
            <div className = {classes.container}>
                <div className = {classes.sky}></div>
                <div className = {classes.grass}></div>
                <div className = {classes.grassShadow}></div>
                <div className = {classes.dirt}></div>
                <div className = {classes.dirtShadow}></div>
            </div>
            
            
        </>
    );
}

export default Environmental;