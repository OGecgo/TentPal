import React, {useState} from "react";

import classes from "./Tent.module.css";

import Selected from "../../Selected/Selected";

function Tent({funct}) {

    const [top, setTop] = useState("calc(6vh - 8px)");
    const [left, setLeft] = useState("calc(3vw - 8px)");
    const [right, setRight] = useState("");
    const [bottom, setBottom] = useState("");

    const setInset = (top, left, right, bottom) => {
        setTop(top);
        setLeft(left);
        setRight(right);
        setBottom(bottom);
    }

    const handClick = (num) => {
        funct(num);
        switch (num) {
            case 1:
                setInset("calc(6vh - 8px)", "calc(3vw - 8px)", "", "");
                break;
            case 2:
                setInset("calc(6vh - 8px)", "", "calc(3vw - 8px)", "");
                break;
            case 3:
                setInset("", "calc(3vw - 8px)", "", "calc(6vh - 8px)");
                break;
            case 4:
                setInset("", "", "calc(3vw - 8px)", "calc(6vh - 8px)");
                break;
            default:
                setInset("calc(6vh - 8px)", "calc(3vw - 8px)", "", "");
                break;
        }
    }


    return(
        <>
            <div className = {classes.panel}>
                <Selected 
                    inset = {{top: top, left: left, right: right, bottom: bottom}}
                    width = "26px" height = "26px" color = "rgb(203, 200, 200)"
                ></Selected>
                <div onClick={() => handClick(1)} className = {`${classes.pos1} ${classes.ball}`}></div>
                <div onClick={() => handClick(2)} className = {`${classes.pos2} ${classes.ball}`}></div><br />
                <div onClick={() => handClick(3)} className = {`${classes.pos3} ${classes.ball}`}></div>
                <div onClick={() => handClick(4)} className = {`${classes.pos4} ${classes.ball}`}></div>
            </div>
        </>
    );
}

export default Tent;