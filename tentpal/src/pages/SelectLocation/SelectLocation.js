import React from "react";

import { useState, useEffect } from "react";

import Header from "components/Header/Header";
import LeftPanel from "components/LeftPanel/LeftPanel";
import Map from "components/Map/Map";

import mapData from "dataSet/mapData";

import classes from "./SelectLocation.module.css"
import classesMap from "components/Map/Map.module.css"

import help from "assets/info/Page1.png"

function SelectLocation() {

    const [lockNext, setLockNext] = useState(true);
    const [message, setMessage] = useState("Select a location for your tent on the map");


    const [pos, setPos] = useState(-1);
    const [blocksColors, setBlockColors] = useState(null);
    const [typeMessage, setTypeMessage] = useState("default");
    const [seedRandomBlock, setSeedRandomBlock] = useState([]);


    useEffect(() => {
        if (mapData.getSelectLocation() == null)
            mapData.setSelectLocation(createSeedRandomBlocks());
        setSeedRandomBlock(mapData.getSelectLocation());

        setBlockColors(generateColorBlocks());
        setPos(mapData.getPosMap()[0] + mapData.getPosMap()[1] * mapData.getCountBlocks());
        if (mapData.getPosMap()[0] >= 0) 
            takeMapPos(mapData.getPosMap()[0], mapData.getPosMap()[1], null);
    }, [])

    useEffect(() => {
        setBlockColors(generateColorBlocks());
    }, [pos]);


    const createSeedRandomBlocks = () => {
        let newSeedArray = [];

        for (let row = 0; row < mapData.getCountBlocks(); row++) {
            for (let col = 0; col < mapData.getCountBlocks(); col++) {
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


    const takeMapPos = (x, y, type) => {
        if (type === 2) {
            setMessage("Red areas are unsafe and cannot be selected");
            setLockNext(true);
            setTypeMessage("default");
        }
        else if (type === 1) {
            setMessage("Yellow areas are reserved and unavailable");
            setLockNext(true);
            setTypeMessage("default");
        }
        else if (type === 0) {
            setMessage("Select a location for your tent on the map");
            setLockNext(true);
            setTypeMessage("default");
        }
        else {
            setMessage("Location selected! You can continue");
            setLockNext(false);
            setTypeMessage("success");
            mapData.setPosMap(x,  y); // save top left pixel of block
        }
        setPos(x + y * mapData.getCountBlocks());
    }





    const generateColorBlocks = () => {
        let block = [];
        for (let row = 0; row < mapData.getCountBlocks(); row++) {
            for (let col = 0; col < mapData.getCountBlocks(); col++) {
                let i = row + col * 20;
                let r = seedRandomBlock[i];
                if (r === 0) {
                    block.push(<div key={`${row} ${col}`} className={`${classes.colorBlock} ${classes.red}`} onClick={() => { takeMapPos(-1, -1, 2) }}></div>);
                } else if (r === 1) {
                    block.push(<div key={`${row} ${col}`} className={`${classes.colorBlock} ${classes.orange}`} onClick={() => { takeMapPos(-1, -1, 1) }}></div>);
                } else {
                    block.push(<div key={`${row} ${col}`} className={(pos === row + col * mapData.getCountBlocks()) ? `${classes.colorBlock} ${classes.green}` : `${classes.colorBlock}`} onClick={() => { takeMapPos(row, col, null) }}></div>);
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
            <Header panel={true} colorType={typeMessage} message={message} helpPage={help} />
        </>
    );
}

export default SelectLocation;
