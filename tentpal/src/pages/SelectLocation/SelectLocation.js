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
    const countBlocks = 20;

    const createSeedRandomBlocks = () => {
        let newSeedArray = [];

        for (let row = 0; row < countBlocks; row++) {
            for (let col = 0; col < countBlocks; col++) {
                let r = Math.floor(Math.random() * 3);
                if (r === 1) {
                    r = Math.floor(Math.random() * 3);
                }
                if (r === 0) {
                    r = Math.floor(Math.random() * 3);
                    if (r === 0) {
                        r = Math.floor(Math.random() * 3);
                    }
                }
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



    const takeMapPos = (x, y) => {
        if (x === -3) {
            setMessage("Red place can't be selected. Is dangerous place");
            setLockNext(true);
            setTypeMessage("default");
        }
        else if (x === -2) {
            setMessage("Yellow place can't be selected. Tha place is reserved");
            setLockNext(true);
            setTypeMessage("default");
        }
        else if (x === -1) {
            setMessage("You can select place for your tent on the map");
            setLockNext(true);
            setTypeMessage("default");
        }
        else {
            setMessage("--->>You selected place. Now you can continue<<---");
            setLockNext(false);
            setTypeMessage("success");
            userData.setPosMap(x * 100, y * 75); // save top left pixel of block
        }
        setPos(x + y * countBlocks);
    }





    const generateColorBlocks = () => {
        let block = [];
        for (let row = 0; row < countBlocks; row++) {
            for (let col = 0; col < countBlocks; col++) {
                let i = row + col * 20;
                let r = seedRandomBlock[i];
                if (r === 0) {
                    block.push(<div key={`${row} ${col}`} className={`${classes.colorBlock} ${classes.red}`} onClick={() => { takeMapPos(-3, -3) }}></div>);
                } else if (r === 1) {
                    block.push(<div key={`${row} ${col}`} className={`${classes.colorBlock} ${classes.orange}`} onClick={() => { takeMapPos(-2, -2) }}></div>);
                } else {
                    block.push(<div key={`${row} ${col}`} className={(pos === row + col * countBlocks) ? `${classes.colorBlock} ${classes.green}` : `${classes.colorBlock}`} onClick={() => { takeMapPos(row, col) }}></div>);
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
