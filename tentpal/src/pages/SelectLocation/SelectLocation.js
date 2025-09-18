import React from "react";

import { useState, useEffect } from "react";

import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";
import Map from "components/Map/Map";

import userData from "dataSet/userData";

import classes from "./SelectLocation.module.css"
import classesMap from "components/Map/Map.module.css"

function SelectLocation() {

    // 2000 x 1500 width of map
    userData.countBlocks = 20;

    const createSeedRandomBlocks = () => {
        let newSeedArray = [];

        for (let row = 0; row < userData.countBlocks; row++) {
            for (let col = 0; col < userData.countBlocks; col++) {
                let r = Math.floor(Math.random() * 3);
                if (Math.random() >= 0.85){ 
                    if (Math.random() >= 0.3) {
                        r = 0;
                    }
                    else r = 1;
                }
                else r = 2;
                    

                newSeedArray.push(r);
            }
        }

        return newSeedArray;
    }

    const [lockNext, setLockNext] = useState(true);
    const [message, setMessage] = useState("You can select place for your tent on the map");


    const [pos, setPos] = useState(-1);
    const [blocksColors, setBlockColors] = useState(null);
    const [typeMessage, setTypeMessage] = useState("default");
    const [seedRandomBlock, setSeedRandomBlock] = useState( createSeedRandomBlocks() );



    useEffect(() => {
        setBlockColors(generateColorBlocks());
    }, [pos]);



    const takeMapPos = (x, y, type) => {
        if (type === 2) {
            setMessage("Red place can't be selected. Is dangerous place");
            setLockNext(true);
            setTypeMessage("default");
        }
        else if (type === 1) {
            setMessage("Yellow place can't be selected. Tha place is reserved");
            setLockNext(true);
            setTypeMessage("default");
        }
        else if (type === 0) {
            setMessage("You can select place for your tent on the map");
            setLockNext(true);
            setTypeMessage("default");
        }
        else {
            setMessage("--->>You selected place. Now you can continue<<---");
            setLockNext(false);
            setTypeMessage("success");
            userData.setPosMap(x,  y); // save top left pixel of block
        }
        setPos(x + y * userData.countBlocks);
    }





    const generateColorBlocks = () => {
        let block = [];
        for (let row = 0; row < userData.countBlocks; row++) {
            for (let col = 0; col < userData.countBlocks; col++) {
                let i = row + col * 20;
                let r = seedRandomBlock[i];
                if (r === 0) {
                    block.push(<div key={`${row} ${col}`} className={`${classes.colorBlock} ${classes.red}`} onClick={() => { takeMapPos(-1, -1, 2) }}></div>);
                } else if (r === 1) {
                    block.push(<div key={`${row} ${col}`} className={`${classes.colorBlock} ${classes.orange}`} onClick={() => { takeMapPos(-1, -1, 1) }}></div>);
                } else {
                    block.push(<div key={`${row} ${col}`} className={(pos === row + col * userData.countBlocks) ? `${classes.colorBlock} ${classes.green}` : `${classes.colorBlock}`} onClick={() => { takeMapPos(row, col, null) }}></div>);
                }
            }
        }

        return block;
    }


    return (
        <>
            <div className={`centerContent`}>
                <Map />
                <div className={classesMap.mapBlocks}>
                    {blocksColors}
                </div>
            </div>

            <LeftPanel mode="createTent" levelPage={1} linkNext={{ link: "/setStakes", bool: true, lock: lockNext }} linkPrev={{ link: "#", bool: false }} />
            <Header panel={true} colorType={typeMessage} message={message} />
        </>
    );
}

export default SelectLocation;
