import React, { useState } from 'react';

import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";
import DragPanelsTent from './DragPanelsTent/DragPanelsTent';

function ChooseTent() {

    const [buttonNext, setButtonNext] = useState(true);
    const [message, setMessage] = useState("Drag and Drop tent you want to space block | Have a rain weather we sapose to take a rait tent");
    const setTent = (tent) => {
        if (tent === "") {
            setMessage("Drag and Drop tent you want to space block");
            setButtonNext(true);
        } else {
            setMessage("--->>Tent is selected. Now you can Next<<---");
            setButtonNext(false);
        }
    };

    return (
        <>
            <div className="centerContent">
                <DragPanelsTent returnTent = {setTent} />
            </div>
            <Header panel={"messageBox"} message={message} />
            <LeftPanel mode="createTent" levelPage={3} linkNext={{ link: "/lightPanel", bool: true, lock: buttonNext }} linkPrev={{ link: "/setStakes", bool: true }} />
        </>
    );
}

export default ChooseTent;
