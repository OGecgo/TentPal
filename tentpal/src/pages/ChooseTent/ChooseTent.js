import React, { useState } from 'react';

import Header from "../../components/Header/Header";
import LeftPanel from "../../components/LeftPanel/LeftPanel";

import classes from "./ChooseTent.module.css";

function ChooseTent() {
    const [imageSrc, setImageSrc] = useState('');

    const handleDragStart = (e) => {// what image i need
        e.dataTransfer.setData('imageSrc', e.target.src);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setImageSrc(e.dataTransfer.getData('imageSrc'));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="centerContent">
                <div className={classes.panels}>
                    <div className={classes.leftPanel}>
                        <div 
                            className={classes.inputContaner} 
                            onDrop={handleDrop} 
                            onDragOver={handleDragOver}
                        >
                            {imageSrc && <img src={imageSrc} alt= {`Dropped ${imageSrc}`} />}
                        </div>
                    </div>
                    <div className={classes.rightPanel}>
                        <img src="path/to/tent1.jpg" alt="Tent 1" className={classes.tent1} draggable onDragStart={handleDragStart} />
                        <img src="path/to/tent2.jpg" alt="Tent 2" className={classes.tent2} draggable onDragStart={handleDragStart} />
                        <img src="path/to/tent3.jpg" alt="Tent 3" className={classes.tent3} draggable onDragStart={handleDragStart} />
                        <img src="path/to/tent4.jpg" alt="Tent 4" className={classes.tent4} draggable onDragStart={handleDragStart} />
                    </div>
                </div>
            </div>
            <Header panel={"messageBox"} message={"Choose tent you want"} />
            <LeftPanel page="makeTent" levelMakeTent={3} linkNext={{ link: "#", bool: true, lock: false }} linkPrev={{ link: "/setStakes", bool: true }} />
        </>
    );
}

export default ChooseTent;