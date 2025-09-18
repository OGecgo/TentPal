import React from "react";

import classes from "./InfoButton.module.css";

// paga can be imported or src

// default is first
// typeBlock <= transparent

function InfoButton({page, isOpen, setIsOpen,  typeColor, backgroundOff}){

	return(<>
            {isOpen ? 
                <>
                    <div className={typeColor === "transparent" ? `${classes.infoContainer} ${classes.infoContainerTypeTransparent}` : classes.infoContainer} >
                        <button className={classes.closeButton} onClick={() => {setIsOpen(false)}}>
                        ✖
                        </button>
                        <div className={classes.infoImageWrapper}>
                            <img src={page} alt="Error: No img" />
                        </div>
                    </div>
                    <button className={backgroundOff ? null : classes.closeBackground}  onClick={() => {setIsOpen(false)}}></button>
                </>
                :
                <></>
            }
        </>
	);

}

export default InfoButton;

