import React from "react";
import { Link } from "react-router-dom";

import InfoButton from "../InfoButton/InfoButton";

// css
import classes from "./Header.module.css";

// colorType <= warning, success, default
// panel <= true, false
function Header({ panel, colorType, message, helpPage, userOn }) {

    const returnMessageBox = () => {
        if (colorType === "warning")
            return <div className={`${classes.messageBox} ${classes.messageBoxWarning}`}>{message}</div>
        else if (colorType === "success")
            return <div className={`${classes.messageBox} ${classes.messageBoxSuccess}`}>{message}</div>
        else
            return <div className={classes.messageBox}>{message}</div>;
    }

    const renderPage = (panel) => {
        switch (panel) {
            case true:
                return (
                    <>
                        {returnMessageBox()}
                        <InfoButton page={helpPage} sizeX={"calc(40px + 5vh + 2vw - 20px)"} sizeY={"calc(40px + 5vh + 2vw - 20px)"} fontSize={25} top={"10px"} left={"calc(100% - (40px + 5vh + 2vw - 20px) - 20px - (40px + 5vh + 2vw - 20px)"} />
                        <div className={classes.user}>
                            {userOn ?
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
                                :
                                <></>
                            }
                        </div>
                    </>
                );
            default:
                return;
        }

    }

    return (
        <>
            <div className={classes.header}>
                {renderPage(panel)}
            </div>
        </>
    );
}

export default Header;