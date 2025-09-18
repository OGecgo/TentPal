import React from "react";

import { useState } from "react";

import InfoButton from "components/InfoButton/InfoButton";

// css
import classes from "./Header.module.css";

// colorType <= warning, success, default
// panel <= true, false
function Header({ panel, colorType, message, helpPage, userOn }) {

    const [buttonOn, setButtonOn] = useState(false);

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
                        <button className={classes.helpButton} onClick={() => {setButtonOn(true)} }> HELP </button>
                        
                        {buttonOn ?                                                         
                            <div className={classes.infoPage}>                        
                                <InfoButton page={helpPage} isOpen={buttonOn} setIsOpen={setButtonOn}/> 
                            </div>
                        : 
                            <></>
                        }

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