import React, { useState, useEffect } from 'react';

import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";
import DragPanelsTent from './DragPanelsTent/DragPanelsTent';

import userData from "dataSet/userData";

function SetTent() {

    const [buttonNext, setButtonNext] = useState(true);
    const [message, setMessage] = useState("Drag and Drop tent you want to space block | Have a rain weather we sapose to take a rait tent");
    const [start, setStart] = useState("none");


    useEffect(() => {
        setStart(userData.getTentType());
    }, []);

    const tentMove = (tent) => {
        if (tent === "") {
            setMessage("Drag and Drop tent you want to space block");
            setButtonNext(true);
        } else {
            setMessage("--->>Tent is selected. Now you can Next<<---");
            setButtonNext(false);
        }
        userData.setTentType(tent);
    };

    return (
        <>
            <div className="centerContent">
                <DragPanelsTent returnTent = {tentMove} />
            </div>
            <Header panel={"messageBox"} message={message} />
            {start === "none"? 
                <LeftPanel mode="createTent" levelPage={3} linkNext={{ link: "/Home", bool: true, lock: buttonNext }} linkPrev={{ link: "/setStakes", bool: true }} />
                :
                <LeftPanel mode="userMode" levelPage={0} linkNext={{ link: "/Home", bool: false, lock: false }} linkPrev={{ link: "/Home", bool: true }} />
            }
        </>
    );
}

export default SetTent;
